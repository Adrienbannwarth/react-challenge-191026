import React, { useState } from 'react';
import { connect } from "react-redux";
import { Root } from './styles.js';
import projectGroups from "../../helpers/projectGroups";
import Groups from "../../components/Shared/Groups";
import { Row, Col } from "react-flexbox-grid";

const Group = () => {
    const [option, setOption] = useState(projectGroups[0].projectID);
    console.log(option)

    return (
        <Root>
            <h2>Liste des groupes</h2>
            <select onChange={e => setOption(parseInt(e.target.value))}>
                {projectGroups && projectGroups.map(project => (
                    <option key={project.projectID} value={project.projectID}>{project.projectName}</option>
                ))}
            </select>
            <Row>
                {option !== undefined && 
                projectGroups.filter(projectGroup => projectGroup.projectID === option) &&
                projectGroups.filter(projectGroup => projectGroup.projectID === option)[0] &&
                projectGroups.filter(projectGroup => projectGroup.projectID === option)[0].groups.map(group => (
                    <Col xs={6}>
                        <Groups key={group.groupName} groupName={group.groupName} members={group.members} />
                    </Col>
                ))}
            </Row>
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