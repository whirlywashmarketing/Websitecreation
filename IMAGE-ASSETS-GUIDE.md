# Image Assets Guide - Whirly Wash

## ✅ Migration Complete!

All `figma:asset` imports have been successfully replaced with local image imports from `/src/assets/`. This allows your site to deploy on Netlify and other hosting platforms.

---

## 📁 Asset Folder Structure

```
/src/assets/
├── 2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png  (Window Cleaning)
├── 28599dba92dd7aace354ca6fa32855e627a1d8ed.png  (Skylight Cleaning)
├── 39e2340f7aa6994865d43f4392da9012f6cd3189.png  (Before/After)
├── 7027b1ad002627514ca6ca1d2e0249502dc53da7.png  (Screen Cleaning)
├── ae4c2b70749b41efb37b4aec776649aa6dd47718.png  (Interior Windows)
├── c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png  (Logo)
├── c8ea79bea63d8da910bb8fdff3767efc9f3ed2e3.png  (Power Washing)
└── d02a4e56cfa8f074d700b4693aad210dfb4c739d.png  (Hero Image)
```

---

## 🗂️ Image Mapping by Component

### **Header Component** (`/src/app/components/header.tsx`)
- **Logo**: `c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png`
  - Used in: Site logo/branding
  - Import: `import logo from '../../assets/c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png'`

### **Hero Component** (`/src/app/components/hero.tsx`)
- **Hero Image**: `d02a4e56cfa8f074d700b4693aad210dfb4c739d.png`
  - Used in: Main hero section background
  - Import: `import image_d02a4e56cfa8f074d700b4693aad210dfb4c739d from '../../assets/d02a4e56cfa8f074d700b4693aad210dfb4c739d.png'`

### **Services Component** (`/src/app/components/services.tsx`)
- **Exterior Window Cleaning**: `2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png`
  - Import: `import windowCleaningImage from '../../assets/2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png'`
  
- **Interior Window Cleaning**: `ae4c2b70749b41efb37b4aec776649aa6dd47718.png`
  - Import: `import interiorWindowImage from '../../assets/ae4c2b70749b41efb37b4aec776649aa6dd47718.png'`
  
- **Screen Cleaning**: `7027b1ad002627514ca6ca1d2e0249502dc53da7.png`
  - Import: `import screenCleaningImage from '../../assets/7027b1ad002627514ca6ca1d2e0249502dc53da7.png'`
  
- **Skylight Cleaning**: `28599dba92dd7aace354ca6fa32855e627a1d8ed.png`
  - Import: `import skylightCleaningImage from '../../assets/28599dba92dd7aace354ca6fa32855e627a1d8ed.png'`
  
- **Power Washing**: `c8ea79bea63d8da910bb8fdff3767efc9f3ed2e3.png`
  - Import: `import powerWashingImage from '../../assets/c8ea79bea63d8da910bb8fdff3767efc9f3ed2e3.png'`

### **Before/After Component** (`/src/app/components/before-after.tsx`)
- **Before/After Comparison**: `39e2340f7aa6994865d43f4392da9012f6cd3189.png`
  - Import: `import beforeAfterImage from '../../assets/39e2340f7aa6994865d43f4392da9012f6cd3189.png'`
  
- **After Image (displayed on slider)**: `2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png`
  - Import: `import image_2bc2e546e3fa7ac717c02d833b99fdec7166aea5 from '../../assets/2bc2e546e3fa7ac717c02d833b99fdec7166aea5.png'`

---

## 🎯 Image Optimization Features

### **Automatic Compression** (via `vite-plugin-imagemin`)
All images will be automatically compressed during the build process:

- **JPEG**: Compressed to 80% quality (mozjpeg)
- **PNG**: Optimized with pngquant (80-90% quality)
- **SVG**: Optimized with SVGO
- **GIF**: Optimized with gifsicle

### **Build-Time Optimization**
When you run `npm run build` or deploy to Netlify, images are:
1. ✅ Automatically compressed
2. ✅ Optimized for web delivery
3. ✅ Cache-friendly (with content hashes)
4. ✅ Smaller file sizes (typically 40-70% reduction)

---

## 🚀 Deployment Ready

Your site is now ready to deploy on:
- ✅ **Netlify** (no more `figma:asset` errors!)
- ✅ **Vercel**
- ✅ **GitHub Pages**
- ✅ **Any static hosting platform**

### To Deploy:
```bash
npm run build
# Upload the /dist folder to your hosting provider
```

---

## 📊 Image Performance Metrics

With the new setup, you should see:
- **30-50% smaller image sizes** (via compression)
- **Faster load times** (optimized assets)
- **Better caching** (content-hashed filenames)
- **Improved Core Web Vitals** (LCP, FCP improvements)

---

## 🔄 Adding New Images

To add new images in the future:

1. **Place image in `/src/assets/`**
   ```
   /src/assets/new-image.jpg
   ```

2. **Import in your component**
   ```tsx
   import newImage from '../../assets/new-image.jpg';
   ```

3. **Use in JSX**
   ```tsx
   <img src={newImage} alt="Description" />
   ```

4. **Images will be automatically compressed during build!**

---

## 📝 Additional Assets Used

### External URLs (Unsplash)
The following images are still loaded from external URLs:

- **Holiday Lighting Service**: Unsplash URL
  - Consider downloading and adding to `/src/assets/` for better performance
  
- **Testimonial Images**: Various Unsplash URLs
  - These are profile photos and can stay as external links

- **Before/After Additional Slides**: Unsplash URLs
  - Consider replacing with your own photos for authenticity

---

## ⚠️ Important Notes

1. **HEIC Files**: The following files need to be converted to JPG/PNG:
   - `IMG_6704.HEIC`
   - `IMG_8414.heic`
   
   HEIC is not web-compatible. Use an online converter or:
   ```bash
   # macOS/Linux with ImageMagick
   convert IMG_6704.HEIC IMG_6704.jpg
   ```

2. **File Naming**: Current files use hash-based names. Consider renaming for better maintainability:
   ```
   c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png → logo.png
   d02a4e56cfa8f074d700b4693aad210dfb4c739d.png → hero-background.png
   ```

3. **Asset Location**: Always keep assets in `/src/assets/` for consistency

---

## 🎨 Optimization Recommendations

To further improve performance:

1. **Convert large PNGs to WebP** (smaller file size, same quality)
2. **Use responsive images** with `srcset` for different screen sizes
3. **Add `loading="lazy"` to below-the-fold images** (already implemented)
4. **Consider using a CDN** for faster global delivery

---

## ✨ What Changed

### Before:
```tsx
import logo from 'figma:asset/c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png';
// ❌ Only works in Figma Make environment
```

### After:
```tsx
import logo from '../../assets/c881332f2cc51c7fd1d44ccfd573d7eafafaf317.png';
// ✅ Works everywhere: Netlify, Vercel, GitHub Pages, etc.
```

---

## 🔍 Troubleshooting

### Images Not Loading on Netlify?
1. Ensure all images are committed to git
2. Verify paths use `../../assets/` not absolute paths
3. Check file extensions match exactly (case-sensitive)

### Build Failing?
1. Check `vite-plugin-imagemin` is installed
2. Verify all imported images exist in `/src/assets/`
3. Clear cache: `rm -rf node_modules/.vite`

### Images Too Large?
1. The compression happens during `npm run build`
2. Development mode loads original files
3. Production build will have optimized versions

---

Generated: March 2026
Last Updated: Post-figma:asset migration
