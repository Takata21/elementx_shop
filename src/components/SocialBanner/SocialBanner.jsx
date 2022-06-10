import React from 'react';
import './SocialBanner.css';
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';
const SocialBanner = () => {
  return (
    <div className="bg-success d-flex position-absolute top-0 start-50 translate-middle justify-content-center px-4 py-3 shadow-lg rounded-pill social-banner-container">
      <div className="wrapper">
        <a
          className="icon facebook"
          href="https://www.facebook.com/ElementxGameZone"
        >
          <span className="tooltip">Facebook</span>
          <span>
            <FaFacebook />
          </span>
        </a>
        <a className="icon twitter">
          <span className="tooltip">Twitter</span>
          <span>
            <FaTwitter />
          </span>
        </a>
        <a
          className="icon instagram"
          href="https://www.instagram.com/elementxgamezone"
        >
          <span className="tooltip">Instagram</span>
          <span>
            <FaInstagram />
          </span>
        </a>
        <a className="icon twitch" href="">
          <span className="tooltip">Twitch</span>
          <span>
            <FaTwitch />
          </span>
        </a>
        <a className="icon youtube" href="">
          <span className="tooltip">Youtube</span>
          <span>
            <FaYoutube />
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialBanner;
