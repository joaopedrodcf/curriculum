import React from 'react';

const ContactMe = () => (
  <main>
    <section className="section-contact-me">
      <form>
        <div>
          <label htmlFor="name">
            Your name:
            <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Your email:
            <input type="email" name="email" />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Your message:
            <textarea name="message" />
          </label>
        </div>
        <button type="button">Send</button>
      </form>
    </section>
  </main>
);

export default ContactMe;
