import React from 'react';
import './EmailVerificationRequired.css';
const EmailVerificationRequired = () => {
  return (
    <section className="section">
      <div ClassName="login-container">
        <div ClassName="Email_verification">
          <h1>Email Verification</h1>
        </div>
        <div ClassName="Rectangle">
          <div ClassName="Group-4">
            <img src="/assets/img/message.png" width="100%" />
          </div>
          <div ClassName="Thank-you-for-signin">
            <p>Gracias por registrarte en una cuenta de Elementx</p>
            <d></d>
          </div>
          <div ClassName="Please-verify-your-e div">
            <br />
            <p>
              Verifique su dirección de correo electrónico para acceder a su
              cuenta de Elementx.
            </p>
            Enviamos un correo electrónico a
            <span ClassName="current-email"> androidtkt10@gmail.com</span>
            <p>
              Para continuar, revise su bandeja de entrada y verifique su
              dirección de correo electrónico.
            </p>
            {/* <div ClassName="resent_email_message">
              <span>Didn’t receive the email?</span>
              <a href="#" ClassName="Resend-email">
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
