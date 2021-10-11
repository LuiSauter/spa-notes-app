import styled from 'styled-components'

const Hero = styled.div`
  margin: 40px 0 ;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: 20px;
  .hero-item {
    /* max-width: 500px; */
    min-width: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #00ADB5;
    transition: transform 1s;
    &:hover {
      transform: scale(1.1);
    }

    a {
      text-decoration-line: none;
    }
    p {
      color: #ccc;
      &:hover {
        color: #00ADB5;
      }
    }
    /* p {
      color: #00ADB5;
    } */
    i {
      font-size: 5rem;
      margin-bottom: 15px;
      /* min-width: 200px; */
    }
  }
`

export default Hero
