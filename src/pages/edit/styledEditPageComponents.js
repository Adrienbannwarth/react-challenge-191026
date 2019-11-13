import styled from 'styled-components';

export const ScH2 = styled.h2`
    margin: 30px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;

    color: #000000;
`;

export const ScForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const ScInput = styled.input`
    background: #FFFFFF;
    width: calc(100% - 2 * 30px);
    min-height: 50px;
    margin: 0 30px 30px;
    box-shadow: 0px 2px 5px -1px rgba(122,122,122,1);
    border-radius: 10px;
    border: none;
    ::placeholder {
        padding: 40px;
        font-family: Open Sans;
        font-size: 18px;
        line-height: 25px;
        display: flex;
        align-items: center;

        color: #A5A5A5;
    }
`;

export const ScNav = styled.nav`
    display: flex;
`;

export const ScButton = styled.button`
    background: ${props => props.isSelected ? "#03CEA4" : "#fff"};
    color: ${props => props.isSelected ? "#fff" : "#A5A5A5"};
    margin: 0 15px 30px;
    padding: 10px 25px;
    box-shadow: 0px 2px 5px -1px rgba(122,122,122,1);
    border-radius: 10px;
    border: none;
    font-family: Open Sans;
    font-size: 18px;
    line-height: 25px;
    display: flex;
    justifiy-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    :hover {
        color: #fff;
        background: #03CEA4;
    }
`;

export const ScGradeInput = styled.div`
    background: #FFFFFF;
    min-height: 50px;
    margin: 0 30px 30px;
    padding: 0 40px;
    font-family: Open Sans;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    box-shadow: 0px 2px 5px -1px rgba(122,122,122,1);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
        font-size: 18px;
    }
`;
export const ScGradebutton = styled.button`
    width: 32px;
    height: 32px;
    margin: 0 5px;
    background: #C4C4C4;
    border-radius: 100%;
    border: none;
    color: #fff;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
`;

export const ScSubmitButton = styled.input`
    width: 340px;
    background: #03CEA4;
    border-radius: 43.5px;
    border: none;
    padding: 14px;
    text-transform: uppercase;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
`;