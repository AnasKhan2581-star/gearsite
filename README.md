# GearBaskets — File Structure & Deployment Guide

## File Structure
```
gearbaskets.com/
├── index.html              ← Homepage (all baskets, blogs, guide)
├── robots.txt              ← Search engine + AI bot permissions
├── sitemap.xml             ← All pages for Google indexing
├── llms.txt                ← AI-readable site summary (new SEO standard)
├── css/
│   └── style.css           ← All styles
├── js/
│   ├── currency.js         ← Live exchange rate fetching + conversion
│   └── app.js              ← Renders baskets/blogs/guide from data files
├── data/
│   ├── baskets.js          ← All 12 gear basket definitions
│   └── blogs.js            ← All 20 blog post metadata
├── blogs/
│   ├── _TEMPLATE.html      ← Copy this to write new blog posts
│   ├── best-camera-beginners-2025.html  ← Full blog post example
│   └── [slug].html         ← All other blog posts
└── ai-files/
    ├── site-context.md     ← Detailed AI context (read by LLMs)
    └── gear-data.json      ← Machine-readable gear specs and prices
```

## How to Add a New Blog Post

1. Copy `blogs/_TEMPLATE.html` → `blogs/your-post-slug.html`
2. Fill in the template (title, meta, content)
3. Open `data/blogs.js`, add entry to TOP of `BLOGS_DATA` array:
```js
{
  slug: 'your-post-slug',          // must match filename
  title: 'Your Post Title',
  category: 'Category Name',
  emoji: '📷',                     // shows as blog card thumbnail
  excerpt: 'Short description...',
  date: 'Month Year',
  readTime: 'X min read',
  tags: ['Tag1', 'Tag2'],
  seoKeywords: 'your, keywords'
}
```
4. Upload both files. Homepage auto-shows new post. No build step needed.
5. Update `sitemap.xml` with new URL entry.

## Currency Conversion

Live rates fetched from `open.er-api.com/v6/latest/INR` on page load.
Fallback rates hardcoded if API fails.
All prices stored as `data-inr` attributes, converted on currency switch.

## SEO / AI Indexing Files

| File | Purpose |
|------|---------|
| `robots.txt` | Allows all bots including GPTBot, ClaudeBot, PerplexityBot |
| `sitemap.xml` | All URLs for Google/Bing indexing |
| `llms.txt` | Plain-text site summary for LLM consumption |
| `ai-files/site-context.md` | Detailed markdown context for AI systems |
| `ai-files/gear-data.json` | Structured gear specs for AI parsing |
| Schema.org JSON-LD in each HTML | Article, WebSite, ItemList, FAQPage structured data |

## Hosting Recommendation
- Any static host: Netlify, Vercel, Cloudflare Pages, or shared hosting
- No server/database required — 100% static files
- Just drag-and-drop the folder to deploy
