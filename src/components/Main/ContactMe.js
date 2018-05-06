import React from 'react';
import axios from 'axios';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      errorName: '',
      errorEmail: '',
      errorMessage: '',
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

    this.setState({
      name: '',
      email: '',
      message: '',
      errorName: '',
      errorEmail: '',
      errorMessage: '',
    });
  }

  handleChange(event) {
    const { value, name } = event.target;

    if (name === 'name' && value.length === 0) {
      this.setState({
        errorName: 'invalid',
      });
    } else {
      this.setState({
        errorName: '',
      });
    }

    if (name === 'message' && value.length === 0) {
      this.setState({
        errorMessage: 'invalid',
      });
    } else {
      this.setState({
        errorMessage: '',
      });
    }

    if (name === 'email' && !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)) {
      this.setState({
        errorEmail: 'invalid',
      });
    } else if (name === 'email') {
      this.setState({
        errorEmail: '',
      });
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, email, message, errorName, errorEmail, errorMessage,
    } = this.state;
    return (
      <main>
        <section className="section-contact-me">
          <form noValidate onSubmit={this.sendMessage}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              className={errorName ? 'invalid' : ''}
              onChange={this.handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              className={errorEmail ? 'invalid' : ''}
              onChange={this.handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              className={errorMessage ? 'invalid' : ''}
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
