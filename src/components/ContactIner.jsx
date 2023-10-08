import React from 'react';
import { AiFillMail } from 'react-icons/ai';
import { FaTwitter, FaInstagram, FaGithub, FaLinkedin, FaPhoneAlt, FaMap } from 'react-icons/fa';
import Icon from './Icon';

const ContactItem = ({ contact, email1, email2, icon }) => {
  const iconMap = {
    mail: AiFillMail,
    phone: FaPhoneAlt,
    home: FaMap,
    twitter: FaTwitter,
    instagram: FaInstagram,
    github: FaGithub,
    linkedin: FaLinkedin,
  };

  const IconComponent = iconMap[icon] || AiFillMail;

  const handleClick = () => {
    if (icon === 'mail') {
      // If it's the "Mail Us" item, open the default email client
      window.location.href = `mailto:${email1}`;
    } else if (icon === 'phone') {
      // If it's the "Contact Us" item, copy the phone number to the clipboard
      const textArea = document.createElement('textarea');
      textArea.value = email1;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      alert('Phone number copied to clipboard');
    }
  };

  return (
    <div
      className="my-5 w-[90%] md:w-full mx-auto flex items-center gap-5 px-5 py-4 cursor-pointer"
      style={{
        boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
      }}
      onClick={handleClick}
    >
      <div
        className="p-3 rounded-md"
        style={{
          boxShadow: 'rgba(17, 17, 26, 0.05)  0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px',
        }}
      >
        <IconComponent size={25} />
      </div>
      <div className="">
        <h2 className='font-bold'>{contact}</h2>
        <h4 className='text-sm'>{email1}</h4>
        <h2 className='text-sm'>{email2}</h2>
      </div>
    </div>
  );
};

const ContactInner = () => {
  return (
    <div>
      <h2 className='uppercase font-bold my-2 px-3 text-xl w-[90%] md:w-full mx-auto'>Contact Info</h2>
      <ContactItem contact="Mail Us" email1="addypearl09@gmail.com" email2="deifesyntax@gmail.com" icon="mail" />
      <ContactItem contact="Contact Us" email1="09038257434" email2="09024386013" icon="phone" />
      <ContactItem contact="Location" email1="04 Bode Edun" email2="Lagos Nigeria" icon="home" />
      <div className="mt-[40px]">
        <h3 className='uppercase font-bold my-2 px-3 text-xl w-[90%] md:w-full mx-auto'>Social Links</h3>
        <div className="mb-5 md:mb-1">
          <Icon />
        </div>
      </div>
    </div>
  );
};

export default ContactInner;
