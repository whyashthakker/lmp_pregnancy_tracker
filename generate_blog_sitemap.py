#!/usr/bin/env python3
"""
Blog Sitemap Generator
Automatically generates a sitemap.xml for all blog posts by scanning the blog directory structure.
"""

import os
import re
from datetime import datetime
from pathlib import Path

def extract_metadata_from_tsx(file_path):
    """Extract title and description from TSX file metadata."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract title from metadata
        title_match = re.search(r"title:\s*['\"]([^'\"]+)['\"]", content)
        title = title_match.group(1) if title_match else None
        
        # Extract description from metadata
        desc_match = re.search(r"description:\s*['\"]([^'\"]+)['\"]", content)
        description = desc_match.group(1) if desc_match else None
        
        return title, description
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return None, None

def get_blog_posts(blog_dir):
    """Scan blog directory and extract all blog post information."""
    blog_posts = []
    
    if not os.path.exists(blog_dir):
        print(f"Blog directory not found: {blog_dir}")
        return blog_posts
    
    for item in os.listdir(blog_dir):
        item_path = os.path.join(blog_dir, item)
        
        # Skip if not a directory
        if not os.path.isdir(item_path):
            continue
        
        # Look for page.tsx in the directory
        page_file = os.path.join(item_path, 'page.tsx')
        if os.path.exists(page_file):
            # Extract metadata
            title, description = extract_metadata_from_tsx(page_file)
            
            # Get file modification time
            mod_time = os.path.getmtime(page_file)
            last_modified = datetime.fromtimestamp(mod_time).strftime('%Y-%m-%d')
            
            blog_posts.append({
                'slug': item,
                'title': title or item.replace('-', ' ').title(),
                'description': description or f"Blog post about {item.replace('-', ' ')}",
                'last_modified': last_modified,
                'url': f"/blog/{item}"
            })
    
    # Sort by slug for consistent ordering
    blog_posts.sort(key=lambda x: x['slug'])
    return blog_posts

def generate_sitemap_xml(blog_posts, base_url="https://egspect.com"):
    """Generate XML sitemap content."""
    xml_content = '''<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
'''
    
    for post in blog_posts:
        xml_content += f'''  <url>
    <loc>{base_url}{post['url']}</loc>
    <lastmod>{post['last_modified']}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
'''
    
    xml_content += '</urlset>\n'
    return xml_content

def main():
    """Main function to generate blog sitemap."""
    # Get the script directory and project root
    script_dir = Path(__file__).parent
    project_root = script_dir
    blog_dir = project_root / "app" / "blog"
    
    print(f"Scanning blog directory: {blog_dir}")
    
    # Get all blog posts
    blog_posts = get_blog_posts(str(blog_dir))
    
    if not blog_posts:
        print("No blog posts found!")
        return
    
    print(f"Found {len(blog_posts)} blog posts:")
    for post in blog_posts:
        print(f"  - {post['slug']} ({post['title']})")
    
    # Generate sitemap XML
    sitemap_content = generate_sitemap_xml(blog_posts)
    
    # Write sitemap to file
    sitemap_path = project_root / "public" / "blog-sitemap.xml"
    
    # Create public directory if it doesn't exist
    sitemap_path.parent.mkdir(exist_ok=True)
    
    with open(sitemap_path, 'w', encoding='utf-8') as f:
        f.write(sitemap_content)
    
    print(f"\n✅ Blog sitemap generated successfully!")
    print(f"📍 Saved to: {sitemap_path}")
    print(f"📊 Total blog posts: {len(blog_posts)}")
    
    # Also generate a JSON index for potential API use
    json_path = project_root / "public" / "blog-index.json"
    import json
    
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump({
            'generated_at': datetime.now().isoformat(),
            'total_posts': len(blog_posts),
            'posts': blog_posts
        }, f, indent=2, ensure_ascii=False)
    
    print(f"📋 Blog index JSON also saved to: {json_path}")

if __name__ == "__main__":
    main()