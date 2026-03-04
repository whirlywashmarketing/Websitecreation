# Google Search Console verification

For the verification to be **live** on your deployed site, the verification file or meta tag must be in the right place.

## Why it wasn’t live

This is a **Vite** project. Only files inside the **`public/`** folder are copied to the build output (`dist/`) and served at the site root. Files in the project root (e.g. `google1234....html`) are **not** copied, so they never appear on the live site.

## What to do

### Option A: HTML file verification

1. In [Google Search Console](https://search.google.com/search-console), choose **HTML file** as the verification method.
2. Download or copy the file Google gives you (e.g. `google4a1b2c3d4e5f6789.html`).
3. Put that file **inside the `public/` folder**:
   - Path: `public/google4a1b2c3d4e5f6789.html` (use your actual filename).
   - Do **not** put it in the project root.
4. Commit and push:
   ```bash
   git add public/google*.html
   git commit -m "Add Google Search Console verification file"
   git push
   ```
5. After the site redeploys, the file will be at `https://your-domain.com/google4a1b2c3d4e5f6789.html`. Click **Verify** in Search Console.

### Option B: HTML meta tag verification

1. In Search Console, choose **HTML tag** and copy the `<meta>` line.
2. Add that meta tag inside the `<head>` of **`index.html`** (at the top of the project).
3. Commit, push, and redeploy. Then click **Verify** in Search Console.

---

**Summary:** Put the verification **file** in **`public/`**, or put the verification **meta tag** in **`index.html`**. Then push so the live site updates.
