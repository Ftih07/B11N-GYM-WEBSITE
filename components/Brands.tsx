import React from 'react';

const ContactUs = () => {
  return (
    <section id="contactus">
      <div className="card d-flex flex-dir-row">
        <div className="photo-decor">
          <iframe
            style={{ height: '300px' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4855691732196!2d109.25932187454826!3d-7.411386672987718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f0039f00903%3A0xf9273b4e5db80ee9!2sB11N%20GYM!5e0!3m2!1sid!2sid!4v1727592331025!5m2!1sid!2sid"            width="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;