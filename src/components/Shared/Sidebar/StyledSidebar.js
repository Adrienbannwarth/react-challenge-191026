import styled from 'styled-components'

export const StyledSidebar = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    background-color: white;
    width: 30rem;
    padding: 5vh 2vw 2vh 2vw;
    box-shadow: 1.3rem 0px 9px -6px rgba(0,0,0,0.48);
`

export const StyledLogoContainer = styled.div`
    width: 100%;
    margin-bottom:20px;
    text-align: center;

    img {
        width: 80%;
        margin-bottom: 20px;
    }

`

export const StyledTabContainer = styled.div`
    height: 100%;

    a {
        display: flex;
        flex-wrap: no-wrap;
        padding-top: 15px;
        padding-bottom:15px;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        font-size: 1.5em;
        color: #C4C4C4;
        align-items: center;


    }

    .active {
      color: red;
    }

    svg {
        height: 25px;
        width: 25px;
        margin-right: 20px;
    }
`

export const ProfileCard = styled.div`
    box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.1);
    background-color: white;
    width: 100%;
    border-radius: 10px;
    display: flex;
    margin-bottom:50px;
    padding: 12px;

    > div {
        height:50px;
        width:50px;
        background-color: green;
        border-radius: 50px;
        margin-right: 20px;
    }

    > p {
        font-size: 1.5em;
        font-family : 'Open Sans', sans-serif;
        font-weight: 600;
    }
`

export const DisconnectBtn = styled.div`
    box-shadow: 0px 4px 14px 0px rgba(0,0,0,0.1);
    background-color: white;
    width: 100%;
    border-radius: 10px;
    display: flex;
    padding:10px;
    font-size: 1.5em;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
        background-color : red;

        p {
            color: white;
        }
    }
    p {
        color: red;
        font-family: 'Open Sans', sans-serif;
        margin: 0 auto;
    }
`
