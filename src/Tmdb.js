// --------------------------------------------------------------------------------
//                          REQUEST API (TMDB)
// --------------------------------------------------------------------------------

const API_KEY = "8f6f58422d1de1ca1129d83f55c9a695";
const API_BASE = "https://api.themoviedb.org/3";

// -------------------------------------------------------------------------------
//                       Function fetch (JSON)
// -------------------------------------------------------------------------------

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// ------------------------------------------------------------------------------
//                             List of items
// ------------------------------------------------------------------------------

export default {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Netflix originals",
        items: await basicFetch(
          `/discover/tv?api_key=${API_KEY}&with_networks=213`
        ),
      },
      {
        slug: "trending",
        title: "Recommended for you",
        items: await basicFetch(
          `/trending/all/week?api_key=${API_KEY}&language=en-US`
        ),
      },
      {
        slug: "toprated",
        title: "Top rated",
        items: await basicFetch(
          `/movie/top_rated?api_key=${API_KEY}&language=en-US`
        ),
      },
      {
        slug: "action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=28`
        ),
      },
      {
        slug: "comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=35`
        ),
      },
      {
        slug: "horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=27`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=10749`
        ),
      },
      {
        slug: "documentary",
        title: "Documentary",
        items: await basicFetch(
          `/discover/movie?api_key=${API_KEY}&with_genres=99`
        ),
      },
    ];
  },

  // -----------------------------------------------------------------------------------
  //               Function: get informations about items
  // -----------------------------------------------------------------------------------
  getMovieInfo: async (movieId, type) => {
    let info = {};
    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFetch(
            `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
          );
          break;
        case "tv":
          info = await basicFetch(
            `/tv/${movieId}?language=en-US&api_key=${API_KEY}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
