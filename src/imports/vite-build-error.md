The Netlify deploy errored, with the following guidance provided:

**Relevant log lines**
- [line 55](#L55) — Netlify runs the build: `npm run build`  
- [line 56–57](#L56-L57) — package script runs `vite build`  
- [line 58](#L58) — Vite starts building  
- [line 61–64](#L61-L64) — Build fails with: `[vite:terser] terser not found. Since Vite v3, terser has become an optional dependency. You need to install it.`

Diagnosis
- Error type: missing dependency at build time.
- Cause: Vite (or a Vite config/plugin) expects the terser package for minification but terser is not installed in the project. Since Vite v3, terser is optional and must be installed explicitly if used.

Solution
1. Verify changes will be committed:
   - Ensure the project’s package.json is in the repo and you will commit package.json and the lockfile (package-lock.json or yarn.lock) when you add a dependency.

2. Easiest fix — install terser as a dev dependency:
   - Using npm:
```bash
npm install --save-dev terser
git add package.json package-lock.json
git commit -m "chore: add terser devDependency for Vite build"
git push
```
   - Or using yarn:
```bash
yarn add --dev terser
git add package.json yarn.lock
git commit -m "chore: add terser devDependency for Vite build"
git push
```
   - After push, Netlify will pick up the updated lockfile and rebuild successfully.

3. Alternative (if you do not want terser):
   - Configure Vite to use esbuild for minification instead of terser. In your vite.config.js:
```js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'esbuild' // use esbuild (bundled) instead of terser
  }
})
```
   - Commit and push the change; Netlify rebuild should succeed without adding terser.

Either approach resolves the error shown at [line 61–64](#L61-L64).

The relevant error logs are:

Line 0: Waiting for other deploys from your team to complete. Check the queue: https://app.netlify.com/teams/whirlywash-marketing/builds
Line 1: build-image version: 8c9b1115cf47daa4d19510cfee34034469213d7a (noble-new-builds)
Line 2: buildbot version: a1d2c1b97bf2ad3b19b1aeae0ec8dc337e1fce81
Line 3: Fetching cached dependencies
Line 4: Failed to fetch cache, continuing with build
Line 5: Starting to prepare the repo for build
Line 6: No cached dependencies found. Cloning fresh repo
Line 7: git clone --filter=blob:none https://github.com/whirlywashmarketing/Websitecreation
Line 8: Preparing Git Reference refs/heads/main
Line 9: Installing dependencies
Line 10: mise [36m~/.config/mise/config.toml[0m tools: [34mpython[0m@3.14.3
Line 11: mise [36m~/.config/mise/config.toml[0m tools: [34mruby[0m@3.4.8
Line 12: mise [36m~/.config/mise/config.toml[0m tools: [34mgo[0m@1.26.0
Line 13: v22.22.0 is already installed.
Line 14: Now using node v22.22.0 (npm v10.9.4)
Line 51: [96m[1m​[22m[39m
Line 52: [96m[1mBuild command from Netlify app                                [22m[39m
Line 53: [96m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 54: ​
Line 55: [36m$ npm run build[39m
Line 56: > @figma/my-make-file@0.0.1 build
Line 57: > vite build
Line 58: [36mvite v6.3.5 [32mbuilding for production...[36m[39m
Line 59: transforming...
Line 60: [32m✓[39m 2019 modules transformed.
Line 61: [31m✗[39m Build failed in 2.26s
Line 62: [31merror during build:
Line 63: [31m[vite:terser] terser not found. Since Vite v3, terser has become an optional dependency. You need to install it.[31m
Line 64:     at loadTerserPath (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:9752:13)
Line 65:     at Object.renderChunk (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:9793:27)
Line 66:     at Object.handler (file:///opt/build/repo/node_modules/vite/dist/node/chunks/dep-DBxKXgDP.js:46529:15)
Line 67:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:22571:40
Line 68:     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)[39m
Line 69: [91m[1m​[22m[39m
Line 70: [91m[1m"build.command" failed                                        [22m[39m
Line 71: [91m[1m────────────────────────────────────────────────────────────────[22m[39m
Line 72: ​
Line 73:   [31m[1mError message[22m[39m
Line 74:   Command failed with exit code 1: npm run build
Line 75: ​
Line 76:   [31m[1mError location[22m[39m
Line 77:   In Build command from Netlify app:
Line 78:   npm run build
Line 79: ​
Line 80:   [31m[1mResolved config[22m[39m
Line 81:   build:
Line 82:     command: npm run build
Line 83:     commandOrigin: ui
Line 84:     publish: /opt/build/repo/dist
Line 85:     publishOrigin: ui
Line 86: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 87: Failing build: Failed to build site
Line 88: Finished processing build request in 38.341s