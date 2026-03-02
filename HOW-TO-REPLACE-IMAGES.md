# 🖼️ How to Replace Images with Your Own (Netlify-Safe)

## Method 1: Use Image URLs (Easiest - No Build Changes)

### Step 1: Host Your Images

**Option A: Imgur (Simplest)**
1. Go to https://imgur.com
2. Upload your image
3. Right-click → "Copy image address"
4. You'll get a URL like: `https://i.imgur.com/ABC123.png`

**Option B: Cloudinary (Best Quality)**
1. Sign up at https://cloudinary.com (free)
2. Upload images to Media Library
3. Click image → Copy URL
4. You'll get: `https://res.cloudinary.com/your-account/image/upload/v123/image.jpg`

**Option C: GitHub/Public Folder**
1. In your project, create `/public/images/` folder
2. Put images there
3. Reference as: `/images/logo.png`
4. After deployment: `https://your-site.netlify.app/images/logo.png`

### Step 2: Update Components

Open each component file and replace the URL:

#### **Header Logo** (`/src/app/components/header.tsx`)
```tsx
// Find this line (around line 6):
const logo = 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop&crop=center';

// Replace with YOUR image URL:
const logo = 'https://i.imgur.com/YOUR-LOGO-ID.png';
// OR use public folder:
const logo = '/images/logo.png';
```

#### **Hero Image** (`/src/app/components/hero.tsx`)
```tsx
// Find this line (around line 7):
const heroImage = 'https://images.unsplash.com/photo-1768200498972-fd56353d73fc...';

// Replace with YOUR image URL:
const heroImage = 'https://i.imgur.com/YOUR-HERO-ID.jpg';
// OR:
const heroImage = '/images/hero-background.jpg';
```

#### **Services Images** (`/src/app/components/services.tsx`)
```tsx
// Find these lines (around lines 4-8):
const windowCleaningImage = 'https://images.unsplash.com/...';
const interiorWindowImage = 'https://images.unsplash.com/...';
const screenCleaningImage = 'https://images.unsplash.com/...';
const skylightCleaningImage = 'https://images.unsplash.com/...';
const powerWashingImage = 'https://images.unsplash.com/...';

// Replace with YOUR image URLs:
const windowCleaningImage = 'https://i.imgur.com/window-clean.jpg';
const interiorWindowImage = 'https://i.imgur.com/interior-window.jpg';
const screenCleaningImage = 'https://i.imgur.com/screen-clean.jpg';
const skylightCleaningImage = 'https://i.imgur.com/skylight.jpg';
const powerWashingImage = 'https://i.imgur.com/power-wash.jpg';
```

#### **Before/After Images** (`/src/app/components/before-after.tsx`)
```tsx
// Find these lines (around lines 7-8):
const beforeAfterImage = 'https://images.unsplash.com/...';
const windowCleaningImage = 'https://images.unsplash.com/...';

// Replace with YOUR image URLs:
const beforeAfterImage = 'https://i.imgur.com/before-after.jpg';
const windowCleaningImage = 'https://i.imgur.com/clean-window.jpg';
```

### Step 3: Test & Deploy

```bash
# Test locally first
npm run dev
# Open localhost:5173 and verify images load

# Commit changes
git add src/app/components/*.tsx
git commit -m "Update images with custom URLs"
git push

# Netlify will automatically redeploy
```

---

## Method 2: Use Local Assets (Better Performance)

### Step 1: Create Assets Folder & Add Images

```bash
# Create the folder
mkdir -p public/images

# Add your images (using descriptive names)
# Copy your images to: public/images/
```

**Recommended file structure:**
```
public/
└── images/
    ├── logo.png
    ├── hero-background.jpg
    ├── window-cleaning.jpg
    ├── interior-windows.jpg
    ├── screen-cleaning.jpg
    ├── skylight-cleaning.jpg
    ├── power-washing.jpg
    ├── before-after-1.jpg
    └── before-after-2.jpg
```

### Step 2: Update Components

Use relative paths starting with `/images/`:

#### **Header** (`/src/app/components/header.tsx`)
```tsx
const logo = '/images/logo.png';
```

#### **Hero** (`/src/app/components/hero.tsx`)
```tsx
const heroImage = '/images/hero-background.jpg';
```

#### **Services** (`/src/app/components/services.tsx`)
```tsx
const windowCleaningImage = '/images/window-cleaning.jpg';
const interiorWindowImage = '/images/interior-windows.jpg';
const screenCleaningImage = '/images/screen-cleaning.jpg';
const skylightCleaningImage = '/images/skylight-cleaning.jpg';
const powerWashingImage = '/images/power-washing.jpg';
```

#### **Before/After** (`/src/app/components/before-after.tsx`)
```tsx
const beforeAfterImage = '/images/before-after-1.jpg';
const windowCleaningImage = '/images/window-cleaning.jpg';
```

### Step 3: Optimize Images Before Adding

For best performance, compress your images first:

**Online Tools:**
- https://tinypng.com - PNG/JPG compression
- https://squoosh.app - Advanced compression
- https://imageoptim.com - Desktop app (Mac)

**Target Sizes:**
- Logo: < 50KB
- Hero image: < 300KB
- Service images: < 200KB each
- Before/after: < 250KB each

### Step 4: Commit & Deploy

```bash
# Add all images to git
git add public/images/

# Add component changes
git add src/app/components/*.tsx

# Commit
git commit -m "Add custom images to public folder"

# Push to trigger Netlify deployment
git push
```

---

## ✅ Quick Checklist

### Before Pushing to Git:

- [ ] All image URLs are updated in components
- [ ] Images are uploaded to host OR added to `/public/images/`
- [ ] Tested locally with `npm run dev`
- [ ] All images load without errors in browser console (F12)
- [ ] Images look good on mobile and desktop

### Files to Update:

- [ ] `/src/app/components/header.tsx` - Logo
- [ ] `/src/app/components/hero.tsx` - Hero background
- [ ] `/src/app/components/services.tsx` - 5-6 service images
- [ ] `/src/app/components/before-after.tsx` - Before/after images

---

## 🎯 Quick Example: Replacing Logo

### Current Code (header.tsx line 6):
```tsx
const logo = 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop&crop=center';
```

### Option 1 - Imgur:
```tsx
const logo = 'https://i.imgur.com/ABC123.png';
```

### Option 2 - Public Folder:
```tsx
const logo = '/images/logo.png';
```

### Test It:
```bash
npm run dev
# Visit localhost:5173 and check if logo appears
```

---

## 🚨 Common Mistakes to Avoid

### ❌ DON'T use relative imports like this:
```tsx
import logo from '../../assets/logo.png';  // ❌ Won't work on Netlify
```

### ✅ DO use public folder paths or URLs:
```tsx
const logo = '/images/logo.png';  // ✅ Works everywhere
const logo = 'https://i.imgur.com/ABC.png';  // ✅ Works everywhere
```

---

## 🔍 Testing Before Deploy

### Local Test:
```bash
# Start dev server
npm run dev

# Open browser console (F12)
# Check for any 404 errors on images
# Verify all images load
```

### Build Test (Simulates Netlify):
```bash
# Build for production
npm run build

# Preview the build
npx serve dist

# Open localhost:3000
# Verify everything works
```

---

## 🎨 Image Optimization Tips

### Recommended Dimensions:
- **Logo**: 200x80px (or 400x160px for retina)
- **Hero**: 1920x1080px
- **Service cards**: 800x600px
- **Before/after**: 1200x800px

### File Formats:
- **Photos**: Use JPG (smaller file size)
- **Logo/Graphics**: Use PNG (transparency support)
- **Modern browsers**: WebP (best compression)

### Compression:
- JPG: 75-85% quality is usually perfect
- PNG: Use TinyPNG or similar tools
- Always optimize before uploading!

---

## 📞 Need Help?

If images don't appear after deploying:

1. **Check Browser Console** (F12)
   - Look for 404 errors
   - Verify image URLs are correct

2. **Check Netlify Deploy Log**
   - Look for build errors
   - Verify files are included in build

3. **Check Image URLs**
   - Test URLs in browser directly
   - Ensure they're publicly accessible

4. **Check File Paths**
   - Public folder files: Use `/images/file.jpg`
   - External URLs: Must start with `https://`

---

## 🎉 Summary

**Easiest Method**: Upload to Imgur, replace URLs in code ✅  
**Best Performance**: Add to `/public/images/`, use `/images/file.jpg` ✅  
**Avoid**: Local imports from `src/assets/` (won't work on Netlify) ❌

Choose the method that works best for you and follow the steps above!
