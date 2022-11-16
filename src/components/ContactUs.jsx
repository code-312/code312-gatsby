import React from "react";

const ContactUs = ()=>(
  <section>
    <h3>Contact Us</h3>
    <form>
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
  </section>
)

export default ContactUs
