# 🎯 Quick Reference: Image Replacement Lines

## Exact Lines to Change in Each File

### 📄 File 1: Header Logo
**File**: `/src/app/components/header.tsx`  
**Line**: 6

```tsx
// FIND THIS:
const logo = 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=200&h=80&fit=crop&crop=center';

// REPLACE WITH YOUR IMAGE:
const logo = 'YOUR_IMAGE_URL_HERE';
// Examples:
// const logo = 'https://i.imgur.com/abc123.png';
// const logo = '/images/logo.png';
```

---

### 📄 File 2: Hero Background
**File**: `/src/app/components/hero.tsx`  
**Line**: 7

```tsx
// FIND THIS:
const heroImage = 'https://images.unsplash.com/photo-1768200498972-fd56353d73fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMGhvdXNlJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNDc0MTE4fDA&ixlib=rb-4.1.0&q=80&w=1080';

// REPLACE WITH YOUR IMAGE:
const heroImage = 'YOUR_IMAGE_URL_HERE';
// Examples:
// const heroImage = 'https://i.imgur.com/hero123.jpg';
// const heroImage = '/images/hero-background.jpg';
```

---

### 📄 File 3: Service Images
**File**: `/src/app/components/services.tsx`  
**Lines**: 4-8

```tsx
// FIND THESE 5 LINES:
const windowCleaningImage = 'https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjQ3NDExNnww&ixlib=rb-4.1.0&q=80&w=1080';
const interiorWindowImage = 'https://images.unsplash.com/photo-1508024043938-d0cfe70cf65d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHdpbmRvd3MlMjBjbGVhbiUyMGJyaWdodHxlbnwxfHx8fDE3NzI0NzQxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const screenCleaningImage = 'https://images.unsplash.com/photo-1723400830780-64e3d550705b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzY3JlZW4lMjBjbGVhbmluZyUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyNDc0MTE2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const skylightCleaningImage = 'https://images.unsplash.com/photo-1762765751597-ba7bbad84a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMGNlaWxpbmclMjBicmlnaHR8ZW58MXx8fHwxNzcyNDc0MTE3fDA&ixlib=rb-4.1.0&q=80&w=1080';
const powerWashingImage = 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1080&q=80';

// REPLACE WITH YOUR IMAGES:
const windowCleaningImage = 'YOUR_WINDOW_CLEANING_IMAGE_URL';
const interiorWindowImage = 'YOUR_INTERIOR_WINDOW_IMAGE_URL';
const screenCleaningImage = 'YOUR_SCREEN_CLEANING_IMAGE_URL';
const skylightCleaningImage = 'YOUR_SKYLIGHT_IMAGE_URL';
const powerWashingImage = 'YOUR_POWER_WASHING_IMAGE_URL';

// Examples:
// const windowCleaningImage = '/images/window-cleaning.jpg';
// const interiorWindowImage = '/images/interior-windows.jpg';
// const screenCleaningImage = '/images/screen-cleaning.jpg';
// const skylightCleaningImage = '/images/skylight.jpg';
// const powerWashingImage = '/images/power-washing.jpg';
```

---

### 📄 File 4: Before/After Images
**File**: `/src/app/components/before-after.tsx`  
**Lines**: 7-8

```tsx
// FIND THESE 2 LINES:
const beforeAfterImage = 'https://images.unsplash.com/photo-1590503347339-ccd768ad83d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWZvcmUlMjBhZnRlciUyMGNsZWFuaW5nJTIwY29tcGFyaXNvbnxlbnwxfHx8fDE3NzI0NzQxMTh8MA&ixlib=rb-4.1.0&q=80&w=1080';
const windowCleaningImage = 'https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBjbGVhbmluZyUyMHByb2Zlc3Npb25hbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjQ3NDExNnww&ixlib=rb-4.1.0&q=80&w=1080';

// REPLACE WITH YOUR IMAGES:
const beforeAfterImage = 'YOUR_BEFORE_AFTER_IMAGE_URL';
const windowCleaningImage = 'YOUR_WINDOW_CLEANING_IMAGE_URL';

// Examples:
// const beforeAfterImage = '/images/before-after.jpg';
// const windowCleaningImage = '/images/clean-windows.jpg';
```

---

## 🚀 Quick Workflow

### Step 1: Get Your Image URLs
Upload to Imgur or add to `/public/images/` folder

### Step 2: Open Files and Replace
Use Find & Replace in your code editor:
- **Find**: `const logo = 'https://images.unsplash.com/`
- **Replace with**: `const logo = 'YOUR_URL`

### Step 3: Test Locally
```bash
npm run dev
# Check localhost:5173
```

### Step 4: Deploy
```bash
git add .
git commit -m "Update to custom images"
git push
```

---

## 📋 Checklist

- [ ] **Header** - Logo image updated (line 6)
- [ ] **Hero** - Background image updated (line 7)
- [ ] **Services** - All 5 service images updated (lines 4-8)
- [ ] **Before/After** - 2 comparison images updated (lines 7-8)
- [ ] **Tested locally** - All images load correctly
- [ ] **Committed to git** - Changes pushed
- [ ] **Deployed** - Netlify build successful

---

## 💡 Pro Tip: Using Public Folder

1. Create `/public/images/` in your project
2. Add your images there
3. Reference as `/images/filename.jpg`
4. Commit to git
5. Deploy - images will work automatically!

**No external hosting needed!** ✅
