import styled from "styled-components";

export const Root = styled.div`
    width: 95%;
    margin: 0 auto;

    h2 {
        font-family: "Open" sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom: 5rem;
    }
`;

export const SelectWrapper = styled.div`
    position: relative;
    width: 224px;
    height: 51px;
    margin-bottom: 1.7rem;

    &::before {
        content: "";
        position: absolute;
        right: 1.7rem;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        height: 0;
        width: 0;
        border-top: 12px solid #FFFFFF;
        border-right: 8px solid transparent;
        border-left: 8px solid transparent;
        z-index: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
    }
    select {
        width: 100%;
        height: 100%;
        background: #345995;
        box-shadow: 0px 0px 10px rgba(52, 89, 149, 0.4);
        border-radius: 6px;
        font-family: "Open" sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 19px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        padding-left: 2.2rem;
        outline: none;
        position: relative;
    }
`;