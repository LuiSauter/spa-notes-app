import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: center; */
  flex-wrap: wrap;
  width: 90%;
  font-size: 1.3rem;
  gap: 15px;
  margin: 20px auto;
  p {
    /* box-sizing: border-box; */
    hyphens: auto;
    padding: 10px;
    /* width: fit-content; */
    /* width: 190px; */
  }
  .container-item {
    box-shadow: 0px 0px 6px #00ADB5;
    display: grid;
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    border: 3px solid #00ADB5;
    outline: none;
    border-radius: 25px;
    width: 100%;
    min-height: 220px;
    max-width: 420px;
    &:hover {
      /* position: static; */
      outline: 4px solid #00ADB5;
    }
    &__header {
      display: flex;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background-color: #00ADB5;
      color: #14202b;
      word-wrap: break-word;
      border-bottom-left-radius: 19px;
      border-top-left-radius: 19px;
      width: 100%;
    }
    &__content {
      font-size: 1.2rem;
    }
    &__footer button {
      background-color: #C02739;
      color: #eee;
      padding: 0.5rem 1rem;
      border-bottom-left-radius: 9px;
      border-top-left-radius: 9px;
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
      &:active {
        background-color: #f44;
      }
    }
    .link {
      background-color: #F0A500;
      color: #14202b;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;
      border-bottom-right-radius: 9px;
      border-top-right-radius: 9px;
      &:active {
        background-color: #FFB344;
      }
    }
  }
  @media screen and (min-width: 760px) {
    .container-item {
    /* max-width: 400px; */
  }
  }
`

export default Container
