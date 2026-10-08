require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Parse JSON bodies
app.use(express.json());

// CORS middleware for Safari compatibility
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || 'http://127.0.0.1:4000');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Serve static files from the project root
app.use(express.static(path.join(__dirname, '..')));

// Redirect rules for proper navigation
app.get('/login', (req, res) => {
  res.redirect('/login/');
});

app.get('/dashboard', (req, res) => {
  res.redirect('/dashboard/');
});

app.get('/contact', (req, res) => {
  res.redirect('/contact/');
});

// Block access to removed navigation pages - redirect back to home
app.get('/team', (req, res) => {
  res.redirect('/');
});

app.get('/team/', (req, res) => {
  res.redirect('/');
});

app.get('/workflow', (req, res) => {
  res.redirect('/');
});

app.get('/workflow/', (req, res) => {
  res.redirect('/');
});

app.get('/venue', (req, res) => {
  res.redirect('/venue/');
});

app.get('/terms', (req, res) => {
  res.redirect('/terms-and-conditions/');
});

// Session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // set true in production with HTTPS
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// Demo users database (in real app, use proper database with hashed passwords)
const users = [
  { email: 'demo@cashora.tech', password: 'demo123', name: 'Demo User' },
  { email: 'admin@cashora.tech', password: 'admin123', name: 'Admin User' },
  { email: 'test@example.com', password: 'test123', name: 'Test User' }
];

// ─── Routes ───────────────────────────────────────────────

// Email/Password Login
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Find user
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    // Store user in session
    req.session.user = {
      email: user.email,
      name: user.name
    };
    
    res.json({
      success: true,
      user: {
        email: user.email,
        name: user.name
      }
    });
  } else {
    res.json({
      success: false,
      message: 'Invalid email or password'
    });
  }
});

// Get current logged-in user (called by frontend)
app.get('/auth/user', (req, res) => {
  if (req.session && req.session.user) {
    res.json({
      loggedIn: true,
      name: req.session.user.name,
      email: req.session.user.email
    });
  } else {
    res.json({ loggedIn: false });
  }
});

// Logout
app.get('/auth/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect(`http://127.0.0.1:${PORT}/login/`);
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://127.0.0.1:${PORT}`);
  console.log(`🔑 Login Page: http://127.0.0.1:${PORT}/login/`);
  console.log('');
  console.log('📧 Demo Accounts:');
  console.log('   Email: demo@cashora.tech | Password: demo123');
  console.log('   Email: admin@cashora.tech | Password: admin123');
  console.log('   Email: test@example.com | Password: test123');
});
