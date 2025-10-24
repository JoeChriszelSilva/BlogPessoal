interface homeProps {
  titulo: string;
  texto: string;
}

function Home(promps: homeProps) {
  return (
    <div>
      <h2>{promps.titulo}</h2>
      <p>{promps.texto}</p>
    </div>
  );
}

export default Home;
