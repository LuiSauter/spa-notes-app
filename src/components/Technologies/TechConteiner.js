import styled from 'styled-components'

const TechConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 2rem;
  width: 100%;
  .tech-item {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      font-size: 5rem;
    }
    .js {
      color: #F0A500
    }
    .react {
      color: #61dafb;
    }
    .node {
      color: #3e833d;
    }
    .mongo {
      color: #378d4d;
    }
    .html {
      color: #dd4d26;
    }
    .css {
      color: #2173f7;
    }
  }
`

export default TechConteiner
