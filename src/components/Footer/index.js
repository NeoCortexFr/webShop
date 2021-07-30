import React from 'react';
import './footer.scss';

const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="footer">
      <p className="footer_content">
        Made with love by NeoCortexFr &copy; {year}.
      </p>
    </footer>
  );
};
export default Footer;
