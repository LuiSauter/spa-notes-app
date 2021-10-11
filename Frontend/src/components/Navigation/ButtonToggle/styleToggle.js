import styled from 'styled-components'

const Button = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin: .45rem;
  transition: transform 1s;
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  &:hover {
    transform: scale(1.2);
  }
  .moon, .sun {
    position: absolute;
    top: 0;
    right: 0;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    i {
      display: flex;
      padding: .55rem;
      color: #f0a502;
      font-size: 1.2rem;
      &:hover {
        color: #f0a502;
      }
    }
  }

  .moon-logo {
    opacity: 0;
    transform: translateY(20%) rotateZ(50deg);
    transition: all 1s ease-out;
  }

  .sun-logo {
    opacity: 1;
    transform: translateY(0) rotateZ(0deg);
    transition: all 1s ease-out;
  }

  .animate-hide-sun {
    opacity: 0;
    transform: translateY(20%) rotateZ(100deg);
  }

  .animate-show-moon {
    opacity: 1;
    transform: translateY(0%) rotateZ(0deg);
  }
`
export default Button
