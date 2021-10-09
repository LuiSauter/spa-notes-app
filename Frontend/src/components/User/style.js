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
  }
  .row-item {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-wrap: wrap;
    form {
      /* display: flex; */
      width: 70%;
      /* justify-content: center; */
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
      width: 100%;
      flex-direction: column;
      /* justify-content: flex-start; */
      /* align-items: center; */
      input, button {
        font-size: 1.1rem;
        padding: .8rem 1rem;
        border: none;
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
    ul {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      width: 90%;
      li {
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        /* margin: 10px 0; */
        /* padding: 5px 7px; */
        margin-bottom: 15px;
        padding: 4px 7px;
        word-wrap: break-word;
      }
    }
  }
  @media screen and (max-width:760px) {
    grid-template-columns: 1fr;
    form {
      /* display: flex; */
      width: 100%;
      /* justify-content: center; */
    }
    .row-item .div {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      width: 100%;
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
  }
`
export default Row
