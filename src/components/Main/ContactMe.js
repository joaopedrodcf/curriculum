import React from 'react';
import axios from 'axios';

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      touched: {
        email: false,
        password: false,
        message: false,
      },
    };

    this.endpointEmail = '/send-email';
    this.urlContact = process.env.REACT_APP_API_HOST + this.endpointEmail;

    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
      touched: {
        email: false,
        password: false,
        message: false,
      },
    });
  }

  handleChange(event) {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleBlur(event) {
    const { name } = event.target;
    this.setState({
      touched: { ...this.state.touched, [name]: true },
    });
  }

  validate() {
    const { name, email, message } = this.state;

    return {
      name: name.length === 0,
      email: !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email),
      message: message.length === 0,
    };
  }

  // solution for validation https://goshakkk.name/instant-form-fields-validation-react/
  render() {
    const { name, email, message } = this.state;

    const errors = this.validate();
    const hasErrors = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = (field) => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <main>
        <section className="section-contact-me">
          <form noValidate onSubmit={this.sendMessage}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              className={shouldMarkError('name') ? 'invalid' : ''}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              className={shouldMarkError('email') ? 'invalid' : ''}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              className={shouldMarkError('message') ? 'invalid' : ''}
            />
            <button type="submit" value="Submit" disabled={hasErrors}>
              <i className="fas fa-envelope fa-2x" />
            </button>
          </form>
        </section>
      </main>
    );
  }
}
