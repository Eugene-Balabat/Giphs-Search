/* 1. Grab the input value */

document.querySelector('.js-userinput').addEventListener('keyup', function () {
     pushToDOM(document.querySelector('input').value);
});

document.addEventListener('DOMContentLoaded', function () {
     document.querySelector('.js-userinput').value = null;
});

/* 3. Show me the GIFs */
function pushToDOM(input) {
     var url =
          'https://api.giphy.com/v1/gifs/search?api_key=0ZJRRFPcofu6YQDDqU6ghrleugGmYsKM&q=' +
          input +
          '&limit=25&offset=0&rating=g&lang=ru';
     var conteiner = document.querySelector('.js-container');

     var GiphyAJAXCall = new XMLHttpRequest();
     GiphyAJAXCall.open('GET', url);
     GiphyAJAXCall.send();

     conteiner.innerHTML = '';

     GiphyAJAXCall.addEventListener('load', function (data) {
          var res = JSON.parse(data.target.response);

          res.data.forEach((element) => {
               var imageurl = element.images.fixed_height.url;

               conteiner.innerHTML += '<image src = ' + imageurl + ' class = "container-image">';
          });
     });
}
