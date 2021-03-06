import React from 'react';
import axios from 'axios';

// Reset state https://stackoverflow.com/questions/34845650/clearing-state-es6-react
const initialState = {
  name: '',
  email: '',
  message: '',
  touched: {
    email: false,
    name: false,
    message: false,
  },
};

export default class ContactMe extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

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
    axios.post(this.urlContact, {
      name,
      email,
      message,
    });

    this.setState(initialState);
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
      touched: {
        ...this.state.touched,
        [name]: true,
      },
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
            <p className={shouldMarkError('name') ? 'tip tip-invalid' : 'tip hidden'}>
              Your name can&apos;t be empty
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              className={shouldMarkError('email') ? 'invalid' : ''}
            />
            <p className={shouldMarkError('email') ? 'tip tip-invalid' : 'tip hidden'}>
              You must use a valid email
            </p>
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              className={shouldMarkError('message') ? 'invalid' : ''}
            />
            <p className={shouldMarkError('message') ? 'tip tip-invalid' : 'tip hidden'}>
              Your message can&apos;t be empty
            </p>
            <button type="submit" value="Submit" disabled={hasErrors}>
              <i className="fas fa-envelope-open fa-2x" />
            </button>
          </form>
        </section>
      </main>
    );
  }
}
