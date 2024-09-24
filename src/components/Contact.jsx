import { CONTACT } from "../constants";

import { TbMailFilled, TbPhoneFilled  } from "react-icons/tb";
import { FaPhone, FaLocationDot  } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-10 text-center text-4xl">Contact Me</h1>
      <div className="text-center tracking-tighter">
        <p className="my-4 justify-center">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex flex-row justify-center gap-4 text-lg text-purple-100 hover:text-purple-500 hover:underline"
          >
            <TbMailFilled className="self-center"/>
            {CONTACT.email}
          </a>
        </p>
        <p className="my-4">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="flex flex-row justify-center gap-4 text-lg text-purple-100 hover:text-purple-500 hover:underline"
          >
            <FaPhone className="self-center"/>
            {CONTACT.phoneNo}
          </a>
        </p>
        <p className="my-4">
          <a
            href={CONTACT.locationUrl}
            target="_blank"
            rel="noreferrer"
            className="flex flex-row justify-center gap-4 text-lg text-purple-100 hover:text-purple-500 hover:underline"
          >
            <FaLocationDot className="self-center"/>
            {CONTACT.location}
          </a>
        </p>
        {/* <br />
        <p className="my-4">
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-purple-100 hover:underline"
          >
            LinkedIn
          </a>
        </p>
        <p className="my-4">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="text-lg text-purple-100 hover:underline"
          >
            GitHub
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Contact;
