import wave from "../../assets/onda-frequencia.svg";

export default function DecorativeWave() {
  return (
    <div className="wave-wrap" aria-hidden="true">
      <img src={wave} alt="" width="1200" height="200" />
    </div>
  );
}
