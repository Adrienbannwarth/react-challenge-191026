import styled from 'styled-components';

export const ScH2 = styled.h2`
    margin: 30px 30px 50px;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    display: flex;
    align-items: center;
    color: #000000;
`;

export const ScForm = styled.form`
    width: calc(100% - 24rem);
    position absolute;
    left: 24rem;
    display: flex;
    flex-direction: column;
`;

export const ScInput = styled.input`
    width: calc(100% - 2 * 30px);
    min-height: 50px;
    margin: 0 30px 30px;
    padding: 20px 40px;
    background: #FFFFFF;
    box-shadow: 0px 4px 2px rgba(163, 160, 160, 0.25);
    border-radius: 10px;
    font-family: Open Sans;
        font-size: 18px;
        line-height: 25px;
        display: flex;
        align-items: center;
    border: none;
    &[type='textarea'] {
        padding-bottom: 150px;
    }
    ::placeholder {
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
    box-shadow: 0px 4px 2px rgba(163, 160, 160, 0.25);
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
    box-shadow: 0px 4px 2px rgba(163, 160, 160, 0.25);
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
    font-size: 20px;
    line-height: 30px;
    &:nth-child(${props => props.grade + 1}) {
        ${props => props.grade + 1 === 1 || props.grade + 1 === 2 ? 'background: #03CEA4' : null}
        ${props => props.grade + 1 === 3 || props.grade + 1 === 4 ? 'background: #EAC435' : null}
        ${props => props.grade + 1 === 5 || props.grade + 1 === 6 ? 'background: #FF4242' : null}
    }
    
`;

export const ScSubmitButton = styled.input`
    width: 340px;
    background: #03CEA4;
    border-radius: 43.5px;
    border: none;
    padding: 14px;
    margin: 50px auto;
    text-transform: uppercase;
    font-family: Open Sans;
    font-weight: bold;
    font-size: 15px;
    line-height: 20px;
    color: #FFFFFF;
`;

export const ScLock = styled.div`
    i {
        color: ${props => props.isLocked ? '#03CEA4' : '#eee'}
        transition: all 0.2s ease;
        cursor: pointer;
        &:hover {
            transform: scale(1.5);
            color: ${props => props.isLocked ? '#03CEA4' : '#7affe2'}
        }
    }

`;