import styled from 'styled-components'

const Row = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2fr;
  width: 100%;
  margin: auto;
  gap: 15px;
  font-size: 1.4rem;
  li {
    list-style: none;
    button {
      background-color: #C02739;
      color: #eee;
      &:active {
        background-color: #f44;
      }
    }
  }
  .row-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    form {
      position: fixed;
      width: 30%;
      top: 80px;
      left: 50px;
    }
    & form span {
      font-size: 1rem;
      text-align: center;
      margin: auto;
      color: #f44;
    }
    h3 {
      padding: 10px;
      margin-bottom: 5px;
      text-align: center;
    }
    .div {
      display: flex;
      width: 95%;
      flex-direction: column;
      /* justify-content: flex-start; */
      /* align-items: center; */
      input, button {
        /* display: flex; */
        font-size: 1.1rem;
        padding: .8rem .7rem;
        border: 2px solid #00ADB5;
        outline: none;
      }
      button {
        background: #00ADB5;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
        transition: background .1s ease-in-out;
        &:hover {
          background: #00ADc5ee;
        }
      }
      input {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
      }
    }
    &__users {
      width: 95%;
      margin: auto;
      ul {
        gap: 20px;
        width: 95%;
        margin: 25px auto;
        margin-top: 25px;
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        li {
          width: 100%;
          max-width: 290px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          /* background-color: #00ADB5; */
          border-radius: 5px;
          /* padding: 0 .6rem; */
          word-wrap: break-word;
          .header{
            word-wrap: break-word;
            /* border: 1px solid #00ADB5; */
            border-left: 2px solid #00ADB5;
            border-right: 2px solid #00ADB5;
            border-top: 2px solid #00ADB5;
            width: 100%;
            padding: .8rem .4rem ;
            text-align: center;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
          }
          .button {
            width: 100%;
            background-color: #C02739;
            border-bottom-left-radius: 20px;
            border-bottom-right-radius: 20px;
            Button {
              border-bottom-left-radius: 20px;
              border-bottom-right-radius: 20px;
              width: 100%;
              padding: 1rem 0;
            }
          }
        }
      }
    }
  }
  .row-item-users {}
  @media screen and (max-width:760px) {
    grid-template-columns: 1fr;
    .row-item {
      form {
        width: 100%;
        position: static;
        /* display: flex; */
        /* width: 40%; */
        top: 0;
        /* left: 0;
        right: 0; */
      }
    }
    .row-item .div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
      /* margin-right: 0; */
      input {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border-top-right-radius: 0px;
      }
      button {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 0;
      }
    }
    .row-item__users ul li {
      /* max-width: 240px */
    }
  }
`
export default Row
