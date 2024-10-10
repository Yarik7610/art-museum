import logoAlt from "../assets/logo-alt.svg"
import modsen from "../assets/modsen.svg"

export const Footer = () => {
  return (
    <footer>
      <div className="footer__content">
        <img src={logoAlt} alt="Museum of art" />
        <img src={modsen} alt="Modsen" />
      </div>
    </footer>
  )
}
