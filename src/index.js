import axios from 'axios';

// console.log('hello')

document.addEventListener(
  'DOMContentLoaded',
  function onDOMContentLoaded(event) {
    // const BASE_URL = 'https://api.themoviedb.org/3';
    // const API_KEY = 'f896ccabafb5d2939071b9f1aa9e42c1';

    const video = document.querySelector('.video');
    const TrailerBtn = document.querySelector('.btn-tr');
    const inputID = document.querySelector('.input-id');

    inputID.addEventListener('input', onSearchTrailer);
    TrailerBtn.addEventListener('click', playTrailer);
    TrailerBtn.setAttribute('disabled', true);
    

    function onSearchTrailer(e) {
      const searchId = Number(e.target.value);
      let respArr = [];

      fetchTrailer(searchId).then(resp => {
        console.log('resp', resp.data);
        console.log(resp.data.results[0].key);

        respArr = resp.data.results;
        console.log(respArr);

        for (let i = 0; i < respArr.length; i += 1) {
          if (respArr[i].type === 'Trailer' && respArr[i].official) {
            console.log(respArr[i].key);
            const videId = respArr[i].key;
            console.log(videId);
            TrailerBtn.setAttribute('disabled', false);
            playTrailer(videId);
          }
        }
      });
    }

    function playTrailer(key) {    
      console.log(`https://www.youtube.com/embed/${key}?autoplay=1`);
      video.insertAdjacentHTML(
        'afterbegin',
        `<iframe src="https://www.youtube.com/embed/${key}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      );
    }


    async function fetchTrailer(searchId) {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${searchId}/videos?api_key=f896ccabafb5d2939071b9f1aa9e42c1&language=en-US`
        );
        return response;
      } catch (err) {
        console.error(err);
      }
    }
  },
  false
);
