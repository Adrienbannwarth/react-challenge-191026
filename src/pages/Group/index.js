import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { Root, SelectWrapper, NoGroup } from './styles.js';
import { projectGroups, studentProjects } from "../../helpers/projectGroups";
import Groups from "../../components/Shared/Groups";
import { Row, Col } from "react-flexbox-grid";

const isStudent = false;

const Group = () => {
    const [option, setOption] = useState(projectGroups[0] ? projectGroups[0].projectID : null);

    if (isStudent) {
        return (
            <Root>
                <h2>Mes groupes</h2>
                <Row>
                    {studentProjects && studentProjects.map(project => (
                        <Col xs={12} md={6} key={project.projectName}>
                            <Groups groupName={project.projectName} members={project.members} />
                        </Col>
                    ))}
                </Row>
            </Root>
        )
    }

    return (
        <Root className="noGroupContainer">
            <h2>Liste des groupes</h2>
            <SelectWrapper>
                <select onChange={e => setOption(parseInt(e.target.value))} defaultValue={projectGroups && projectGroups[0] ? projectGroups[0].projectID : ""}>
                    <option value="" disabled>Liste des projets</option>
                    {projectGroups && projectGroups.map(project => (
                        <option key={project.projectID} value={project.projectID}>{project.projectName}</option>
                    ))}
                </select>
            </SelectWrapper>
            <Row>
                {option !== undefined && 
                projectGroups.filter(projectGroup => projectGroup.projectID === option) &&
                projectGroups.filter(projectGroup => projectGroup.projectID === option)[0] &&
                projectGroups.filter(projectGroup => projectGroup.projectID === option)[0].groups.map(group => (
                    <Col xs={12} md={6} key={group.groupName}>
                        <Groups groupName={group.groupName} members={group.members} />
                    </Col>
                ))}
            </Row>
            {option === null && (
                <NoGroup>
                    <h3>Aucun groupe de disponible</h3>
                    <Link to="/something">Créer un groupe</Link>
                </NoGroup>
            )}
      </Root>
    )
}

const mapStateToProps = state => {
    return {
  
    }
  };
  
  
  const mapDispatchToProps = dispatch => {
    return {
    //   signIn: values => dispatch(signIn(values)),
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Group);