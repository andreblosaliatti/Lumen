import logo from "../../assets/logo-lumen-principal.webp";

export default function LumenHeader() {
  return (
    <header className="flex flex-col items-center pt-9 sm:pt-12">
      <a
        className="logo-link"
        href="#inicio"
        aria-label="LUMEN — ir para o início"
      >
        <img
          className="brand-logo"
          src={logo}
          alt="LUMEN"
          width="1115"
          height="722"
        />
      </a>
    </header>
  );
}
