import "./FooterStyles.css"

const Footer = () => {
  return(
    <div className="footer">
        <div>
          <h1>Vista</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github-square"></i>
          </a>
        </div>
      </div>

  )
}

export default Footer