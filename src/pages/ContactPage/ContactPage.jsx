import React from 'react';
import { API_URL_ONLINE } from '../../config';
import './ContactPage.css';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaRegPaperPlane,
  FaGlobeAmericas,
  FaWhatsapp,
} from 'react-icons/fa';
import { useState } from 'react';
const ContactPage = () => {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleChange(e) {
    setMessage({ ...message, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`${API_URL_ONLINE}/contact/create-ticket`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <section className="contact">
      <h2>Contáctenos</h2>
      <div className="contact-container">
        <div className="contact-info">
          <article>
            <div className="icon-container">
              <FaMapMarkerAlt />
            </div>
            <div className="contact-desc">
              <a
                className="fs-7 text-decoration-none bi bi-dot ho-secondary"
                href="https://g.page/elementxgamezone?share"
                target="_blank"
                title="Ubicación en Google Maps"
              >
                <span>Direción:</span>
                Calle Sexta, La Pintada, La Pintada, Coclé, Panamá.
              </a>
            </div>
          </article>
          <article>
            <div className="icon-container">
              <FaPhone />
            </div>
            <div className="contact-desc">
              <span>Teléfono:</span>
              <a href="tel://69845064">+507 6984-5064</a>
            </div>
          </article>
          <article>
            <div className="icon-container">
              <FaWhatsapp />
            </div>
            <div className="contact-desc">
              <span>Chat:</span>
              <a href="https://wa.me/ 6984-5064">WhatsApp</a>
            </div>
          </article>
          <article>
            <div className="icon-container">
              <FaRegPaperPlane />
            </div>
            <div className="contact-desc">
              <span>Email:</span>
              <a href="mailto:contacto@elementx.online">
                contacto@elementx.online
              </a>
            </div>
          </article>
        </div>
        <div className="contact-form-container">
          <div>
            <img
              src="/assets/img/LogoElementx.svg"
              alt="elementx logo"
              width="60px"
            />
            <img
              src="/assets/img/LettersElementxBlack.svg"
              alt="elementx logo"
              width="150px"
            />
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                type="text"
                name="message"
                id="message"
                required
                onChange={handleChange}
              />
            </div>
            <button className="contact-btn" type="submit">
              enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
