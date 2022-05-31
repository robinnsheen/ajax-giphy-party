"use strict";

/* prevent refreshing, add a gif from gify api, and append to DOM*/
async function submitHandler(evt) {
  evt.preventDefault();

  const nameVal = $("#name").val();
  let gif = await axios.get("http://api.giphy.com/v1/gifs/search",
    { params: { "api_key": "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", "q": nameVal } });

  console.log(gif.data);
  console.log(gif.data.data);

  const gifUrl = gif.data.data[0].images.original.url;
  const gifHtml = `<img src="${gifUrl}"/>`;

  console.log(gifUrl);

  $('#gifs').append($(gifHtml));
}

$("#submit").on("click", submitHandler);
$("#remove").on("click", removeGif);

/* prevent refreshing, remove all gifs from gifs div*/
function removeGif(evt) {
  evt.preventDefault();
  $("#gifs").empty();
}
