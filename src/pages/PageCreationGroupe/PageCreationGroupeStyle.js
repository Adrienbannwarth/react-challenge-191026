import styled from 'styled-components';

const PageCreationGroupeStyle  = styled.div`
    background-color: #F5F5FB;
    min-height: 100vh;
    padding-top: 30px;

    .page-title{
        margin-left: 27px;
        margin-bottom: 10px
    }

    .page-content{
        /* background-color: #fff; */
        border-radius: 10px;
        padding: 0 27px;
        padding-bottom: 54px;
        &-title{
            margin-bottom: 10px;
        }

        &-subtitle{
            margin-bottom: 48px;
            color: #7E7B7B
        }
    }

    .input-group{
        font-size: 14px;
        margin-bottom: 30px;

        &:last-child{
            margin-bottom: 0
        }

        &.input-skill, &.input-promotion{
            .choice-group{
                grid-template-columns: repeat(2, 1fr)
            }
        }

        &-title{
            font-size: 14px;
            font-weight: 700
        }

        &-subtitle{
            font-size: 14px;
            display: inline-block;
            font-weight: 600;
            margin-bottom: 18px;
        }

        .choice-group{
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-gap: 11px;
        }
    }

    .form-container{
        display: flex;
        flex-direction: column;

        .input-text{
            width: 100%;
            height: 42px;
            padding: 0 15px;
            border-radius: 10px;
            border: 1px solid #A5A5A5;
            color: #A5A5A5;
            font-size: 14px;
        }

        .input-success{
            width: 100%;
            height: 50px;
            background: #03CEA4;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 45px;
            color: #fff;
            text-align: center;
            font-weight: bold;
            margin-top: 40px;
        }
        

        &-left{
            width: 100%;
        }

        &-right{
            width: 100%;
        
        }
    }

    @media screen and (min-width: 767px){

        .input-group{
            &-title{
                margin-bottom: 26px;
            }


            &.input-nbEtudiant .choice-group{
                grid-template-columns: repeat(4, 1fr)
            }

            &.input-promotion .choice-group{
                grid-template-columns: repeat(3, 1fr)
            }
        }

        .form-container{
            flex-direction: row;

            .input-success{
                width: 260px;
                margin: 0 auto;
                display: block;
                margin-top: 47px;
            }

            &-left, &-right{
                max-width: 450px;
            }


            &-left{
                position: relative;
                margin-right: 56px;
                padding-right: 56px;

                &:before{
                    content: '';
                    width: 2px;
                    height: 70%;
                    position: absolute;
                    background-color: #E5E5E5;
                    right: 0;
                    top: 50%;
                    transform: translate(0, -50%);
                }
            }

        }
    }
`

export default PageCreationGroupeStyle