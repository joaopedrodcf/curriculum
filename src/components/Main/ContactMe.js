import React from "react";

// https://coolors.co/ffc857-e9724c-c5283d-481d24-255f85
export default class ContactMe extends React.Component {
  render() {
    return (
      <section className="section-contact-me">
        <form>
          <div>
            <label for="name">Your name:</label>
            <input type="text" name="name" />
          </div>
          <div>
            <label for="email">Your email:</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label for="message">Your message:</label>
            <textarea name="message">Put here your message</textarea>
          </div>
          <button type="button">Send</button>
        </form>
      </section>
    );
  }
}
