import styled from "styled-components";

import banner from '../../public/images/banner.jpg'


export const Container = styled.div`
  width: 100%;

  .search-container{
    width: 100%;
    height: 500px;

    background: url(${banner}) no-repeat center;
    background-size: cover;
    flex: 1;
    border-bottom: 2px solid #0217fa;

    display: flex;
    justify-content: center;
    align-items: center;

    .search-content{
      text-align: center;
      width: 100%;
    }

    .search-button{
      width: 100px;
      background: #F03E3E;
      padding: 12px;
      border: none;
      border-radius: 0;
      cursor: pointer;
      color: #fff;
      margin-left: 10px;
    }

    .search-title{
      color: #fff;
      font-size: 3rem;
      margin-bottom: 20px;
    }

    #search-bar{
      margin: 10px auto 10px auto;
      width: 35%;
      padding: 10px;
      outline: none;
      border: none;
      border-radius: 0;
      font-size: 17px;
    }
  }

  .jobs-section{
    max-width: 900px;
    margin: auto;
  }

  .job-card{
    width:  70%;
    margin: 15px auto;
    padding: 10px;

    border: 1px solid #cccccc;
    background: #fff;
    color: #212529;

    display: flex;
    align-items: center;
  }

  .job-container{
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .companyImage{
    width: 30%;
    z-index: 1;
    position: relative;
    left:-49px;

    img{
      border: 1px solid #212529;
      border-radius: 50%;
    }
  }

  .info-section{
    width:  70%;
    text-align: left;

    p{
      padding: 3px;
    }

    h2{
      padding: 5px;
    }
  }

  .btn-section{
    width:  50%;
    text-align: right;
    height: 100%;

    button{
      background: #F03E3E;
      padding: 12px;
      border: none;
      border-radius: 0;
      cursor: pointer;

      a{
        text-decoration: none;
        color: #fff;
        font-size: 15px;
      }
    }
  }

  .btn-section:hover{
    button{
      background: #fff;
      border: 2px solid #F03E3E;
    }

    a{
      color: #F03E3E;
    }
  }

  @media only screen and (max-width: 600px){
    .search-container{

      .search-button{
        width: 90%;
        margin-left: 0;
        margin-top: 5px;
      }

      .search-title{
        color: #fff;
        font-size: 3rem;
        width: 90%;
        margin: 0 auto 20px auto;
        text-align: left;
      }
      #search-bar{
        width: 90%;
      }
    }

    .job-card{
      display: block;
      width: 90%;
    }


    .info-section{
      width: 100%;
      text-align: left;
      margin-bottom: 10px;
    }

    .companyImage{
      display: none;
    }
    .btn-section{
      width: 100%;

      button{
        width: 100%;
      }
    }
  }

`
