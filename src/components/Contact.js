import { useRef } from "react";
import SectionTitles from "./SectionTitles";
import { useFormReveal } from "../hooks/gsap";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs integrations

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("Messege sent");
        },
        () => {
          console.log("Messege Not Sent");
        }
      );
  };

  const formRef1 = useRef(null);
  const formRef2 = useRef(null);
  const formRef3 = useRef(null);
  const formRef4 = useRef(null);

  const formRefs = [formRef1, formRef2, formRef3, formRef4];

  useFormReveal(formRefs);

  return (
    <div className="contact container mx-auto mt-40 ">
      <SectionTitles title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-1 lg:grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write Your name"
            name="fullname"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full "
            ref={formRef1}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="Write Your email"
            name="email"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full "
            ref={formRef2}
          />
        </div>
        <div className="form-control overflow-hidden">
          <textarea
            placeholder="Write Your messege"
            name="messege"
            required
            rows="1"
            cols="30"
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full  resize-none"
            ref={formRef3}
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send messege"
            className="uppercase bg-transparent border py-16 px-28 rounded-full border-white/20  hover:bg-rose-400/20 hover:border-rose-400/20 duration-500 w-full "
            ref={formRef4}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
