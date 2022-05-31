"use strict";

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
