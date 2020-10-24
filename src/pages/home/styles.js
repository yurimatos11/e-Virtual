import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
@media (min-width: 700px) {
  height: 100vh;
}
background: linear-gradient( #000 10%, red 500%);
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

  @media (min-width: 700px){
    h1{
      margin: 25px 30px;
    }
    .fas{
      margin: 25px 30px;
    }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  .a{
    background: #fff;
  }
  .b{
    background: #fff;
  }
  .c{
    background: #fff;
  }
  
    .but{
      width: 12rem;
      height: 2.0rem;
      padding-top: 0.1rem;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0rem;
      background: green;
      color: #fff;
      outline: none;
      border: none;
    }
    .but:hover{
      background: red;
      color: #000;
      transition: 1s;
    }
    .text{
      color: #000;
      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      background: #fff;
      border: none;
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

  @media(min-width: 700px){   
    .tenis1{
      width: 150px;
      margin-top: 50px;
    }

    .tenis2{
    width: 150px;
    margin-top: 50px;

  }

  .tenis3{
    width: 150px;
    margin-top: 50px;

  }

    .a{
      background: none;
      padding: 0 80px;
    }

    .b{
      background: none;
      padding: 0 80px;
    }

    .c{
      background: none;
      padding: 0 80px;
    }

    .card{
      display: flex;
    }

    .text{
      color: #000;
      background: #fff;
      border: none;
      font-size: 20px;
    }

    .but{
      width: 150px;
      height: 2.0rem;
      padding-top: 0.1rem;
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 0rem;
      background: green;
      color: #fff;
      outline: none;
      border: none;
    }
`;

