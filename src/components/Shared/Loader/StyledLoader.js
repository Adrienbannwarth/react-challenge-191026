import styled from 'styled-components'

import { spin } from "./KeyFrames";

export const LoaderContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  position: relative;
`;

export const LoaderFirstSpan = styled.span`
   position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid transparent;
    border-top-color: #3498db;
    z-index: 100;
    animation: ${spin} 1s infinite;
`;

export const LoaderSecondSpan = styled.span`
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: 10px solid #ccc;
`;