# 📋 All Environment Variables - CashoraAI

Complete list of all environment variables used in the application.

---

## ✅ Currently Configured in `.env`

These are already set in `server/.env`:

```dotenv
# Session Secret Key (Change this in production!)
SESSION_SECRET=your-super-secret-key-change-in-production-min-32-chars

# Server Port (default: 4000)
PORT=4000

# Node Environment
NODE_ENV=development

# ── Supabase ───────────────────────────────────���──────────────
SUPABASE_URL=https://jeyqjgmypryfspvrfcmm.supabase.co
SUPABASE_ANON_KEY=sb_publishable_AyCxOuxEZZnwwL1Cs5ydbA_aHe-DAkL
# SUPABASE_SERVICE_KEY=paste-your-service-role-key-here
```

---

## 🔴 Required Environment Variables (Must Configure)

### Database
- **SUPABASE_URL** ✅ CONFIGURED
  - Current: `https://jeyqjgmypryfspvrfcmm.supabase.co`
  - Purpose: PostgreSQL database URL
  
- **SUPABASE_ANON_KEY** ✅ CONFIGURED
  - Current: `sb_publishable_AyCxOuxEZZnwwL1Cs5ydbA_aHe-DAkL`
  - Purpose: Anonymous key for client access
  
- **SUPABASE_SERVICE_KEY** ⏳ OPTIONAL (Recommended)
  - Purpose: Service role key for backend operations
  - Where: Supabase dashboard → Settings → API → Service Role Key
  - Note: Bypasses Row Level Security

### Server
- **SESSION_SECRET** ✅ CONFIGURED
  - Current: `your-super-secret-key-change-in-production-min-32-chars`
  - Purpose: Encrypts session cookies
  - ⚠️ Change in production!
  
- **PORT** ✅ CONFIGURED
  - Current: `4000`
  - Purpose: Server listen port
  
- **NODE_ENV** ✅ CONFIGURED
  - Current: `development`
  - Options: `development`, `production`

---

## 🟠 Optional - n8n Automation

- **N8N_WEBHOOK_URL**
  - Default: `https://felixfelix.app.n8n.cloud/webhook/89093ed9-5a7c-4f9b-a9a5-6c27045e0f2d`
  - Purpose: Webhook to trigger n8n automation
  - Example: `https://your-n8n-instance.com/webhook/your-webhook-id`

---

## 🟡 Optional - LLM APIs (Choose ONE)

For caption improvement feature. Choose any one:

### OpenAI (Recommended)
```dotenv
OPENAI_API_KEY=sk_your_openai_key
OPENAI_MODEL=gpt-4o-mini  # or gpt-4o, gpt-3.5-turbo
```
- Get key: https://platform.openai.com/api-keys

### OR Groq (Free & Fast)
```dotenv
GROQ_API_KEY=gsk_your_groq_key
GROQ_MODEL=llama-3.3-70b-versatile
```
- Get key: https://console.groq.com/keys

### OR Google Gemini
```dotenv
GEMINI_API_KEY=your_gemini_key
GEMINI_MODEL=gemini-2.5-flash
# Alternative names:
GOOGLE_AI_API_KEY=your_key
GOOGLE_API_KEY=your_key
```
- Get key: https://aistudio.google.com/

### OR Anthropic Claude
```dotenv
ANTHROPIC_API_KEY=sk-ant_your_key
ANTHROPIC_MODEL=claude-3-5-haiku-20241022
```
- Get key: https://console.anthropic.com/

### OR OpenRouter
```dotenv
OPENROUTER_API_KEY=sk-or_your_key
OPENROUTER_MODEL=openai/gpt-4o-mini
```
- Get key: https://openrouter.ai/keys

---

## 🔵 YouTube OAuth (Coming Soon)

For YouTube video posting:

```dotenv
YOUTUBE_CLIENT_ID=your_client_id.apps.googleusercontent.com
YOUTUBE_CLIENT_SECRET=your_client_secret
YOUTUBE_REDIRECT_URI=http://127.0.0.1:4000/auth/youtube/callback
```

**Setup:**
1. Go to: https://console.cloud.google.com/
2. Create new project
3. Enable YouTube Data API v3
4. Create OAuth 2.0 credentials (Desktop app)
5. Copy Client ID and Secret

---

## 🟢 Instagram API (Coming Soon)

For Instagram posting:

```dotenv
INSTAGRAM_ACCESS_TOKEN=your_access_token
INSTAGRAM_ACCOUNT_ID=17841465212584814  # default, override if needed
INSTAGRAM_APP_ID=your_app_id
INSTAGRAM_APP_SECRET=your_app_secret
```

**Setup:**
1. Go to: https://developers.facebook.com/
2. Create app
3. Add Instagram Graph API product
4. Get access token
5. Get App ID and Secret

---

## 🟣 Threads API (Coming Soon)

For Threads posting:

```dotenv
THREADS_ACCESS_TOKEN=your_access_token
THREADS_USER_ID=your_user_id
THREADS_USERNAME=vaibhav.tf7
```

**Setup:**
1. Go to: https://developers.meta.com/
2. Create app for Threads API
3. Get access token
4. Get User ID

---

## 🟤 Twitter/X API (Coming Soon)

For Twitter posting:

```dotenv
# API Keys
TWITTER_API_KEY=your_api_key
TWITTER_CONSUMER_KEY=your_api_key  # Alternative name
TWITTER_API_SECRET=your_api_secret
TWITTER_CONSUMER_SECRET=your_api_secret  # Alternative name

# Access Tokens
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret

# Bearer Token
TWITTER_BEARER_TOKEN=your_bearer_token

# Username (optional)
TWITTER_USERNAME=vaibhavxkashi13
```

**Setup:**
1. Go to: https://developer.twitter.com/
2. Create application
3. Generate API keys and tokens
4. Get Bearer Token

---

## 🔷 Bluesky API (Coming Soon)

For Bluesky posting:

```dotenv
BLUESKY_HANDLE=your.bsky.social
BLUESKY_APP_PASSWORD=your_app_password
```

**Setup:**
1. Go to: https://bsky.app
2. Create account
3. Settings → Privacy and Safety → App Passwords
4. Generate new app password
5. Copy handle and password

---

## 📊 Summary Table

| Variable | Status | Purpose | Required |
|----------|--------|---------|----------|
| SUPABASE_URL | ✅ Set | Database URL | YES |
| SUPABASE_ANON_KEY | ✅ Set | Client auth key | YES |
| SUPABASE_SERVICE_KEY | ⏳ Optional | Backend bypass | NO |
| SESSION_SECRET | ✅ Set | Cookie encryption | YES |
| PORT | ✅ Set | Server port | NO (default 4000) |
| NODE_ENV | ✅ Set | Environment | NO (default dev) |
| N8N_WEBHOOK_URL | ⏳ Optional | Automation | NO |
| OPENAI_API_KEY | ⏳ Optional | LLM caption | NO |
| GROQ_API_KEY | ⏳ Optional | LLM caption | NO |
| GEMINI_API_KEY | ⏳ Optional | LLM caption | NO |
| ANTHROPIC_API_KEY | ⏳ Optional | LLM caption | NO |
| OPENROUTER_API_KEY | ⏳ Optional | LLM caption | NO |
| YOUTUBE_CLIENT_ID | ⏳ Pending | YouTube OAuth | NO |
| YOUTUBE_CLIENT_SECRET | ⏳ Pending | YouTube OAuth | NO |
| INSTAGRAM_ACCESS_TOKEN | ⏳ Pending | Instagram API | NO |
| INSTAGRAM_ACCOUNT_ID | ⏳ Pending | Instagram API | NO |
| INSTAGRAM_APP_ID | ⏳ Pending | Instagram API | NO |
| INSTAGRAM_APP_SECRET | ⏳ Pending | Instagram API | NO |
| THREADS_ACCESS_TOKEN | ⏳ Pending | Threads API | NO |
| THREADS_USER_ID | ⏳ Pending | Threads API | NO |
| THREADS_USERNAME | ⏳ Pending | Threads API | NO |
| TWITTER_API_KEY | ⏳ Pending | Twitter API | NO |
| TWITTER_API_SECRET | ⏳ Pending | Twitter API | NO |
| TWITTER_ACCESS_TOKEN | ⏳ Pending | Twitter API | NO |
| TWITTER_ACCESS_SECRET | ⏳ Pending | Twitter API | NO |
| TWITTER_BEARER_TOKEN | ⏳ Pending | Twitter API | NO |
| BLUESKY_HANDLE | ⏳ Pending | Bluesky API | NO |
| BLUESKY_APP_PASSWORD | ⏳ Pending | Bluesky API | NO |

---

## 🚀 How to Add Variables

1. Open: `server/.env`
2. Add new line with format: `KEY=value`
3. Save file
4. Restart server: `npm start`
5. Access via: `process.env.KEY`

---

## 🔐 Production Environment Setup

Create separate `.env.production`:

```dotenv
NODE_ENV=production
SESSION_SECRET=your-long-random-secret-minimum-32-characters-very-secure

# Use service key in production
SUPABASE_SERVICE_KEY=your_service_role_key

# Use your production URLs
YOUTUBE_REDIRECT_URI=https://your-domain.com/auth/youtube/callback
N8N_WEBHOOK_URL=https://your-n8n-domain.com/webhook/your-id

# All API tokens from production apps
OPENAI_API_KEY=sk_prod_...
YOUTUBE_CLIENT_ID=prod_client_id
# ... etc
```

---

## ⚠️ Security Best Practices

1. **Never commit `.env` file** - Already in .gitignore ✅
2. **Use strong SESSION_SECRET** - Min 32 characters
3. **Different values per environment** - Dev vs Production
4. **Store securely** - Use environment management tools
5. **Rotate tokens regularly** - Especially API keys
6. **Never share keys** - Keep private!
7. **Use service role key carefully** - Bypasses security

---

## 🔗 Quick Links

- Supabase: https://app.supabase.com
- OpenAI: https://platform.openai.com/api-keys
- Groq: https://console.groq.com/keys
- Google: https://aistudio.google.com/
- Twitter Dev: https://developer.twitter.com/
- Facebook Devs: https://developers.facebook.com/
- Bluesky: https://bsky.app

---

## 📝 Example Complete `.env`

```dotenv
# Core
SESSION_SECRET=my-super-secret-key-change-this-min-32-chars
PORT=4000
NODE_ENV=development

# Database
SUPABASE_URL=https://jeyqjgmypryfspvrfcmm.supabase.co
SUPABASE_ANON_KEY=sb_publishable_AyCxOuxEZZnwwL1Cs5ydbA_aHe-DAkL
SUPABASE_SERVICE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Automation
N8N_WEBHOOK_URL=https://felixfelix.app.n8n.cloud/webhook/89093ed9...

# LLM (Pick one)
OPENAI_API_KEY=sk_live_abc123xyz
OPENAI_MODEL=gpt-4o-mini

# YouTube
YOUTUBE_CLIENT_ID=123456789-abc123def456.apps.googleusercontent.com
YOUTUBE_CLIENT_SECRET=your_client_secret
YOUTUBE_REDIRECT_URI=http://127.0.0.1:4000/auth/youtube/callback

# Instagram
INSTAGRAM_ACCESS_TOKEN=your_token_here
INSTAGRAM_ACCOUNT_ID=17841465212584814
INSTAGRAM_APP_ID=your_app_id
INSTAGRAM_APP_SECRET=your_app_secret

# Threads
THREADS_ACCESS_TOKEN=your_token_here
THREADS_USER_ID=your_user_id
THREADS_USERNAME=your_username

# Twitter
TWITTER_BEARER_TOKEN=your_bearer_token
TWITTER_API_KEY=your_api_key
TWITTER_API_SECRET=your_api_secret
TWITTER_ACCESS_TOKEN=your_access_token
TWITTER_ACCESS_SECRET=your_access_secret
TWITTER_USERNAME=your_twitter_handle

# Bluesky
BLUESKY_HANDLE=your.bsky.social
BLUESKY_APP_PASSWORD=your_app_password
```

---

**Status:** Current environment has Supabase configured. Other APIs pending setup.

