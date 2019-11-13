import React, { Component } from 'react';
import styled from 'styled-components';

import UserInput from './inputs/UserInput'
import RadioInput from './inputs/RadioInput';
import GradeInput from './inputs/GradeInput';

export class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [
                '1A', '1B', '2A', '2B'
            ],
            skills: [
                {
                    name: 'Programmation côté client',
                    label: 'client'
                },
                {
                    name: 'Programmation côté serveur',
                    label: 'server'
                },
                {
                    name: 'Design UI',
                    label: 'ui'
                },
                {
                    name: 'Design UX',
                    label: 'ux'
                },
                {
                    name: 'Gestion de projet',
                    label: 'cdp'
                },
            ],
            group: '1A'
        }
    }
    postData = e => {
        e.preventDefault();
        // fetch('./response.json', {
        //     method: 'POST',
        //     body: JSON.stringify(this.state)
        // })
        // .then(res => console.log(res))
        // .catch(err => console.error(err))
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
    handleGroupClick = e => {
        e.preventDefault();
        return this.setState({
            group: e.target.dataset.group
        })
    }
    render() {
        return <>
            <form action="" onSubmit={this.postData}>
                <h2>Mon profil</h2>
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

                <h2>Groupe de promotion</h2>
                {
                    this.state.groups.map(group => {
                        return <RadioInput
                            key={group}
                            name={group}
                            handleClick={this.handleGroupClick}
                        />
                    })
                }

                <h2>Main skills</h2>
                <GradeInput
                    title={this.state.skills[0].name}
                    label={this.state.skills[0].label}
                    handleClick={this.handleClick}
                />

                <h2>Secondary skills</h2>
                {
                    this.state.skills.map((skill, i) => {
                        if (i !== 0) {
                            return <GradeInput
                                key={skill.label}
                                title={skill.name}
                                label={skill.label}
                                handleClick={this.handleClick}
                            />
                        }
                        
                    })
                }
                <input
                    type="submit" 
                    onSubmit={this.postData} 
                    title="Valider les modifications"
                />
            </form>
        </>
    }
}
