import React from "react";
import "./contact.css";
import phone from "../../img/phone.png";
import mail from "../../img/mail.png";
import address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const formref = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3mtnuqq",
        "template_ckof2cn",
        formref.current,
        "7R5bXhmEFOgZhTL20"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Details has been submitted.");
  };

  const changeClass = () => {};

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">My Contact details.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={phone} alt="phone-icon" className="c-icon" />
              +917087155576
            </div>
            <div className="c-info-item">
              <img src={mail} alt="mail-icon" className="c-icon" />
              sunilnegi217@gmail.com
            </div>
            <div className="c-info-item">
              <img src={address} alt="address-icon" className="c-icon" />
              Panchkula, Haryana, India.
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            {/* {" "} */}
            Get in touch with me. I would be more than happy to hear from you!!
          </p>
          <form ref={formref} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="email" placeholder="E_mail" name="user_mail" />
            <input type="text" placeholder="Contact_no" name="user_number" />
            <textarea
              cols="30"
              rows="5"
              placeholder="Your message"
              name="message"
            ></textarea>
            <button onClick={changeClass}>Submit</button>
            <div className="post-message">
              {done && (
                <p className="form-result">
                  thanks Your detail has been submitted
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
