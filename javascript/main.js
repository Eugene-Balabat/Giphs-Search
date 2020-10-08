/* 3. Show me the GIFs */
function pushToDOM(input) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0ZJRRFPcofu6YQDDqU6ghrleugGmYsKM&q=${input}&limit=25&offset=0&rating=g&lang=ru`;
  const conteiner = document.querySelector('.js-container');
  const gifslink = new Array(0);

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  conteiner.innerHTML = '';

  GiphyAJAXCall.addEventListener('load', (data) => {
    const res = JSON.parse(data.target.response);

    res.data.forEach((element) => {
      const titleimage = element.title;

      if (gifslink.indexOf(titleimage) === -1) {
        const imageurl = element.images.original.webp;
        const contenblock = document.createElement('div');

        contenblock.innerHTML = `<a href = ${imageurl} target = "_blank"> <image src = ${imageurl} class = "image"> </a>`;

        conteiner.appendChild(contenblock).classList.add('container-image');
        gifslink.push(titleimage);
      } // else console.log('sd');
    });
  });
}

/* 1. Grab the input value */

document.querySelector('.js-userinput').addEventListener('keyup', () => {
  pushToDOM(document.querySelector('input').value);
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.js-userinput').value = null;
});
