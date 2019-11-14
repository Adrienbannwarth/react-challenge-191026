import styled from "styled-components";

export const Root = styled.div`
    h2 {
        font-family: "Open" sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 2.4rem;
        display: flex;
        align-items: center;
        color: #000000;
        margin-bottom: 3rem;
        margin-top: 5rem;
    }

    h3 {
        font-family: "Open", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 1.8rem;
        color: #474747;
        margin-bottom: 3rem;
        margin-top: 0rem;
    }

    .middleColHome {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        div {
            height: 48%;
        }
    }
`;

export const Box = styled.div`
    background: #FFFFFF;
    padding: 2.4rem 2.6rem 1rem;

    ul {
        padding: 0px;
        list-style: none;

        li {
            margin-bottom: 2.9rem;
            font-family: "Open", sans-serif;
            font-style: normal;
            font-size: 1.2rem;
            color: #666;

            .highlightRed {
                color: #FF4242;
            }
            .highlightGreen {
                color: #03CEA4;
            }
            .highlightYellow {
                color: #EAC435;
            }
        }
    }

    h3 {
        span {
            font-weight: normal;
            color: rgba(0, 0, 0, 0.4);
        }
    }

    .numberHome {
        font-size: 7.2rem;
        margin-bottom: 0;
        font-weight: bold;
    }

    h4 {
        font-family: "Open", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        color: #474747;
        margin: 0;
    }

    .addFileTitle {
        text-align: center;
    }

    svg {
        width: 40px;
        height: 40px;
        margin: 0 auto;
        display: block;
        margin-top: 2rem;
    }
`;