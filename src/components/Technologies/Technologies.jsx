import TechConteiner from './TechConteiner'

function Technologies () {
  return (
    <TechConteiner>
      <div className='tech-item'>
        <p className='js'><i className='fab fa-js-square' /></p>
      </div>
      <div className='tech-item'>
        <p className='react'><i className='fab fa-react' /></p>
      </div>
      <div className='tech-item'>
        <p className='node'><i className='fab fa-node' /></p>
      </div>
      {/* <i className='fas fa-database' /> */}
      <div className='tech-item'>
        <p className='mongo'><i className='fab fa-envira' /></p>
      </div>
      <div className='tech-item'>
        <p className='html'><i className='fab fa-html5' /></p>
      </div>
      <div className='tech-item'>
        <p className='css'><i className='fab fa-css3-alt' /></p>
      </div>
    </TechConteiner>
  )
}

export default Technologies
