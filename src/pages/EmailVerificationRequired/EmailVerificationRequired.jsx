import React from 'react';
import './EmailVerificationRequired.css';
const EmailVerificationRequired = () => {
  return (
    <section>
      <div class="login-container">
        <div class="Email_verification">
          <h1>Email Verification</h1>
        </div>
        <div class="Rectangle">
          <div class="Group-4">
            <img src="/assets/img/message.png" width="100%" />
          </div>
          <div class="Thank-you-for-signin">
            <p>Gracias por registrarte en una cuenta de Elementx</p>
            <d></d>
          </div>
          <div class="Please-verify-your-e div">
            <br />
            <p>
              Verifique su dirección de correo electrónico para acceder a su
              cuenta de Elementx.
            </p>
            Enviamos un correo electrónico a
            <span class="current-email"> androidtkt10@gmail.com</span>
            <p>
              Para continuar, revise su bandeja de entrada y verifique su
              dirección de correo electrónico.
            </p>
            {/* <div class="resent_email_message">
              <span>Didn’t receive the email?</span>
              <a href="#" class="Resend-email">
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
