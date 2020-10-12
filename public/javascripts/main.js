/* 3. Show me the GIFs */

function pushTo(input) {
  const url =
    // input && Boolean(input.trim())
    // ?
    `https://api.giphy.com/v1/gifs/search?api_key=0ZJRRFPcofu6YQDDqU6ghrleugGmYsKM&q=${input}&limit=27&offset=0&rating=r&lang=ru`;
  // : `https://api.giphy.com/v1/gifs/trending?api_key=0ZJRRFPcofu6YQDDqU6ghrleugGmYsKM&limit=27&offset=0&rating=g&lang=ru`;

  const conteiner = document.querySelector('.js-container');
  const gifslink = [];

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  conteiner.innerHTML = '';

  GiphyAJAXCall.addEventListener('load', (data) => {
    const res = JSON.parse(data.target.response);
    res.data.forEach((element) => {
      const giphid = element.id;

      if (!gifslink.includes(giphid)) {
        const contenblock = document.createElement('div');
        const imageurl = element.images.original.webp;
        const downloadurl = element.images.original.mp4;
        contenblock.innerHTML = `<a href = ${downloadurl} target = "_blank"> <image src = ${imageurl} class = "image"> </a>`;

        conteiner.appendChild(contenblock).classList.add('container-image');
        gifslink.push(giphid);
      }
    });
  });
}

/* 1. Grab the input value */

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.js-userinput').value = null;
  pushTo(document.querySelector('.js-userinput').value);
});

/* Waiting before shows result */

$('.js-userinput').typeWatch({
  captureLength: 1,
  wait: 500,
  callback(value) {
    pushTo(value);
  },
});
