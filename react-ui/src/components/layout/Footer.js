import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-100 p-4">
      <div className="text-center text-white">
        <h4 className="mb-4 text-yellow-100">
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
          <br/>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center">
          <div className="">
            <iframe
              width="200px"
              height="200px"
              title="map"
              className="inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              style={{ filter: "opacity(0.7)" }}
              src="https://www.google.com/maps/embed/v1/place?q=Cutloose+Houston,+Texas&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">Hours of Operation</h3>
            <br/>
            <h4 className="font-semibold">Tuesday - Thursday:</h4> <p>10:00am - 7:00pm</p>
            <br/>
            <h4 className="font-semibold">Friday & Saturday:</h4> <p>11:00am - 7:00pm</p>
            <br/>
            <h4 className="font-semibold">Closed Sundays</h4>
          </div>
          <div className="space-y-5">
            <h3 className="font-bold text-lg">Contact:</h3>
            <a href="tel:+12813308004">(281) 330-8004</a>
            <br/>
            <div className="space-x-5">
            <a href="http://instagram.com/" aria-label='link to instagram'><FontAwesomeIcon icon={faInstagram} size="lg"/></a>
            <a href="http://facebook.com/" aria-label='link to facebook'><FontAwesomeIcon icon={faFacebookSquare} size="lg"/></a>
            <a href="http://twitter.com/" aria-label='link to twitter'><FontAwesomeIcon icon={faTwitterSquare} size="lg" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
