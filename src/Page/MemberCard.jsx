import React from 'react';
import { baseMembership } from 'baseMembership';
import { MemberDiv } from './Membership.styled';
import { MemberForm } from './MemberCard.styled';
import { useParams } from 'react-router-dom';
import { NotFound } from 'Page';

export const MemberCard = () => {
  const { memberCard } = useParams();

  const visibleCard = baseMembership.find(card => card.id === memberCard);
  if (visibleCard) {
    const { fotoId, name, surname, certNumber, expiredDate } = visibleCard;
    return (
      <MemberDiv>
        <MemberForm>
          <h2>Дійсний член ГФНУ</h2>
          <img src={fotoId} alt={name} />
          <h3>
            {name} {surname}
          </h3>
          <label>
            Номер свідотства:
            <input type="text" disabled value={certNumber} />
          </label>
          <label>
            Дійсно до:
            <input
              type="text"
              disabled
              value={expiredDate}
              className="active"
            />
          </label>
        </MemberForm>
      </MemberDiv>
    );
  } else {
    return <NotFound />;
  }
};
