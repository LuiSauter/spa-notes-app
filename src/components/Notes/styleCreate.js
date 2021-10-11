import styled from 'styled-components'

const Div = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: 15px;
  border-radius: 10px;
  .react-datepicker__day--selected, .react-datepicker__day--in-selecting-range, .react-datepicker__day--in-range, .react-datepicker__month-text--selected, .react-datepicker__month-text--in-selecting-range, .react-datepicker__month-text--in-range, .react-datepicker__quarter-text--selected, .react-datepicker__quarter-text--in-selecting-range, .react-datepicker__quarter-text--in-range, .react-datepicker__year-text--selected, .react-datepicker__year-text--in-selecting-range, .react-datepicker__year-text--in-range {
    border-radius: 0.3rem;
    background-color: #42adb5;
  }
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
    label {
      text-align: left;
      width: 100%;
      padding: 0.3rem 0rem;
      font-size: 1.1rem;
      opacity: .7;
    }
    select, input {
      font-size: 1.2rem;
      color: #14202b;
      width: 100%;
      border: 1px solid #14202b;
      box-shadow: 0px 0px 3px .2px #14202b;
      border-radius: 7px;
      outline: none;
      margin-bottom: 12px;
      padding: .5rem .4rem;
      :focus {
        border: none;
        outline: 3px solid #00ADB5;
      }
    }
    button {
      background-color: #00ADB5;
      border-radius: 7px;
    }
    .btn button {
      background-color: #00ADB5;
      padding: .8rem 3rem;
      border-radius: 7px;
      width: 100%;
      margin-top: 25px;
      &:active {
        background-color: #00ADB5aa;
      }
    }
    .message-add {
      padding: .8rem .8rem 0 .8rem;
      color: #3e823d;
    }
    input {
      word-wrap: break-word;
    }
  }
`
export default Div
