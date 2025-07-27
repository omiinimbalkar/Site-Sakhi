import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>site-sakhi</h2>
          <p>Empowering women entrepreneurs with beautiful, professional websites. Your trusted digital companion.</p>
          <div className="contact-info">
            <p>hello@site-sakhi.com</p>
            <p>1-800-SAKHI-HELP</p>
            <p>Global + Remote First</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/templates">Templates</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/pricing">Pricing</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/help-center">Help Center</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Support</h3>
            <ul>
              <li><a href="/get-help">Get Help</a></li>
              <li><a href="/live-chat">Live Chat</a></li>
              <li><a href="/video-tutorials">Video Tutorials</a></li>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/community-forum">Community Forum</a></li>
              <li><a href="/contact-support">Contact Support</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/women-entrepreneur-guide">Women Entrepreneur Guide</a></li>
              <li><a href="/digital-marketing-tips">Digital Marketing Tips</a></li>
              <li><a href="/business-templates">Business Templates</a></li>
              <li><a href="/seo-best-practices">SEO Best Practices</a></li>
              <li><a href="/brand-building">Brand Building</a></li>
              <li><a href="/growth-strategies">Growth Strategies</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Legal & Security</h3>
            <ul>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/cookie-policy">Cookie Policy</a></li>
              <li><a href="/gdpr-compliance">GDPR Compliance</a></li>
              <li><a href="/accessibility">Accessibility</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-trust">
          <h3>Trusted & Secure</h3>
          <div className="trust-badges">
            <span>SSL Secured</span>
            <span>GDPR Compliant</span>
            <span>10,000+ Users</span>
            <span>24/7 Support</span>
            <span>★★★★★ 4.9/5</span>
          </div>
          <blockquote className="testimonial">
            "site-sakhi made building my website so easy and stress-free!" - Sarah, Jewelry Designer
          </blockquote>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 site-sakhi. Made with ♥ for women entrepreneurs worldwide.</p>
        <div className="footer-meta">
          <span>Privacy Protected</span>
          <span>Women-Led Team</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;