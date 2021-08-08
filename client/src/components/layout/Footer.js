import React from 'react';

const Footer = () => {
  return (
    <footer className="w-100 p-4">
      <div className="text-center mb-5">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Team Mongoose.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
