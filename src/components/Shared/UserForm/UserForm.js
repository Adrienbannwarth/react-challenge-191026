import React, { Component } from 'react';

import { GradeInput } from './ChartInput';

export class UserForm extends Component {
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
        
        e.target.dataset.checked = true;
        return true;
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
