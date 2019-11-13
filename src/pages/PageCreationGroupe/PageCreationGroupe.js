import React from 'react'

import PageCreationGroupeStyle from './PageCreationGroupeStyle'
import {UniqueChoice, MultipleChoice} from '../../components/Shared/Input/Choice'

const PageCreationGroupe = () => {
    return (
        <PageCreationGroupeStyle className="page PageCreationGroupe">
            <h1 className="page-title">Création de groupe</h1>
            <div className="page-content">
                {/* <h2 className="page-content-title">Création de groupe aléatoire</h2> */}
                <p className="page-content-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quidem accusantium!</p>
                <div className="form-container">
                    <div className="form-container-left">
                    <div className="input-group input-nbEtudiant">
                            <h3 className="input-group-subtitle">Nombre d'étudiants</h3>
                            <div className="choice-group radio-group">
                                <UniqueChoice selected={true} id="nbEtudiant" value="1-2"  text="1 à 2"/>
                                <UniqueChoice id="nbEtudiant" value="2-4" text="2 à 4"/>
                                <UniqueChoice id="nbEtudiant" value="4-6" text="4 à 6"/>
                            </div>
                        </div>

                        <div className="input-group input-skill">
                            <h3 className="input-group-subtitle">Compétences</h3>
                            <div className="choice-group checkbox-group">
                                <MultipleChoice color="#EAC435" selected={true} id="skill" value="front"  text="DEV FRONT"/>
                                <MultipleChoice color="#345995" id="skill" value="back" text="DEV BACK"/>
                                <MultipleChoice color="#03CEA4" id="skill" value="ux" text="DESIGN UX"/>
                                <MultipleChoice color="#FF4242" id="skill" value="ui" text="DESIGN UI"/>
                                <MultipleChoice color="#c934eb" id="skill" value="management" text="GESTION DE PROJECT"/>
                            </div>
                        </div>
                    </div>
                    <div className="form-container-right">
                        <div className="input-group input-promotion">
                            <h3 className="input-group-subtitle">Promotion  </h3>
                            <div className="choice-group checkbox-group">
                                <UniqueChoice selected={true} id="promotion" value="webp2020" text="WEB P2020"/>
                                <UniqueChoice id="promotion" value="webp2021" text="WEB P2020"/>
                                <UniqueChoice id="promotion" value="webp2022" text="WEB P2020"/>
                                <UniqueChoice id="promotion" value="webp2023" text="WEB P2020"/>
                            </div>
                        </div>
                        <input type="text" className="input-text" placeholder="Nom du projet"/>
                        <div>
                            <button className="input-success" type="submit">VALIDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </PageCreationGroupeStyle>
    )
}

export default PageCreationGroupe