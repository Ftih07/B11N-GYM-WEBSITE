import React from 'react';
import { FaTwitter, FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa'; // Import icon dari react-icons
import { FaThreads } from 'react-icons/fa6';

const ContactSection = () => {
  return (
<section>
  <div className="relative flex justify-center items-center flex-col z-10">
    <div className="relative w-[100%] flex justify-center items-center">
      <div className="w-[320px]">
        <ul>
          <li className="list-none text-[1.4em] border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
            <a
              href="https://www.threads.net/@biin_gym?xmt=AQGzhpv7T3x_g7aqSckXTydy9uaN4rz1h5tDMdUG-G_TV5s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center hover:text-accent transition-all"
            >
              <FaThreads className="mr-2" /> Threads
            </a>
            <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                B11N_GYM
            </p>
          </li>
          <li className="list-none text-[1.4em] border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
            <a
              href="https://www.instagram.com/direct/t/113474576715527/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-accent transition-all"
            >
              <FaInstagram className="mr-2" /> Instagram
            </a>
            <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                BIIN_GYM
            </p>
          </li>
          <li className="list-none text-[1.4em] border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
            <a
              href="tel:+6289653847651"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-accent transition-all"
            >
              <FaWhatsapp className="mr-2" /> Whatsapp
            </a>
            <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                0896-5384-7651
            </p>
          </li>
          <li className="list-none text-[1.4em] border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
            <a
              href="mailto:Sobiin77@gmail.com?subject=Subjek%20Email&body=Tulis%20Pesanmu%20Disini"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-accent transition-all"
            >
              <FaEnvelope className="mr-2" /> Email
            </a>
            <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                Sobiin77@gmail.com
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};

export default ContactSection;
