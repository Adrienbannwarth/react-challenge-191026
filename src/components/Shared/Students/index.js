import React, { useEffect, useState } from 'react';

import { Container, TextContainer, TextLight, StyledJob } from './StyledStudent'


// FAKE DATA
// const students = [
//   { lastName: 'ZACHELIN',  firstName: 'Keny', education: 'Web', promo: 'P2020', group: 'G1-B', job: 'Dev-back' },
//   { lastName: 'RAVIRAJA',  firstName: 'Ramiya', education: 'Web', promo: 'P2020', group: 'G1-A', job: 'Design' },
//   { lastName: 'BANNWARTH',  firstName: 'Adrien', education: 'Web', promo: 'P2020', group: 'G1-B', job: 'Dev-Front' },
// ]

const Students = ({ Student }) => {
  const [ width, setWidth ] = useState(window.innerWidth)

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  });

  const isMobile = width <= 768;

  return (
    <Container group={Student.group}>
      <TextContainer>
        <p><strong>{Student.lastName}</strong></p>
        &nbsp;
        <p>{Student.firstName}</p>
      </TextContainer>
      {!isMobile && (
        <TextContainer>
        <p>{Student.education}</p>
        &nbsp;
        <p>{Student.promo}</p>
        &nbsp;
        &nbsp;
        <TextLight>{Student.group}</TextLight>
        </TextContainer>
      )}
      <TextContainer>
        <StyledJob job={Student.job}>
          {Student.job}
        </StyledJob>
      </TextContainer>
    </Container>
  )
}


export default Students;
