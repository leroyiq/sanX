import React from 'react';
import { MemberDiv } from './Membership.styled';
import {
  FaInstagram,
  FaTelegram,
  FaViber,
  FaWhatsapp,
  FaCcVisa,
} from 'react-icons/fa';

export const Introduction = () => {
  return (
    <MemberDiv>
      <h3>Набуття членства у ГФНУ.</h3>
      <ol>
        <li>
          Ріелтор подає заяву на вступ до лав ГФНУ, на ім'я голови
          сертифікаційної ради ГФНУ. Форма заяви вільна.
          <br />
          Заява подається на наш: Viber, Whatsapp, Telegram, Instagram.
          Вказується область в якій працює ріелтор. Також вказується як пишеться
          його (її) ім'я та прізвище англійською мовою. <br /> Якщо ріелтор є
          співробітником Агенції Нерухомості вказується назва Агенції
          українською та англійською мовами. <br /> Вказується телефон для
          зв'язку і номер відділення Укрпошти чи Нової Пошти.
        </li>
        <li>
          Здобувач висилає фото першої сторінки свого паспорта чи закордонного
          паспорта.
        </li>
        <li>Своє фото для посвідчення.</li>
        <li>
          Свідоцтво та сертифікат ГФНУ видаються безкоштовно, але треба сплатити
          послуги друкарні по
          <a className='payLink' href="#pay" style={{ display: 'inline' }}>
            &nbsp;реквізитам&nbsp;
          </a>
          вказаним нижче, з вказівкою "друк для ГФНУ".
        </li>
        <li>
          Після перевірки даних ріелтор і виготовлення свідоцтва і посвідчення
          (приблизно тиждень) вони будуть надіслані на відповідне поштове
          відділення.
        </li>
      </ol>
      <span>
        Для отримання свідоцтва Агенції Нерухомості як колективного члена треба,
        щоб в Агенції було не менше двох ріелтор членів ГФНУ. Всі свідоцтва
        видаються терміном на два роки.
      </span>
      <h3>Вступити до ГФНУ</h3>
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
        <li className="contactsItem">
          <FaCcVisa className="contactIcon" />
          <details id="pay">
            <summary>Реквізити для оплати друку</summary>
            <table>
              <tr>
                <td>Отримувач: </td>
                <td className="sp">ФОП Стадник Наталія Олегівна</td>
              </tr>
              <tr>
                <td>IBAN:</td>
                <td className="sp">UA693220010000026003340087150</td>
              </tr>
              <tr>
                <td>ІПН/ЄДРПОУ:</td>
                <td className="sp">2635413681</td>
              </tr>
              <tr>
                <td>Акціонерне товариство</td>
                <td className="sp">УНІВЕРСАЛ БАНК</td>
              </tr>
              <tr>
                <td>МФО: </td>
                <td className="sp">322001</td>
              </tr>
              <tr>
                <td>ЄДРПОУ Банку:</td>
                <td className="sp"> 21133352</td>
              </tr>
              <tr>
                <td>Призначення платежу: </td>
                <td className="sp">друк для ГФНУ</td>
              </tr>
            </table>
          </details>
        </li>
      </ul>
    </MemberDiv>
  );
};
