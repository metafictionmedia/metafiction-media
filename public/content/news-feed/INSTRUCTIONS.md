# News Feed Instructions - Metafiction Media

## How to Add News with Media

News items are stored in `/Users/phil/devprojects/GitHub/metafiction-media/public/content/news-feed/main-feed.json`

### Available Fields:

- **id**: Unique identifier (required)
- **title**: News headline (required)
- **excerpt**: Short description (required)
- **date**: Date in YYYY-MM-DD format (optional)
- **image**: Path to image file (optional)
- **videoUrl**: Direct link to video file (.mp4, .webm) (optional)
- **embedUrl**: Instagram/YouTube/TikTok embed URL (optional)
- **linkUrl**: External link to social media post (optional)

### Examples:

#### 1. Simple Text News:
```json
{
  "id": "jeffrey-comics-live",
  "title": "Jeffrey Comic Strips Now Live!",
  "excerpt": "Visit jeffreythemonster.com to read the new Family Dinner comic strip",
  "date": "2025-11-30"
}
```

#### 2. News with Image:
```json
{
  "id": "new-project-announcement",
  "title": "Exciting New Project!",
  "excerpt": "We're working on something amazing. Check out this concept art!",
  "date": "2025-11-30",
  "image": "/assets/news/concept-art.jpg"
}
```

#### 3. News with Direct Video:
```json
{
  "id": "studio-tour",
  "title": "Studio Tour Video",
  "excerpt": "Take a tour of the Metafiction Media studio!",
  "date": "2025-11-30",
  "videoUrl": "/videos/studio-tour.mp4"
}
```

#### 4. News with Instagram Embed:
```json
{
  "id": "instagram-reel",
  "title": "Behind the Scenes Reel",
  "excerpt": "Watch our latest Instagram reel showing the creation process!",
  "date": "2025-11-30",
  "embedUrl": "https://www.instagram.com/p/YOUR_POST_ID/embed",
  "linkUrl": "https://www.instagram.com/p/YOUR_POST_ID/"
}
```

#### 5. Image Preview with Link to Instagram:
```json
{
  "id": "instagram-carousel",
  "title": "New Character Designs",
  "excerpt": "Check out our Instagram for the full carousel of character designs!",
  "date": "2025-11-30",
  "image": "/assets/news/character-preview.jpg",
  "linkUrl": "https://www.instagram.com/p/YOUR_POST_ID/"
}
```

### Complete main-feed.json Example:

```json
[
  {
    "id": "latest-news",
    "title": "Check Out Our Latest Post!",
    "excerpt": "New artwork posted on Instagram!",
    "date": "2025-11-30",
    "image": "/assets/news/latest-art.jpg",
    "linkUrl": "https://www.instagram.com/metafictionmedia"
  },
  {
    "id": "older-news",
    "title": "Previous Update",
    "excerpt": "This appears second",
    "date": "2025-11-28"
  }
]
```

### How to Get Instagram Embed URL:

1. Go to your Instagram post on desktop
2. Click the three dots (...) in the top right
3. Select "Embed"
4. Copy the URL from the embed code: `https://www.instagram.com/p/ABC123/embed`

### Tips:

- **For images**: Save to `public/assets/news/` and reference as `/assets/news/filename.jpg`
- **For videos**: Save to `public/videos/` and reference as `/videos/filename.mp4`
- **Newest first**: Add new items at the TOP of the array
- **Homepage shows 3**: Only the first 3 items will display
- **Image + Link**: Use both to show a preview that links to Instagram
- **Keep videos small**: Under 50MB for best performance
- **Instagram embeds**: Work great for posts, carousels, and reels
