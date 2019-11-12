import styled from 'styled-components';

const LoginStyle = styled.div`
    background-color: #333;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 576px){
        padding: 0 20px;

        .form-container{
            padding: 30px 30px;

        }

    }

    .form-container{
        background: #fff;
        border-radius: 25px;
        padding: 25px 30px;
        width: 380px;
    }

    .logo-hetic{
        max-width: 160px;
        width: auto;
        margin: 0 auto;
        margin-bottom: 40px;
        display: block;
    }

    .input-group{
        margin-bottom: 20px;
    }
    .resetpassword{
        color: #A5A5A5;
        text-decoration: none;
        display: block;
        width: 100%;
        text-align: center;
        font-size: 12px;
    }

    .login-input{
        width: 100%;
        height: 55px;
        border-radius: 12px;
        background-color: #E3E3E3;
        padding: 5px 15px;
        border: none;
        color: #333
    }

    label{
        font-size: 12px;
        margin-bottom: 4px;
    }

    .form-container input, .form-container label{
        display: block;
        /* margin: 0 auto; */
    }

    .login-submit{
        background-color: #03CEA4;
        color: #fff;
        font-weight: 700;
        border: none;
        padding: 7px 15px;
        display: block;
        margin: 0 auto;
        margin-top: 30px;
        border-radius: 45px;
        width: 210px;
        height: 50px;
        font-size: 15px;
    }
`

export default LoginStyle