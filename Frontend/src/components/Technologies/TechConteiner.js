import styled from 'styled-components'

const TechConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding: 2rem;
  .tech-item {
    /* width: 100%; */
    /* width: 100%; */
    font-size: 4.5rem;
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
