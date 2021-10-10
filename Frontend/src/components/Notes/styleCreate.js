import styled from 'styled-components'

const Div = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
    border-radius: 0.3rem;
    background-color: #42adb5;
    /* color: #fff; */
  }
  /* .ktvMaq form button {
    background-color: #00ADB5;
    padding: .5rem 0rem;
  } */
  h3 {
    margin-bottom: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 500px;
    select, input {
      font-size: 1.2rem;
      color: #14202b;
      width: 100%;
      border: 1px solid #14202b;
      /* border: none; */
      box-shadow: 0px 0px 3px .2px #14202b;
      border-radius: 7px;
      outline: none;
      margin-bottom: 10px;
      padding: .5rem .4rem;
      :focus {
        border: none;
        outline: 3px solid #00ADB5;
      }
    }
    button {
      background-color: #00ADB5;
      padding: .5rem 1.5rem;
      border-radius: 7px;
      &:active {
        background-color: #00ADB5aa;
      }
    }
    input {
      word-wrap: break-word;
    }
  }
`
export default Div
