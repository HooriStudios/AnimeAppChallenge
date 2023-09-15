/**
 * Anime Hook
 * No modificar ni agregar código en este archivo.
 */

import { useEffect, useState } from "react";
import * as AnimeService from "../../services/animeService";

const useAnime = () => {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getAllAnime = async () => {
    setLoading(true);
    AnimeService.getAll()
      .then((res) => {
        setAnime(res);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("ERROR:", err);
        setAnime([]);
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    getAllAnime();
  }, []);

  return {
    anime,
    loading,
    error,
    refresh: getAllAnime,
  };
};

export default useAnime;
