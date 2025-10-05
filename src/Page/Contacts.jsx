import React from 'react';
import { MemberDiv } from './Membership.styled';
import { FaViber } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export const Contacts = () => {
  return (
    <MemberDiv>
      <h2>Наші контакти</h2>
      <ul>
        <li className="contactsItem">
          <a href="viber://chat?number=%2B380932394579">
            <FaViber className="contactIcon" />
            Viber
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://wa.me/380932394579">
            <FaWhatsapp className="contactIcon" />
            Whatsapp
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://t.me/G_f_n_u">
            <FaTelegram className="contactIcon" />
            Telegram
          </a>
        </li>
        <li className="contactsItem">
          <a href="https://www.instagram.com/gfnu_2024?igsh=aDVmdjlndXlhZ2Yy">
            <FaInstagram className="contactIcon" />
            Instagram
          </a>
        </li>
      </ul>
    </MemberDiv>
  );
};
