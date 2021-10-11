import TechConteiner from './TechConteiner'

function Technologies () {
  return (
    <TechConteiner>
      <div className='tech-item'>
        <p className='js'><i class='fab fa-js-square' /></p>
      </div>
      <div className='tech-item'>
        <p className='react'><i class='fab fa-react' /></p>
      </div>
      <div className='tech-item'>
        <p className='node'><i class='fab fa-node' /></p>
      </div>
      {/* <i class='fas fa-database' /> */}
      <div className='tech-item'>
        <p className='mongo'><i class='fab fa-envira' /></p>
      </div>
      <div className='tech-item'>
        <p className='html'><i class='fab fa-html5' /></p>
      </div>
      <div className='tech-item'>
        <p className='css'><i class='fab fa-css3-alt' /></p>
      </div>
    </TechConteiner>
  )
}

export default Technologies
