import FooterStyle from '../../styles/FooterStyle'

function Footer () {
  return (
    <FooterStyle>
      <div className='icons'>
        <p>sauterdev</p>
        <div className='love'><i class='fas fa-heart' /></div>
        <p>
          <a href='https://www.instagram.com/sauterdev/' target='_blank' rel='noreferrer'>
            <i class='fab fa-instagram' />
          </a>
          <a href='https://github.com/LuiSauter' target='_blank' rel='noreferrer'>
            <i class='fab fa-github-alt' />
          </a>
        </p>
      </div>
    </FooterStyle>
  )
}

export default Footer
