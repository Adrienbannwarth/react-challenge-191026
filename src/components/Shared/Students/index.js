import React from 'react';

import { Container, TextContainer, TextLight, StyledJob } from './StyledStudent'


// FAKE DATA
// const students = [
//   { lastName: 'ZACHELIN',  firstName: 'Keny', education: 'Web', promo: 'P2020', group: 'G1-B', job: 'Dev-back' },
//   { lastName: 'RAVIRAJA',  firstName: 'Ramiya', education: 'Web', promo: 'P2020', group: 'G1-A', job: 'Design' },
//   { lastName: 'BANNWARTH',  firstName: 'Adrien', education: 'Web', promo: 'P2020', group: 'G1-B', job: 'Dev-Front' },
// ]

const Students = ({ Student }) => (
  <Container group={Student.group}>
    <TextContainer>
      <p><strong>{Student.lastName}</strong></p>
      &nbsp;
      <p>{Student.firstName}</p>
    </TextContainer>
    <TextContainer>
    <p>{Student.education}</p>
    &nbsp;
    <p>{Student.promo}</p>
    &nbsp;
    &nbsp;
    <TextLight>{Student.group}</TextLight>
    </TextContainer>
    <TextContainer>
      <StyledJob job={Student.job}>
        {Student.job}
      </StyledJob>
    </TextContainer>
  </Container>
)


export default Students;
