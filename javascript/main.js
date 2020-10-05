/* 3. Show me the GIFs */
function pushToDOM(input) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=0ZJRRFPcofu6YQDDqU6ghrleugGmYsKM&q=${input}&limit=25&offset=0&rating=g&lang=ru`;
  const conteiner = document.querySelector('.js-container');

  const GiphyAJAXCall = new XMLHttpRequest();
  GiphyAJAXCall.open('GET', url);
  GiphyAJAXCall.send();

  conteiner.innerHTML = '';

  GiphyAJAXCall.addEventListener('load', (data) => {
    const res = JSON.parse(data.target.response);

    res.data.forEach((element) => {
      const imageurl = element.images.fixed_height.url;

      conteiner.innerHTML += `<image src = ${imageurl} class = "container-image">`;
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
