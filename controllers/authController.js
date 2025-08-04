// controllers/authController.js
const admin = require('../firebase'); // firebase-admin instance
const authService = require('../services/authService');

async function verifyOtp(req, res) {
  const { idToken } = req.body; // Firebase ID token from client

  if (!idToken) {
    return res.status(400).json({ error: 'ID token is required' });
  }

  try {
    // Verify ID token with Firebase Admin
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const phone = decodedToken.phone_number;

    if (!phone) {
      return res.status(400).json({ error: 'Invalid Firebase token: phone number missing' });
    }

    // Find or create user in DB
    let user = await authService.findOrCreateUser(phone);

    // Determine admin role by checking in DB (if user is admin in DB, role remains admin)
    // No static array; role is stored in DB

    // Issue JWT token with user info and role
    const token = authService.signToken(user);

    res.json({
      token,
      user: {
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ error: 'Invalid or expired ID token' });
  }
}

module.exports = {
  verifyOtp,
};
