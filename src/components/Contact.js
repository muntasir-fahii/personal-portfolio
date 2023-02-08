import SectionTitles from "./SectionTitles";

const Contact = () => {
  return (
    <div className="contact container mx-auto mt-40">
      <SectionTitles title={"Contact"} />

      <form className="mt-40 grid grid-cols-2 gap-20">
        <div className="form-control overflow-hidden">
          <input
            type="text"
            placeholder="Write Your name"
            name="fullname"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full "
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="email"
            placeholder="Write Your email"
            name="email"
            required
            className="bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-rose-900 duration-500 w-full "
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
          />
        </div>
        <div className="form-control overflow-hidden">
          <input
            type="submit"
            value="Send messege"
            className="uppercase bg-transparent border py-16 px-28 rounded-full border-white/20  hover:bg-rose-400/20 hover:border-rose-400/20 duration-500 w-full "
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
