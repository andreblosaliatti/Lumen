import { ArrowDown } from "lucide-react";

export default function LumenCTA() {
  return (
    <section id="contato" className="cta-section text-center">
      <span className="cta-star" aria-hidden="true">
        ✳
      </span>
      <p className="eyebrow">O EXTRAORDINÁRIO COMEÇA PELO SEU NOME</p>
      <h2>
        Toda identidade
        <br />
        merece <span>ser celebrada.</span>
      </h2>
      <a className="cta-button" href="#experiencias">
        <span>Descubra as experiências</span>
        <ArrowDown size={16} strokeWidth={1.7} aria-hidden="true" />
      </a>
    </section>
  );
}
