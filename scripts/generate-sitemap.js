#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://www.egspect.com';
const APP_DIR = path.join(__dirname, '../app');
const SITEMAP_PATH = path.join(APP_DIR, 'sitemap.ts');

function getAllDirectories(dirPath, relativePath = '') {
  const items = [];
  
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        const fullPath = path.join(dirPath, entry.name);
        const currentRelativePath = relativePath ? `${relativePath}/${entry.name}` : entry.name;
        
        // Check if this directory has a page.tsx file
        const pageFile = path.join(fullPath, 'page.tsx');
        if (fs.existsSync(pageFile)) {
          const priority = getPriority(currentRelativePath);
          const changeFreq = getChangeFrequency(currentRelativePath);
          
          items.push({
            url: `${DOMAIN}/${currentRelativePath}`,
            lastModified: getLastModified(pageFile),
            changeFrequency: changeFreq,
            priority: priority
          });
        }
        
        // Recursively get subdirectories
        items.push(...getAllDirectories(fullPath, currentRelativePath));
      }
    }
  } catch (error) {
    console.warn(`Could not read directory ${dirPath}:`, error.message);
  }
  
  return items;
}

function getLastModified(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString().split('T')[0];
  } catch (error) {
    return new Date().toISOString().split('T')[0];
  }
}

function getPriority(path) {
  // Homepage
  if (path === '') return 1.0;
  
  // Main sections
  if (path === 'blog' || path === 'tools') return 0.9;
  
  // Tools (higher priority as they're functional)
  if (path.startsWith('tools/')) {
    // Core tools get higher priority
    const corePaths = [
      'tools/due-date-calculator',
      'tools/pregnancy-week-calculator',
      'tools/ovulation-calculator',
      'tools/contraction-timer'
    ];
    return corePaths.includes(path) ? 0.9 : 0.8;
  }
  
  // Blog posts
  if (path.startsWith('blog/')) {
    // Important health-related topics get higher priority
    const importantTopics = [
      'blog/pregnancy-warning-signs',
      'blog/bleeding-during-pregnancy',
      'blog/what-is-miscarriage',
      'blog/pregnancy-symptoms-week-by-week'
    ];
    return importantTopics.includes(path) ? 0.8 : 0.7;
  }
  
  // Other pages
  return 0.6;
}

function getChangeFrequency(path) {
  // Homepage and main sections change more frequently
  if (path === '' || path === 'blog' || path === 'tools') return 'weekly';
  
  // Tools might get updates less frequently
  if (path.startsWith('tools/')) return 'monthly';
  
  // Blog posts are typically static once published
  if (path.startsWith('blog/')) return 'monthly';
  
  return 'monthly';
}

function generateSitemap() {
  console.log('🔍 Scanning for pages...');
  
  const items = [];
  
  // Add homepage
  items.push({
    url: DOMAIN,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 1.0
  });
  
  // Scan app directory for pages
  const appPages = getAllDirectories(APP_DIR);
  items.push(...appPages);
  
  // Sort by priority (descending) then by URL
  items.sort((a, b) => {
    if (a.priority !== b.priority) {
      return b.priority - a.priority;
    }
    return a.url.localeCompare(b.url);
  });
  
  console.log(`📄 Found ${items.length} pages`);
  
  // Generate TypeScript sitemap file
  const sitemapContent = `import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
${items.map(item => `    {
      url: '${item.url}',
      lastModified: new Date('${item.lastModified}'),
      changeFrequency: '${item.changeFrequency}',
      priority: ${item.priority},
    }`).join(',\n')}
  ]
}
`;

  fs.writeFileSync(SITEMAP_PATH, sitemapContent);
  console.log(`✅ Sitemap generated at ${SITEMAP_PATH}`);
  
  // Generate summary
  const summary = {
    total: items.length,
    bySection: {},
    byPriority: {}
  };
  
  items.forEach(item => {
    const section = item.url.replace(DOMAIN, '').split('/')[1] || 'homepage';
    summary.bySection[section] = (summary.bySection[section] || 0) + 1;
    summary.byPriority[item.priority] = (summary.byPriority[item.priority] || 0) + 1;
  });
  
  console.log('\n📊 Summary:');
  console.log(`Total pages: ${summary.total}`);
  console.log('\nBy section:');
  Object.entries(summary.bySection).forEach(([section, count]) => {
    console.log(`  ${section}: ${count}`);
  });
  console.log('\nBy priority:');
  Object.entries(summary.byPriority).forEach(([priority, count]) => {
    console.log(`  ${priority}: ${count}`);
  });
  
  return items;
}

// Export for use as module
module.exports = { generateSitemap };

// Run if called directly
if (require.main === module) {
  generateSitemap();
}