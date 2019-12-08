import React, { Component } from 'react';
import Flexbox from 'flexbox-react';

import './contactForm.css';

class ContactForm extends Component {
  render() {
    const { styles } = this.props;

    return (
      <Flexbox
        alignItems="center"
        flexDirection="column"
        style={styles.formContainer}
      >
        <Flexbox flexDirection="column" style={styles.form}>
          <input
            type="text"
            placeholder="YOUR NAME"
            style={styles.input}
          />
          <input
            type="email"
            placeholder="YOUR EMAIL"
            style={styles.input}
          />
          <input
            type="text"
            placeholder="YOUR MESSAGE"
            style={styles.input}
          />
        </Flexbox>
        <button style={styles.button}>
          Send
        </button>
      </Flexbox>
    );
  }
}

ContactForm.defaultProps = {
  styles: {
    button: {
      backgroundColor: '#FFF',
      border: '1px solid black',
      borderRadius: '50%',
      cursor: 'pointer',
      width: '40px',
      height: '40px'
    },
    form: {
      border: '1px solid black',
      borderBottom: 'none',      
      borderRadius: '3px',
    },
    formContainer: {
      width: '100vw',
    },
    input: {
      border: 'none',
      borderBottom: '1px solid black',
    }
  },
}

export default ContactForm;
