import KitsuAPI from "../core/api/kitsu";

// Clase Anime
class Anime {
  constructor(id, title, rating, poster, cover) {
    this.id = id;
    this.title = title;
    this.rating = rating;
    this.poster = poster;
    this.cover = cover;
  }
}

// Función para cargar y parsear los datos de la API de Kitsu
// y devolver un array de objetos de la clase Anime
export async function getAll() {
  const res = await KitsuAPI.getAllAnimes();
  console.log("Original anime data", res);

  let animeData = [];

  // Parsea los datos de la API de Kitsu
  // y crea una instancia de la clase Anime por cada anime
  // y agregalos al array animeData



  console.log("Parsed anime data:", animeData);
  return animeData;
}
