import styled from 'styled-components';

export const Container = styled.div`
width: 100vw;
height: 100vh;
background: linear-gradient(300.54deg, #000 10%, red 500%);
`;

export const Header = styled.div `
  .oi{
    display: flex;
    justify-content: space-between;
  }
  .fas{
    cursor: pointer;
    color: #fff;
    margin: 1.0rem 1.0rem;
  }
  h1{
    color: #fff;
    margin: 1.0rem 1.0rem;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  
    .but{
      width: 12rem;
      height: 2.0rem;
      padding-top: 0.1rem;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 2.0rem;
    }
    .text{
      color: #fff;
      display: flex;
      justify-content: center;
      padding-top: 0.5rem;
      font-size: 1.5rem;
    }
  .tenis1{
    width: 12.0rem;
    display: flex;
    margin-top: 3.0rem;
  }

  .tenis2{
    width: 12.0rem;
    display: flex;
    margin-top: 3.0rem;

  }

  .tenis3{
    width: 12.0rem;
    display: flex;
    margin-top: 3.0rem;

  }

  @media(min-width 700px;){
    .tenis1{
    width: 50px;
    display: flex;
    margin-top: 3.0rem;
  } 


`;

