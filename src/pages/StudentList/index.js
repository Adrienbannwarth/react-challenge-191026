import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Root, SelectWrapper } from '../Group/styles.js';
import { Row, Col } from "react-flexbox-grid";


import Input from '../../components/Shared/Input/Input';
import Students from '../../components/Shared/Students';

const StudentList = ({ students }) => {
    const [promo, setPromo] = useState();
    const [skill, setSkill] = useState();
    const [filteredStudents, setFilteredStudents] = useState([...students]);
    const [search, setSeach] = useState();
    const [searchResults, setSeachResults] = useState(null);


    useEffect(() => {
      if (!!promo) {
        setFilteredStudents(students.filter(student => student.promo === promo));
      } else if (!skill && promo === "") {
        setFilteredStudents([...students])
      }
      if (!!skill) {
        setFilteredStudents(students.filter(student => student.job === skill));
      } else if (!promo && skill === "") {
        setFilteredStudents([...students])
      }
      if (!!promo && !!skill) { setFilteredStudents(students.filter((student) => student.job === skill && student.promo === promo)); }
      setSeach("");
      setSeachResults(null);
    }, [promo, skill]);


    useEffect(() => {
      setSeachResults(search ? filteredStudents.filter(student =>
        student.firstName.toLowerCase().includes(search.toLowerCase())
        || student.lastName.toLowerCase().includes(search.toLowerCase())
      ) : filteredStudents)
    }, [search])

    const dropdownPromoOptions = [
      { value: 'P2020', name: 'P2020' },
      { value: 'P2021', name: 'P2021' },
      { value: 'P2022', name: 'P2022' },
      { value: 'P2023', name: 'P2023' },
      { value: 'P2024', name: 'P2024' },
    ];

    const dropdownSkillsOptions = [
      { value: 'Design', name: 'Designer' },
      { value: 'Dev-back', name: 'Dev - Back' },
      { value: 'Dev-Front', name: 'Dev - Front' },
    ];

    return (
        <Root>
            <h2>Listes des étudiants</h2>
            <Col xs={6} md={6}>
              <Row middle="md" between="md">
                <Col xs={2} md={4}>
                  <SelectWrapper>
                      <select defaultValue="" onChange={e => setPromo(e.target.value)}>
                        <option value="">Par promotion</option>
                          {dropdownPromoOptions.map((promo, index) => (
                            <option key={index} value={promo.value}>{promo.name}</option>
                          ))}
                      </select>
                  </SelectWrapper>
                </Col>
                <Col xs={2} md={4}>
                  <SelectWrapper>
                    <select defaultValue="" onChange={e => setSkill(e.target.value)}>
                      <option value="">Par compétences</option>
                        {dropdownSkillsOptions.map((skill, index) => (
                          <option key={index} value={skill.value}>{skill.name}</option>
                        ))}
                    </select>
                  </SelectWrapper>
                </Col>
                <Col xs={2} md={4}>
                  <Input name="search" type="search" value={search} placeholder="Rechecher" onChange={e => setSeach(e.target.value)} />
                </Col>
              </Row>
            </Col>
            <Row>
              {search && searchResults ?
                searchResults.map((student, index) => (
                  <Col xs={12} key={index}>
                    <Students Student={student} />
                  </Col>
                ))
                :
                filteredStudents.map((student, index) => (
                  <Col xs={12} key={index}>
                    <Students Student={student} />
                  </Col>
                ))
              }
            </Row>
      </Root>
    )
}

const mapStateToProps = state => {
    return {
      students: state.students,
    }
  };


  const mapDispatchToProps = dispatch => {
    return {
      // getStudents: (promo, skill) => dispatch(getStudents(promo, skill)),
    }
  };

StudentList.defaultProps = {
  students: [
    { lastName: 'ZACHELIN',  firstName: 'Keny', education: 'Web', promo: 'P2020', group: 'G1-B', job: 'Dev-back' },
    { lastName: 'RAVIRAJA',  firstName: 'Ramiya', education: 'Web', promo: 'P2021', group: 'G1-A', job: 'Design' },
    { lastName: 'BANNWARTH',  firstName: 'Adrien', education: 'Web', promo: 'P2022', group: 'G1-B', job: 'Dev-Front' },
  ],
};

  export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
