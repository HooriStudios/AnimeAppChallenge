import useAnime from "./core/hooks/useAnime";

import "./App.css";

function App() {
  // usa "anime", "loading" y "error" para mostrar los datos en la pantalla
  // incluye un mensaje de error si hay un error
  // incluye un mensaje de carga si está cargando

  const { anime, loading, error } = useAnime();

  return (
    <>
      <h1>Anime App</h1>
      <div className="App">
        {anime.map((anime) => (
          <AnimeCard 
            key={anime.id} 
            title={anime.title} 
            // ...
          />
        ))}
      </div>
    </>
  );
}

function AnimeCard({ title }){
  return (
    <div className="anime_card">
      {title}
    </div>
  )
};

export default App;