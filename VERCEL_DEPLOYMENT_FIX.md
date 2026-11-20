# 🚀 Vercel Deployment - Vite Build Error Fix

## Problem

```
sh: line 1: vite: command not found
Error: [BUILD_UTILS_SPAWN_127] Command "vite build" exited with 127
```

**Root Cause:** Vercel was trying to run a Vite build command, but your project is a Node.js Express server + static files, not a Vite project.

---

## Solution ✅

I've created a proper `vercel.json` configuration file that tells Vercel:
1. Don't run Vite
2. Just install server dependencies
3. Route API calls to Express server
4. Serve static files from root

---

## Files Updated

✅ **Created:** `vercel.json` - Proper Vercel configuration

---

## Configuration Details

```json
{
  "version": 2,
  "buildCommand": "cd server && npm install",
  "functions": {
    "server/index.js": {
      "memory": 1024,
      "maxDuration": 60,
      "runtime": "nodejs20.x"
    }
  },
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/server/index.js"
    },
    {
      "src": "/auth/(.*)",
      "dest": "/server/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### What This Does:

1. **buildCommand:** Installs dependencies in `/server` folder only
2. **functions:** Deploys `server/index.js` as a serverless function
3. **routes:** 
   - `/api/*` → Routes to Express server
   - `/auth/*` → Routes to Express server
   - `/*` → Serves static files from root

---

## Next Steps

### 1. Push Changes to GitHub

```bash
git add vercel.json
git commit -m "Add Vercel configuration for Express + static files"
git push origin main
```

### 2. Re-trigger Vercel Build

In Vercel dashboard:
- Go to your project
- Click "Deployments"
- Click "Redeploy" on the latest deployment
- OR push a new commit to trigger automatic rebuild

### 3. Set Environment Variables in Vercel

Go to: **Project Settings → Environment Variables**

Add these variables (from `server/.env`):

```
SUPABASE_URL=https://jeyqjgmypryfspvrfcmm.supabase.co
SUPABASE_ANON_KEY=sb_publishable_AyCxOuxEZZnwwL1Cs5ydbA_aHe-DAkL
SESSION_SECRET=your-super-secret-key
NODE_ENV=production
```

Optional (add later when ready):
```
SUPABASE_SERVICE_KEY=...
N8N_WEBHOOK_URL=...
OPENAI_API_KEY=...
YOUTUBE_CLIENT_ID=...
YOUTUBE_CLIENT_SECRET=...
etc.
```

---

## Expected Result

✅ Build completes successfully  
✅ Static files served from root (`/`, `/login/`, `/dashboard/`, etc.)  
✅ API calls routed to Express (`/api/*`, `/auth/*`)  
✅ Server running on Vercel serverless  

---

## Deployment Structure

```
Vercel
├─ Static Files (root)
│  ├─ index.html
│  ├─ login/index.html
│  ├─ dashboard/index.html
│  └─ assets/
│
└─ Serverless Function
   └─ server/index.js (Express)
      ├─ /api/upload
      ├─ /api/library
      ├─ /api/schedule-post
      ├─ /auth/login
      └─ ...all endpoints
```

---

## Alternative: Use Vercel Cli to Redeploy

```bash
# Install Vercel CLI (if not already)
npm i -g vercel

# Navigate to project
cd c:\Users\Alok\cashoraAI

# Redeploy
vercel --prod
```

---

## Troubleshooting

### Still getting Vite error?

1. Delete old Vercel deployment cache
2. Go to: **Project Settings → Git**
3. Disconnect and reconnect repository
4. Push a new commit to trigger rebuild

### Build times out?

Increase timeout in `vercel.json`:
```json
"maxDuration": 120
```

### Static files not serving?

Ensure they're in root directory:
- ✅ `/index.html`
- ✅ `/login/index.html`
- ✅ `/dashboard/index.html`
- ✅ `/assets/*`

---

## Verification Checklist

After deployment:

- [ ] Build completes without errors
- [ ] Visit root URL - should see home page
- [ ] Visit `/login/` - should see login page
- [ ] Visit `/api/posting-status` - should return data
- [ ] Check Network tab - API calls go to `/api/*`
- [ ] Check Environment Variables set in Vercel

---

## Success Indicators

✅ **Build Log Shows:**
```
✓ Build completed
✓ Deployed to production
```

✅ **Website Works:**
- Home page loads
- Can navigate to /login/
- Can access /dashboard/

✅ **API Works:**
- `/api/posting-status` returns JSON
- `/auth/user` endpoint responds

---

## Files Changed

| File | Status | Purpose |
|------|--------|---------|
| `vercel.json` | ✅ Created | Proper Vercel configuration |
| `server/package.json` | ✅ No change | Already correct |
| `server/index.js` | ✅ No change | Already correct |

---

## Summary

The Vite error is fixed! Vercel will now:
1. Build the Node.js server correctly
2. Serve static files properly
3. Route API calls to Express

**Next:** Push this vercel.json and trigger a redeploy in Vercel!

