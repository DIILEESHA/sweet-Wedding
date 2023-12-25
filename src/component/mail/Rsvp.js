import React, { useState } from "react";
import "./rsvp.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Rsvp = () => {
  const formref = useRef();
  const [done, setdone] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hep8qci",
        "template_gwoiqjb",
        formref.current,
        "dj-H46qZFVK4_tKG0"
      )
      .then(
        (result) => {
          console.log("ok");
          setdone(true);
          toast.success("Message Send Successfully!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("🦄Try Again!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="rsvp">
      <div className="form_container">
        <form
          id="rsvp"
          ref={formref}
          onSubmit={handlesubmit}
          action="
        "
          className="rsvp_form"
        >
          <h2 className="couple_story">Will You Attend!</h2>

          <img
            src="https://i.imgur.com/OA7vHkn.png"
            alt=""
            className="flower"
          />

          <div className="form_grid">
            <div className="form_sub_grid">
              <input
                type="text"
                placeholder="first name"
                className="form_input"
                data-error="valid"
                name="firstName"
                required
              />
            </div>
            <div className="form_sub_grid">
              <input
                type="text"
                placeholder="Last name"
                className="form_input"
                data-error="valid"
                name="lastName"
                required
              />
            </div>
            <div className="form_sub_grid">
              <input
                type="text"
                placeholder="Email Address"
                className="form_input"
                name="email"
                required
                data-error="valid"
              />
            </div>
            <div className="form_sub_grid">
              <select id="guests" name="guests" className="form_input select">
                <option
                  style={{ background: "#ddd" }}
                  value=""
                  className="opt"
                  disabled
                  selected
                >
                  Number Of Guests
                </option>
                <option className="opt" value="only me">
                  1 guest
                </option>
                <option className="opt" value=" 2 guests">
                  2 guests
                </option>
                <option className="opt" value="     3 guests">
                  3 guests
                </option>
                <option className="opt" value=" 4 guests">
                  4 guests
                </option>
                <option className="opt" value="  5 guests">
                  5 guests
                </option>
              </select>
            </div>
            <div className="form_sub_grid">
              <select id="guests" name="response" className="form_input select">
                <option
                  style={{ background: "#ddd" }}
                  value=""
                  className="opt"
                  disabled
                  selected
                >
                  Will you attend the wedding?
                </option>
                <option className="opt" value="   Yes, I'll be there">
                  Yes, I'll be there
                </option>

                <option className="opt" value="  Can't come">
                  Can't come
                </option>
              </select>
            </div>
            <div className="form_sub_grid">
              <textarea
                name="message"
                className="form_input2"
                id=""
                cols="30"
                placeholder="Message goes here..."
                rows="10"
              ></textarea>
            </div>
          </div>

          <button className="submit">submit now</button>

          <div className="event_bottom  xy">
            <img src="https://i.imgur.com/2fGT61B.png" alt="" />
          </div>
        </form>
      </div>
      <p className="copyright">&copy; 2023. All Rights Reserved.</p>
    </div>
  );
};

export default Rsvp;
