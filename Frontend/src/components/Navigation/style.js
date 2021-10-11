import styled from 'styled-components'

const Nav = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&display=swap');
  width: 100%;
  top: 0px;
  font-family: 'Maven Pro', sans-serif;
  /* height: 100%; */
  /* font-size: 1.40rem; */
  padding: 0 0.2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: sticky;
  font-size: 1.1rem;
  z-index: 1000;
  .link {
    text-decoration: none;
    color: #ccc;
  }

  i {
    display: none;
  }

  .nav-button {
    margin: .50rem .85rem;
    align-items: center;
    justify-content: center;
    transition: transform 1s;
    &:hover {
      transform: scale(1.1);
    }
  }

  & span:hover ,i:hover {
    color: #00ADB5;
  }

  .current {
    background-color: #00ADB5;
    display: flex;
    border-radius: 30px;
    padding: .55rem 1rem;
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background .1s ease-in-out;
    & span {
        color: #222831;
      /* font-size: 1.1rem; */
        font-weight: bold;

    }
    & span:hover ,i:hover {
    color: #222831;
    }
  }

  @media screen and (max-width: 760px) {
    i {
      display: flex;
      min-width: 30px;
      min-height: 30px;
      justify-content: center;
      align-items: center;
      padding: .2rem;
      font-size: 1.25rem;
    }
    .link span {
      display: none;
    }
    .current {
      background-color: #00ADB5;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding: .30rem;
      min-height: 45px;
      min-width: 47px;
      i {
        color: #262d38;
      }
    }
  }
`

export default Nav
