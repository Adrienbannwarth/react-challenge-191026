import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ScH2, ScForm, ScNav, ScSubmitButton } from './styledEditPageComponents';
import { getAccount } from '../../redux/actions/account';

import UserInput from './inputs/UserInput'
import RadioInput from './inputs/RadioInput';
import GradeInput from './inputs/GradeInput';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [
                {
                    label: '1A',
                    isSelected: true
                },
                {
                    label: '1B',
                    isSelected: false
                },
                {
                    label: '2A',
                    isSelected: false
                },
                {
                    label: '2B',
                    isSelected: false
                }
            ],
            skills: [
                {
                    name: 'Programmation côté client',
                    label: 'client',
                    grade: 2,
                    isLocked: true,
                },
                {
                    name: 'Programmation côté serveur',
                    label: 'server',
                    grade: 1,
                    isLocked: false,
                },
                {
                    name: 'Design UI',
                    label: 'ui',
                    grade: 3,
                    isLocked: false,
                },
                {
                    name: 'Design UX',
                    label: 'ux',
                    grade: 0,
                    isLocked: false,
                },
                {
                    name: 'Gestion de projet',
                    label: 'cdp',
                    grade: 4,
                    isLocked: false,
                },
            ],
            group: '1A'
        }
    }
    componentDidMount() {
      this.props.getAccount();
    }
    postData = e => {
        e.preventDefault();
        const POSTED_DATA = this.state
        delete POSTED_DATA.groups;
        delete POSTED_DATA.skills;

        return console.log(POSTED_DATA);
    }
    handleChanges = e => {
        return this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.dataset.grade
        })
        return e.target.dataset.checked = true;
    }
    selectGroup = e => {
        e.preventDefault();
        const GROUPS = this.state.groups;
        const GROUP = e.target.dataset.group;
        GROUPS.forEach(group => {
            return group.isSelected = GROUP === group.label ? true : false;
        })
        return this.setState({
            groups: GROUPS,
            group: GROUP
        })
    }
    handleLockerClick = e => {
        e.preventDefault();
        const SKILLS = [...this.state.skills];
        let index = 0;
        SKILLS.forEach((skill, i) => {
            if (e.target.dataset.label === skill.label) {
                index = i
                return skill.isLocked = true;
            } else {
                return skill.isLocked = false;
            }
        })
        const lockedSkill = SKILLS.splice(index, 1);
        SKILLS.unshift(...lockedSkill)
        return this.setState({
            skills: SKILLS
        })
    }
    render() {
        return <>
            <ScForm action="" onSubmit={this.postData}>
                <ScH2>Mon profil</ScH2>

                <UserInput
                    label="lastname"
                    type="text"
                    name="Nom"
                    handleChanges={this.handleChanges}
                />
                <UserInput
                    label="firstname"
                    type="text"
                    name="Prénom"
                    handleChanges={this.handleChanges}
                />
                <UserInput
                    label="email"
                    type="email"
                    name="E-mail"
                    handleChanges={this.handleChanges}
                />
                <UserInput
                    label="description"
                    type="textarea"
                    name="Description"
                    handleChanges={this.handleChanges}
                />

                <ScNav>
                    <ScH2>Groupe de promotion</ScH2>
                    {this.state.groups.map(group => {
                        return <RadioInput
                            key={group.label}
                            name={group.label}
                            handleClick={this.selectGroup}
                            isSelected={group.isSelected}
                        />
                    })}
               </ScNav>

                <ScH2>Main skills</ScH2>
                <GradeInput
                    grade={this.state.skills[0].grade}
                    title={this.state.skills[0].name}
                    label={this.state.skills[0].label}
                    handleClick={this.handleClick}
                    isLocked={this.state.skills[0].isLocked}
                    handleLockerClick={this.handleLockerClick}
                />

                <ScH2>Secondary skills</ScH2>

                {this.state.skills.map((skill, i) => {
                    if (i !== 0) {
                        return <GradeInput
                            key={i}
                            grade={skill.grade}
                            title={skill.name}
                            label={skill.label}
                            handleClick={this.handleClick}
                            isLocked={skill.isLocked}
                            handleLockerClick={this.handleLockerClick}
                            />
                    } else return null;
                })}
                <div style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <ScSubmitButton
                        type="submit"
                        onSubmit={this.postData}
                        value="Valider les modifications"
                    />
                </div>
            </ScForm>
        </>
    }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAccount: () => dispatch(getAccount()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
