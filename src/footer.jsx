function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer-logo">Cars25</h2>
      <p className="footer-text">
        Drive your dream. Discover your next car with Cars25.
      </p>

      <div className="footer-contact">
        <p>📧 support@cars25.in</p>
        <p>📞 +91 98765 43210</p>
        <p>📍 Chennai, India</p>
      </div>

      <div className="footer-socials">
        <a href="#" aria-label="Instagram">📸 Instagram</a>
        <a href="#" aria-label="Facebook">🌐 Facebook</a>
        <a href="#" aria-label="Twitter">🐦 Twitter</a>
        <a href="#" aria-label="LinkedIn">💼 LinkedIn</a>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Cars25. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
