import React, { Component } from 'react';

import UserInput from './UserInput'
import RadioInput from './RadioInput';
import GradeInput from './GradeInput';


export class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groups: [
                '1A', '1B', '2A', '2B'
            ]
        }
    }
    postData = e => {
        e.preventDefault();
        fetch('./response.json', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        .then(res => console.log(res))
        .catch(err => console.error(err))
    }
    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleClick = e => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.dataset.grade})
        return e.target.dataset.checked = true;
    }
    handleGroupClick = e => {
        return this.setState({group: e.target.dataset.group})
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
                <div>

                {
                    this.state.groups.map(group => {
                        return <RadioInput
                            name={group}
                            handleClick={this.handleGroupClick}
                        />
                    })
                }

                </div>

                <h2>Main skills</h2>
                <GradeInput
                    title={"Programmation côté client"}
                    label={"client"}
                    handleClick={this.handleClick}
                />

                <h2>Secondary skills</h2>
                <GradeInput
                    title={"Programmation côté serveur"}
                    label={"server"}
                    handleClick={this.handleClick}
                />
                <GradeInput
                    title={"Design UI"}
                    label={"ui"}
                    handleClick={this.handleClick}
                />
                <GradeInput
                    title={"Design UX"}
                    label={"ux"}
                    handleClick={this.handleClick}
                />
                <GradeInput
                    title={"Gestion de projets"}
                    label={"cdp"}
                    handleClick={this.handleClick}
                />
                <input type="submit" onSubmit={this.postData} title="Valider les modifications"/>
            </form>
        </>
    }
}
