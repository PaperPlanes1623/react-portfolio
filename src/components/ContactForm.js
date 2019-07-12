import React, { Component } from 'react';

class ContactForm extends Component {
  render () {
    return (
      <>
      <form id="contact-form" action="mailto:dylbronjames@gmail.com" method="post"
      enctype="text/plain">
        <br />
        <input type = "text" name="name" placeholder="Name"/>
        <br /><br />
        <input type = "text" name="email" placeholder="Email"/>
        <br /><br />
        <textarea name="message">Enter Message</textarea>
        <br />
        <input type="submit"/>
      </form>
      <br /><br /><br />
          <footer id="top-link"><a href="#home">back to top</a></footer>
          </>
    )
  }
}

export default ContactForm;