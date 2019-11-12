import React, { Component } from 'react';

import { GradeInput } from './GradeInput';

export class UserForm extends Component {
    constructor(props) {
        super(props);
    }
    postData = () => {

    }
    handleChanges = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return <>
            <form action="" onSubmit={this.postData}>
                <h2>Mon profil</h2>
                <input 
                    className="lastname"  
                    type="text" 
                    placeholder="Nom"
                    name="lastname"
                    onChange={this.handleChanges}
                />
                <input
                    className="firstname"
                    type="text"
                    placeholder="Prénom"
                    name="firstname"
                    onChange={this.handleChanges}
                />
                <input
                    className="email"
                    type="email"
                    placeholder="E-mail"
                    name="mail"
                    onChange={this.handleChanges}
                />
                <input
                    className="desc"
                    type="textarea"
                    placeholder="Description"
                    name="desc"
                    onChange={this.handleChanges}
                />

                <h2>Main skills</h2>
                <GradeInput
                    title={"Programmation côté client"}
                />

                <h2>Secondary skills</h2>
                <GradeInput
                    title={"Programmation côté serveur"}
                />
                <GradeInput
                    title={"Design UI"}
                />
                <GradeInput
                    title={"Design UX"}
                />
                <GradeInput
                    title={"Gestion de projets"}
                />

            </form>
        </>
    }
}
