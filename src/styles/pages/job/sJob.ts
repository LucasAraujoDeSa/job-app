import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  height: 90vh;
  margin: 20px auto 40px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #cccccc;
  border-radius: 10px;

  header{
    text-align: center;
    h1{
      margin-bottom: 14px;
    }
    span{
      margin-left: 7px;
      font-size: 19px;
      color: red;
    }
  }

  main{
    .description{
      text-align: center;
      margin-top: 20px;
      font-size: 28px;
      margin: 10px 15px 10px 15px;
    }
    .contacts{
      text-align: center;
      margin-top: 20px;
      font-size: 28px;
      p{
        color: red;
      }
    }
  }

  @media only screen and (max-width: 600px){
    width: 100%;
    border: none;

    display: block;

    header{
      margin-top: 10px;
    }

    main{
      .description{
        font-size: 23px;
        line-height: 26px;
        margin: 10px 5px 10px 5px;
      }
      .contacts{
        margin-top: 30px;
      }
    }
  }
`;
