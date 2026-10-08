# CASHORA.TECH - Complete Endpoint Reference

## 🔧 All Fixed Endpoints

### Public Pages (No Authentication Required)

| Endpoint | File | Description |
|----------|------|-------------|
| `GET /` | `index.html` | Homepage/Landing page |
| `GET /index.html` | `index.html` | Homepage alternative |
| `GET /login` | Auto-redirects | Redirects to `/login/` |
| `GET /login/` | `login/index.html` | User login page |
| `GET /contact` | Auto-redirects | Redirects to `/contact/` |
| `GET /contact/` | `contact/index.html` | Contact page |
| `GET /team` | Auto-redirects | Redirects to `/team/` |
| `GET /team/` | `team/index.html` | Team page |
| `GET /venue` | Auto-redirects | Redirects to `/venue/` |
| `GET /venue/` | `venue/index.html` | Venue page |
| `GET /workflow` | Auto-redirects | Redirects to `/workflow/` |
| `GET /workflow/` | `workflow/index.html` | Workflow page |
| `GET /terms` | Auto-redirects | Redirects to `/terms-and-conditions/` |
| `GET /terms-and-conditions/` | `terms-and-conditions/index.html` | Legal terms |
| `GET /404/` | `404/index.html` | Error page |

### Protected Pages (Login Required)

| Endpoint | File | Description |
|----------|------|-------------|
| `GET /dashboard` | Auto-redirects | Redirects to `/dashboard/` |
| `GET /dashboard/` | `dashboard/index.html` | Main user dashboard (auth required) |

### Authentication API Endpoints

| Method | Endpoint | Body | Response |
|--------|----------|------|----------|
| `POST` | `/auth/login` | `{"email": "...", "password": "..."}` | `{"success": true/false, "user": {...}}` |
| `GET` | `/auth/user` | None | `{"loggedIn": true/false, "name": "...", "email": "..."}` |
| `GET` | `/auth/logout` | None | Redirects to `/login/` |

---

## 🎯 Navigation Flow (Fixed)

### Complete User Journey:

```
1. User lands on → http://127.0.0.1:4000/
   ↓
2. Clicks "Sign In" button → Redirects to /login/
   ↓
3. Enters credentials (demo@cashora.tech / demo123)
   ↓
4. Submits login form
   ├─ Backend validates credentials
   ├─ Creates session
   └─ Returns success response
   ↓
5. Frontend redirects to → /dashboard/
   ↓
6. Dashboard loads and displays user info
   ├─ Sidebar with navigation
   ├─ User profile
   └─ Multiple tabs (Dashboard, Create, Library, Analytics, Distribution, Settings)
   ↓
7. User can:
   ├─ Navigate pages using sidebar
   ├─ Access each feature
   └─ Click "Sign out" in bottom sidebar
   ↓
8. Clicks sign out → POST to /auth/logout
   ├─ Session destroyed
   └─ Redirects to /login/
```

---

## 🧪 API Testing

### Test Login Endpoint
```bash
curl -X POST http://127.0.0.1:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@cashora.tech","password":"demo123"}'

# Response:
# {"success":true,"user":{"email":"demo@cashora.tech","name":"Demo User"}}
```

### Test User Info Endpoint
```bash
curl http://127.0.0.1:4000/auth/user

# Response:
# {"loggedIn":false}
# OR if logged in:
# {"loggedIn":true,"name":"Demo User","email":"demo@cashora.tech"}
```

### Test Logout Endpoint
```bash
curl http://127.0.0.1:4000/auth/logout

# Response: Redirects to /login/
```

### Test Page Redirects
```bash
# These auto-redirect to trailing slash versions
curl http://127.0.0.1:4000/login          # → /login/
curl http://127.0.0.1:4000/contact        # → /contact/
curl http://127.0.0.1:4000/team           # → /team/
curl http://127.0.0.1:4000/venue          # → /venue/
curl http://127.0.0.1:4000/workflow       # → /workflow/
curl http://127.0.0.1:4000/terms          # → /terms-and-conditions/
curl http://127.0.0.1:4000/dashboard      # → /dashboard/
```

---

## 📍 Endpoint Details

### Authentication Endpoints

#### `POST /auth/login`
Authenticates user with email and password.

**Request:**
```json
{
  "email": "demo@cashora.tech",
  "password": "demo123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "email": "demo@cashora.tech",
    "name": "Demo User"
  }
}
```

**Failure Response (200):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

#### `GET /auth/user`
Retrieves current logged-in user info from session.

**Success Response (logged in):**
```json
{
  "loggedIn": true,
  "name": "Demo User",
  "email": "demo@cashora.tech"
}
```

**Response (not logged in):**
```json
{
  "loggedIn": false
}
```

---

#### `GET /auth/logout`
Destroys session and logs out user.

**Response:**
- HTTP 302 Redirect to `/login/`
- Clears session cookie
- Session destroyed on server

---

## 🔗 Redirect Endpoints (Smart Routing)

These endpoints automatically handle both with and without trailing slash:

```
/login        → /login/
/contact      → /contact/
/team         → /team/
/venue        → /venue/
/workflow     → /workflow/
/terms        → /terms-and-conditions/
/dashboard    → /dashboard/
```

---

## 🛡️ Session Management

- **Session Storage:** In-memory (development) - use Redis/DB for production
- **Session Duration:** 24 hours (configurable in .env)
- **Cookie Security:** HttpOnly (prevents JavaScript access)
- **CORS:** Enabled for localhost testing

---

## ✅ All Issues Fixed

| Issue | Solution |
|-------|----------|
| ❌ Login redirecting to `/contact` | ✅ Fixed login redirect to `/dashboard` |
| ❌ Missing .env file | ✅ Created with SESSION_SECRET |
| ❌ CORS blocking requests | ✅ Updated CORS middleware |
| ❌ Session not working | ✅ Added SESSION_SECRET configuration |
| ❌ Missing endpoint redirects | ✅ Added smart redirect routes |
| ❌ Broken navigation links | ✅ Updated all href attributes to use absolute URLs |
| ❌ Logout not working properly | ✅ Fixed logout redirect endpoint |

---

## 🧭 Current URL Structure

```
http://127.0.0.1:4000/
├── / (homepage)
├── /login/ (login page)
├── /dashboard/ (user dashboard - protected)
├── /contact/ (contact page)
├── /team/ (team page)
├── /venue/ (venue page)
├── /workflow/ (workflow page)
├── /terms-and-conditions/ (terms page)
├── /404/ (error page)
├── /assets/js/* (JavaScript bundles)
├── /auth/login (POST - API endpoint)
├── /auth/user (GET - API endpoint)
└── /auth/logout (GET - API endpoint)
```

---

## 🚀 Quick Test

1. **Start Server:**
   ```bash
   cd server
   npm start
   ```

2. **Open Browser:**
   - Homepage: http://127.0.0.1:4000
   - Login: http://127.0.0.1:4000/login/

3. **Test Login:**
   - Email: `demo@cashora.tech`
   - Password: `demo123`
   - Should redirect to dashboard

4. **Test Sign Out:**
   - Click "Sign out" button in sidebar
   - Should redirect to login page

---

## 📝 Demo Users

| Email | Password | Status |
|-------|----------|--------|
| `demo@cashora.tech` | `demo123` | ✅ Active |
| `admin@cashora.tech` | `admin123` | ✅ Active |
| `test@example.com` | `test123` | ✅ Active |

---

**All endpoints are now fully functional and tested!** 🎉
