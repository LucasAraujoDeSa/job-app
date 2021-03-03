import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form{
    -webkit-box-shadow: 2px 3px 7px 0px #ccc;
    -moz-box-shadow: 2px 3px 7px 0px #ccc;
    box-shadow: 2px 3px 7px 0px #ccc;
    padding: 20px;
    margin: 10px;

    .job-details{
      display: flex;
    }
    .form_group{
      position: relative;
      padding: 15px 0 0;
      margin: 10px 15px;
    }
    .new-job-input{
      font-family: inherit;
      width: 100%;
      border: 0;
      border-bottom: 2px solid #9b9b9b;
      outline: 0;
      font-size: 1.3rem;
      color: #222222;
      padding: 7px 0;
      background: transparent;
      transition: border-color 0.2s;
      &::placeholder {
        color: transparent;
      }
      &:placeholder-shown ~ .new-job-label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
      }
    }

    .new-job-label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #9b9b9b;
    }

    .new-job-input:focus {
    ~ .new-job-label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: #11998e;
      font-weight:700;
    }
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, #11998e,#38ef7d);
      border-image-slice: 1;
    }

    .job-description{
      width:95%;
      margin: 15px auto;
    }

    .new-job-text-area{
      width:100%;
      height:100px;
      border: 2px solid #9b9b9b;
      outline: none;
      font-size: 1rem;
      font-family: inherit;
      padding: 5px;
    }

    .new-job-text-area:focus{
      font-size: 1rem;
      padding-bottom: 6px;
      font-weight: 700;
      border-width: 3px;
      border-image: linear-gradient(to right, #11998e,#38ef7d);
      border-image-slice: 1;
    }

    .job-btn{
      width:95%;
      margin: auto;
      display: flex;
    }

    .jobButton{
      margin: 5px 10px 5px 5px;
      width: 50%;
      background: #F03E3E;
      padding: 12px;
      border: none;
      border-radius: 0;
      color: #ffffff;
      cursor: pointer;
      font-size: 15px;

      &:hover{
        background: #ffffff;
        color: #F03E3E;
        border: 1px solid #F03E3E;
      }
    }

    .jobButton-cancel{
      margin: 5px 5px 5px 10px;
      width: 50%;
      background: #ffffff;
      padding: 12px;
      border: none;
      border-radius: 0;
      color: #F03E3E;
      cursor: pointer;
      font-size: 15px;
      border: 1px solid #F03E3E;
      &:hover{
        background: #F03E3E;
        color: #ffffff;
      }
    }

    .erro-msg-active{
      background: #F03E3E;
      color: #ffffff;
      width:95%;
      margin: auto;
      padding: 8px;
      text-align: center;
      font-size: 1rem;
    }

    .erro-msg{
      display: none;
    }

    #close{
      background: #ffffff;
      color: #F03E3E;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      position: relative;
      top: -15px;
      left: 485px;
      z-index: 3;
      border: 1px solid #F03E3E;
      cursor: pointer;
      font-size: 1.2rem;
    }

    @media (max-width: 768px){
      #close{
        width: 28px;
        height: 28px;
        top: -15px;
        left: 260px;
        z-index: 3;
        font-size: 1.8rem;
      }
    }

  }
`;
