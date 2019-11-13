import React from "react";
import { Root } from "./styles";
import Students from "../Students";

const Groups = ({ groupName, members}) => (
    <Root>
        <h3>{groupName}</h3>
        {members && members.map((member, i) => (
            <Students key={i} Student={member} />
        ))}
    </Root>
);

export default Groups;