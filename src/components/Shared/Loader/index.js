import React from 'react';
import { LoaderContainer, LoaderFirstSpan, LoaderSecondSpan, LoaderThirdSpan, LoaderFourthSpan } from "./StyledLoader";

const Loader = () => {
    return (
        <LoaderContainer>
            <LoaderFirstSpan></LoaderFirstSpan>
            <LoaderSecondSpan></LoaderSecondSpan>
        </LoaderContainer>
    )
};

export default Loader;