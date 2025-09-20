import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.egspect.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.egspect.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-symptoms-week-by-week',
      lastModified: new Date('2025-09-19'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-medical-checkups',
      lastModified: new Date('2025-09-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-warning-signs',
      lastModified: new Date('2025-09-17'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-weight-gain-calculator',
      lastModified: new Date('2025-09-16'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-exercise-guide',
      lastModified: new Date('2025-09-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-sleep-tips',
      lastModified: new Date('2025-09-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-myths-vs-facts',
      lastModified: new Date('2025-09-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-guide-for-fathers',
      lastModified: new Date('2025-09-12'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/how-partners-can-help-during-labor',
      lastModified: new Date('2025-09-11'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-due-date-calculator',
      lastModified: new Date('2025-09-10'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/gestational-diabetes-guide',
      lastModified: new Date('2025-09-09'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/common-pregnancy-questions-answered',
      lastModified: new Date('2025-09-08'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/third-trimester-symptoms',
      lastModified: new Date('2025-09-07'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/first-trimester-guide',
      lastModified: new Date('2025-09-06'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/pregnancy-nutrition-essentials',
      lastModified: new Date('2025-09-05'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/blog/ivf-vs-iui-vs-natural-conception',
      lastModified: new Date('2025-09-04'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Free Pregnancy Tools
    {
      url: 'https://www.egspect.com/tools',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.egspect.com/tools/due-date-calculator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.egspect.com/tools/pregnancy-week-calculator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/baby-name-generator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/pregnancy-weight-gain-calculator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/ovulation-calculator',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/baby-gender-predictor',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.egspect.com/tools/baby-size-comparison',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/contraction-timer',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/kick-counter',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.egspect.com/tools/pregnancy-nutrition-tracker',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}