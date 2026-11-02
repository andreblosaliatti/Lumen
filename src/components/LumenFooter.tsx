import logo from "../../assets/logo-lumen-principal.webp";

export default function LumenFooter() {
  return (
    <footer className="footer">
      <img
        src={logo}
        alt=""
        width="1115"
        height="722"
        loading="lazy"
        className="footer-logo"
      />
      <p>Seu Nome, Uma Criação.</p>
      <a className="footer-email" href="mailto:contato@lumendnanominal.com.br">
        contato@lumendnanominal.com.br
      </a>
      <span>© {new Date().getFullYear()} LUMEN — DNA Nominal</span>
    </footer>
  );
}
