function Home() {
  return (
    <>
      <div className="bg-ingigo-900 flex justify-center">
        <div className="container grid grid-color-2 text-whrite">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5x1 font-bold">Seja Bem Vinde!</h2>
            <p className="text-x1">Expresse aqui seus pensamentos e opniões</p>
            <div className="flex justify-around gap-4">
              <div className="rounded text-white border-white border-soolid border-2 py-2 px-4">
                Nova Postagem
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="http://i.imgur.com/fyfri1v.png"
              alt="Imagem Pagina Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
