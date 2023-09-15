/**
 * Kitsu API
 * No modificar ni agregar código en este archivo.
 */

const getAllAnimesUrl = `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=2&fields[anime]=updatedAt,titles,averageRating,posterImage,coverImage`;
const KitsuAPI = {
  getAllAnimes: async function () {
    return new Promise((resolve, reject) => {
      const timeout = (Math.random() + 1) * 1000;
      setTimeout(() => {
        if (Math.random() <= 0.2) {
          return reject("Error from KitsuAPI, Try Again!");
        } else {
          fetch(getAllAnimesUrl)
            .then((res) => res.json())
            .then((data) => {
              resolve(data.data);
            });
        }
      }, timeout);
    });
  },
};

export default KitsuAPI;
