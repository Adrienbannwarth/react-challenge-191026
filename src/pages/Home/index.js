import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Root, Box, ChartsContainer } from './styles.js';
import { Row, Col } from "react-flexbox-grid";
import Svg from "../../components/Shared/Svg";
import Chart from "../../components/Shared/Chart";
import Students from "../../components/Shared/Students";

const isStudent = false;

const Home = ({students}) => {
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
        <Root>
            <h2>Accueil</h2>
            <Row between="xs">
                {!isMobile && (
                    <Col className="colHome" xs={4}>
                        <Box>
                            <h3>Notifications des internvenants</h3>
                            <ul>
                                <li>
                                    <span className="highlightRed">Eric Priou: </span>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit
                                    accumsan ante, eu rhoncus ipsum accumsan sit amet. Sed vitae justo felis.
                                </li>
                                <li>
                                    <span className="highlightYellow">Eric Priou: </span> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit
                                    accumsan ante, eu rhoncus ipsum accumsan sit amet. Sed vitae justo felis.
                                </li>
                                <li>
                                    <span className="highlightGreen">Eric Priou: </span> 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit
                                    accumsan ante, eu rhoncus ipsum accumsan sit amet. Sed vitae justo felis.
                                </li>
                            </ul>
                        </Box>
                    </Col>
                )}
                <Col className="colHome middleColHome" xs={12} md={3}>
                    <Box>
                        <h3 className="numberHome">52</h3>
                        <h4>jours avant le partiel</h4>
                    </Box>
                    <Box>
                        <h4 className="addFileTitle">Ajouter une annonce / un fichier</h4>
                        <Svg id="plus" />
                    </Box>
                </Col>
                <Col className="colHome" xs={12} md={5}>
                    <Box>
                        <h3>Répartition des skills <span>par promotion</span>:</h3>
                        <ChartsContainer>
                            <div>
                                <Chart type="pie" />
                            </div>
                            <div className="barContainer">
                                <Chart type="bars" />
                            </div>
                        </ChartsContainer>
                    </Box>
                </Col>
            </Row>
            <Row className="studentsContainer">
                {students.map((student, index) => (
                  <Col xs={12} key={index}>
                    <Students Student={student} />
                  </Col>
                ))}
            </Row>
        </Root>
    )
}

Home.defaultProps = {
    students: [
      { lastName: 'ZACHELIN',  firstName: 'Keny', education: 'Web', promo: 'P2020', group: 'G1-B', job: 'Dev-back' },
      { lastName: 'RAVIRAJA',  firstName: 'Ramiya', education: 'Web', promo: 'P2021', group: 'G1-A', job: 'Design' },
      { lastName: 'BANNWARTH',  firstName: 'Adrien', education: 'Web', promo: 'P2022', group: 'G1-B', job: 'Dev-Front' },
    ],
  };

const mapStateToProps = state => {
    return {
  
    }
  };
  
  
  const mapDispatchToProps = dispatch => {
    return {
    //   signIn: values => dispatch(signIn(values)),
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);