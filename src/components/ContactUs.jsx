import React from "react";

const ContactUs = ()=>(
  <div>
    <h1>Contact Us</h1>
    <form method="POST" action="">
      <label htmlFor="email">
        Email
      </label>
        <input type="email" name="email" id="email" placeholder="Your email"/>
      <label htmlFor="message">
        Message
      </label>
        <textarea name="message" id="message" placeholder="Your message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
)

export default ContactUs
