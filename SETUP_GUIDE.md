# CASHORA.TECH - Setup & Usage Guide

## ✅ System Status
Your CASHORA.TECH application is now fully configured and running!

## 🚀 Quick Start

### 1. **Start the Server**
```bash
cd server
npm install  # (run only once)
npm start
```

The server will start on: **http://127.0.0.1:4000**

### 2. **Access the Application**
- **Homepage:** http://127.0.0.1:4000
- **Login Page:** http://127.0.0.1:4000/login/
- **Dashboard:** http://127.0.0.1:4000/dashboard/ (after login)

---

## 🔐 Demo Accounts

Use any of these to test the application:

| Email | Password | Role |
|-------|----------|------|
| `demo@cashora.tech` | `demo123` | Demo User |
| `admin@cashora.tech` | `admin123` | Admin User |
| `test@example.com` | `test123` | Test User |

---

## 📋 Application Pages

### Public Pages (No Login Required)
- **Homepage** (`/`) - Landing page with company information
- **Login** (`/login/`) - User authentication
- **Contact** (`/contact/`) - Contact information
- **Team** (`/team/`) - Team members
- **Venue** (`/venue/`) - Venue/location details
- **Workflow** (`/workflow/`) - Workflow demonstration
- **Terms & Conditions** (`/terms-and-conditions/`) - Legal terms
- **404** (`/404/`) - Error page

### Protected Pages (Login Required)
- **Dashboard** (`/dashboard/`) - Main user interface with multiple sections:
  - **Dashboard** - Overview and statistics
  - **Create** - Content creation tools
  - **Library** - View created content
  - **Analytics** - Performance metrics and charts
  - **Distribution** - Social media management
  - **Settings** - User preferences

---

## 🔧 Backend Endpoints

### Authentication Endpoints

#### `POST /auth/login`
Login with email and password.

**Request:**
```json
{
  "email": "demo@cashora.tech",
  "password": "demo123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "user": {
    "email": "demo@cashora.tech",
    "name": "Demo User"
  }
}
```

#### `GET /auth/user`
Get current logged-in user (requires session).

**Response (Logged In):**
```json
{
  "loggedIn": true,
  "name": "Demo User",
  "email": "demo@cashora.tech"
}
```

**Response (Not Logged In):**
```json
{
  "loggedIn": false
}
```

#### `GET /auth/logout`
Logout and clear session. Redirects to `/login/`.

---

## 🔄 Login Flow

1. User visits `http://127.0.0.1:4000/login/`
2. Frontend checks if user is already logged in via `/auth/user`
3. If logged in, redirects to dashboard
4. If not, displays login form
5. User enters credentials and clicks "Sign In"
6. Frontend sends POST request to `/auth/login`
7. Backend validates credentials and creates session
8. **Frontend automatically redirects to `/dashboard/` (2-second delay)**
9. Dashboard loads and displays user information

---

## 🛠 Fixed Issues

### Issue 1: Missing .env File
**Problem:** Server crashed with "Error: secret option required for sessions"
**Solution:** Created `.env` file with `SESSION_SECRET` configuration

### Issue 2: Login Not Redirecting to Dashboard
**Problem:** After successful login, user saw confirmation message but page didn't redirect
**Solution:** Updated login script to automatically redirect to `/dashboard/` after successful login with 500ms delay

### Issue 3: CORS Configuration
**Problem:** Browser was blocking API requests due to CORS headers
**Solution:** Updated CORS middleware to accept dynamic origins while maintaining security

### Issue 4: Session Secret Missing
**Problem:** Express-session middleware required a secret for security
**Solution:** Added `SESSION_SECRET` to `.env` file (already configured)

---

## 📁 Project Structure

```
cashora_project/
├── index.html                    # Homepage
├── login/
│   └── index.html               # Login page with auth form
├── dashboard/
│   ├── index.html               # Main dashboard (multi-tab interface)
│   └── charts.js                # Chart configurations
├── contact/
│   └── index.html               # Contact page
├── team/
│   └── index.html               # Team page
├── venue/
│   └── index.html               # Venue page
├── workflow/
│   └── index.html               # Workflow page
├── terms-and-conditions/
│   └── index.html               # Legal terms
├── 404/
│   └── index.html               # Error page
├── assets/
│   └── js/                      # JavaScript bundles (Framer exports)
├── server/
│   ├── index.js                 # Express server with auth routes
│   ├── package.json             # Server dependencies
│   ├── package-lock.json
│   └── .env                     # Environment configuration (SESSION_SECRET, PORT)
├── .gitignore
├── README.md
└── SETUP_GUIDE.md               # This file
```

---

## 🎨 Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (Framer exports)
- **Backend:** Node.js with Express.js
- **Authentication:** Express-session with demo users
- **Charts:** ApexCharts (React components)
- **Icons/Avatars:** External CDN (ui-avatars.com)
- **Styling:** Custom CSS with dark theme (modern design)

---

## 🔒 Security Notes

⚠️ **Important for Production:**
1. Replace demo users with proper database (PostgreSQL, MongoDB, etc.)
2. Implement password hashing (bcrypt)
3. Use secure SESSION_SECRET (min 32 characters)
4. Enable HTTPS (set `cookie.secure: true`)
5. Implement proper CORS for specific domains
6. Add rate limiting for login attempts
7. Use JWT or OAuth2 for stateless auth

---

## 🧪 Testing the Application

### Test Login
```bash
curl -X POST http://127.0.0.1:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"demo@cashora.tech","password":"demo123"}'
```

### Test User Info
```bash
curl http://127.0.0.1:4000/auth/user
```

### Manual Testing
1. Open http://127.0.0.1:4000/login/
2. Enter email: `demo@cashora.tech`
3. Enter password: `demo123`
4. Click "Sign In"
5. ✅ Should redirect to dashboard automatically

---

## 📞 Support

For issues or questions:
1. Check browser console for errors (F12 → Console)
2. Check server logs (terminal window running npm start)
3. Ensure all dependencies are installed (`npm install`)
4. Verify .env file has SESSION_SECRET set
5. Make sure server is running on port 4000

---

## ✨ What's Next?

### Recommended Enhancements
1. Add real database for user storage
2. Implement password reset functionality
3. Add Google OAuth2 authentication (code structure ready)
4. Add email verification
5. Create admin panel
6. Add user profile editing
7. Implement content creation backend
8. Add video processing pipeline
9. Set up analytics collection
10. Create payment/subscription system

---

**Last Updated:** October 2026
**Status:** ✅ Fully Functional
