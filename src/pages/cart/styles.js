import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
height: 100vh;
@media (min-width: 700px) {
  height: 100vh;
}
background: linear-gradient( #000 10%, red 500%);
`;

export const Header = styled.div`
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
    h1{
      color: #fff;
      margin-top: 40%;
      display: flex;
      justify-content: center;
    }
    p{
      color: #fff;
      margin-top: 1.0rem;
      display: flex;
      justify-content: center;
    }
    .oi{
      display: flex;
      justify-content: center;
      margin-top: 1.0rem;
    }

    .fas{
      color: #fff;
      background:none;
      border: none;
      outline: none;
      text-decoration: none;
    }
    .fas:hover{
      color: green;
      transition: .8s;
    }

    @media (min-width: 700px) {
      h1{
      margin-top: 10%;
    }

    }
`;