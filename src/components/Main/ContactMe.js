import React from 'react';
import axios from 'axios';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };

    this.endpointEmail = '/send-email';
    this.urlContact = process.env.REACT_APP_API_HOST + this.endpointEmail;
    console.log(this.urlContact);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  sendMessage(event) {
    event.preventDefault();

    const { name, email, message } = this.state;
    axios
      .post(this.urlContact, {
        name,
        email,
        message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });

    this.setState({ name: '', email: '', message: '' });
  }

  handleChange(event) {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, message } = this.state;
    return (
      <main>
        <section className="section-contact-me">
          <form onSubmit={this.sendMessage}>
            <div>
              <label htmlFor="name">
                Your name:
                <input type="text" name="name" value={name} onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label htmlFor="email">
                Your email:
                <input type="email" name="email" value={email} onChange={this.handleChange} />
              </label>
            </div>
            <div>
              <label htmlFor="message">
                Your message:
                <textarea name="message" value={message} onChange={this.handleChange} />
              </label>
            </div>
            <button type="submit" value="Submit">
              Send
            </button>
          </form>
        </section>
      </main>
    );
  }
}
