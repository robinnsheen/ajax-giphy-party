"use strict";

const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
/* prevent refreshing, add a gif from gify api, and append to DOM*/
async function submitHandler(evt) {
  evt.preventDefault();

  let gif = await getJson();

  console.log(gif.data);
  console.log(gif.data.data);

  let gifHtml = createHtml(gif);

  $('#gifs').append($(gifHtml));
}

/** Get's the input value, returns JSON object with the input value searched from giphy.com */
async function getJson() {
  const q = $("#name").val();
  let gif = await axios.get("http://api.giphy.com/v1/gifs/search",
    { params: { "api_key": API_KEY, q } });
  return gif;
}

/** Takes in a json object, gets the url for the gif, returns html in an img tag */
function createHtml(json) {
  console.log(json);
  const gifUrl = json.data.data[0].images.original.url;
  const gifHtml = `<img src="${gifUrl}"/>`;
  console.log(gifHtml);
  return gifHtml;
}

/* prevent refreshing, remove all gifs from gifs div*/
function removeGif(evt) {
  evt.preventDefault();
  $("#gifs").empty();
}

$("#submit").on("click", submitHandler);
$("#remove").on("click", removeGif);
