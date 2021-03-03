import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
`

export const LeftSide = styled.div`
  width: 50%;
  margin: 10px 10px 10px 20px;

  a{
    color: #242520;
    text-decoration: none;
  }
`

export const RightSide = styled.div`
  width: 50%;
  text-align: right;
  margin: 10px 20px 10px 10px;
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

  button:hover {
    background: #fff;
    border: 2px solid #F03E3E;

    a{
      color: #F03E3E;
    }
  }
`


