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
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
            />
            <button type="submit" value="Submit">
              Send
            </button>
          </form>
        </section>
      </main>
    );
  }
}
