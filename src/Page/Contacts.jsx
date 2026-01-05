import React from 'react';
import { MemberDiv } from './Membership.styled';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import contatsBG from '../img/contatsBg.jpg';

export const Contacts = () => {
  return (
    <MemberDiv>
      <img src={contatsBG} alt="w" />
      <h2>Наші контакти</h2>
      <ul>
        <li className="contactsItem">
          <a href="https://www.google.com/">
            <FaViber className="contactIcon" />
            Viber
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://www.google.com/">
            <FaWhatsapp className="contactIcon" />
            Whatsapp
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://www.google.com/">
            <FaTelegram className="contactIcon" />
            Telegram
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://www.google.com/">
            <FaInstagram className="contactIcon" />
            Instagram
          </a>
        </li>
      </ul>
    </MemberDiv>
  );
};
