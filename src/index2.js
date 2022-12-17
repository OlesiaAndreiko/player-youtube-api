const video = document.querySelector('.video');
const TrailerBtn = document.querySelector('.btn-tr');
TrailerBtn.addEventListener('click', playTrailer);

function playTrailer() {

  key = 'vtfwgaHD5_w'

  console.log(`https://www.youtube.com/embed/${key}?autoplay=1`)
video.insertAdjacentHTML('afterbegin', `<iframe src="https://www.youtube.com/embed/${key}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
}