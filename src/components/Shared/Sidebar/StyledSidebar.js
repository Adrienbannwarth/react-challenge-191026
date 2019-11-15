import styled from 'styled-components'

export const StyledSidebar = styled.div`
  left: ${props => props.isSidebarMobile ? '-100%' : '0'};
  left: ${({ open }) => open ? '0' : '-100%'} !important;
  position: fixed;
  z-index: 99;
  height: 100%;
  width: 30rem;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 5vh 2vw 2vh 2vw;
  box-shadow: 0 .2rem 3rem rgba(0, 0, 0, 0.05);
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
    position: relative;

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
      &::after {
        content: '';
        height: 1rem;
        width: .4rem;
        background: #7765E3;
        position: absolute;
        right: 0;
      }
      svg {
        color: #7765E3;
      }
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
