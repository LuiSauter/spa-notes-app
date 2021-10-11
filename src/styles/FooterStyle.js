import styled from 'styled-components'

const FooterStyle = styled.div`
  position: absolute;
  bottom: 0;
  /* background-color: #14202b; */
  text-align: center;
  width: 100%;
  /* height: 40px; */
  padding: 2rem;
  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 1.3rem;
    .love {
      transition: transform .5s;
      transform: color .9s;
      color: #00ADB5;
      &:hover {
        transform: scale(1.1);
        color: #59dfee;
        filter: contrast(100px);
      }
    }
    & p {
      margin: 0 10px;
    }
    a {
      margin: 0 10px;
      &:hover {
        color: #00ADB5;
      }
    }
  }
`

export default FooterStyle
