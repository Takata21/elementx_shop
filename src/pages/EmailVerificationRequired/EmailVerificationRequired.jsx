import React from 'react';
import './EmailVerificationRequired.css';
import { TailSpin } from 'react-loader-spinner';
const EmailVerificationRequired = () => {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  function decodeURLComponent(str) {
    return window.atob(str);
  }
  let email = decodeURLComponent(params.user);
  if (!email) {
    return (
      <div className="loader">
        <TailSpin color="#00BFFF" />
      </div>
    );
  }
  return (
    <section className="section">
      <div className="login-container">
        <div className="Email_verification">
          <h1>Email Verification</h1>
        </div>
        <div className="Rectangle">
          <div className="Group-4">
            <img src="/assets/img/message.png" width="100%" />
          </div>
          <div className="Thank-you-for-signin">
            <p>Gracias por registrarte en una cuenta de Elementx</p>
          </div>
          <div className="Please-verify-your-e div">
            <br />
            <p>
              Verifique su dirección de correo electrónico para acceder a su
              cuenta de Elementx.
            </p>
            Enviamos un correo electrónico a
            <span className="current-email">{email}</span>
            <p>
              Para continuar, revise su bandeja de entrada y verifique su
              dirección de correo electrónico.
            </p>
            {/* <div className="resent_email_message">
              <span>Didn’t receive the email?</span>
              <a href="#" className="Resend-email">
                Resend email
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailVerificationRequired;
