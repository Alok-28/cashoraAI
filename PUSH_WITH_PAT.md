# 🚀 Push Using Personal Access Token (PAT)

GitHub CLI isn't installed, but we can use a Personal Access Token instead - it's just as easy!

---

## Step 1: Create Personal Access Token

1. Go to: https://github.com/settings/tokens
2. Click **Generate new token** → **Generate new token (classic)**
3. Fill in:
   - **Note:** "CashoraAI Push"
   - **Expiration:** 30 days (or more)
   - **Scopes:** Check only `repo`
4. Click **Generate token** at bottom
5. **Copy the token** (long string starting with `ghp_`)
   - ⚠️ Save it! You can only see it once

---

## Step 2: Push Your Code

Run this command in PowerShell (replace TOKEN with your actual token):

```powershell
git push https://TOKEN@github.com/Alok-28/cashoraAI.git main
```

**Example with a real token:**
```powershell
git push https://ghp_abc123xyz789@github.com/Alok-28/cashoraAI.git main
```

---

## Step 3: Watch for Success

You should see output like:
```
Enumerating objects: 9, done.
Counting objects: 100% (9/9), done.
Delta compression using up to 8 threads
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 150.21 KB | 1.25 MB/s, done.
Total 9 (delta 5), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (5/5), done.
To github.com:Alok-28/cashoraAI.git
   ea4b39c..075dab9  main -> main
```

---

## Step 4: Verify Push

Go to: https://github.com/Alok-28/cashoraAI

You should see:
- ✅ New commit: "Add Supabase database integration and setup"
- ✅ 9 files changed
- ✅ Timestamp: "Just now"

---

## Done! ✅

Once pushed successfully:

1. **Run database setup:**
   - Go to https://app.supabase.com
   - SQL Editor → New Query
   - Copy: `server/SUPABASE_FUNCTIONS.sql`
   - Click Run

2. **Test login:**
   - http://127.0.0.1:4000/login/
   - demo@cashora.tech / demo123

---

**Ready? Get your token and run the push command!**

