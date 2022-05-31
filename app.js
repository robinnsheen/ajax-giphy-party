"use strict";

async function submitHandler(evt) {
  evt.preventDefault();
  const nameVal = $("#name").val();
  let gif = await axios.get("http://api.giphy.com/v1/gifs/search",
                            {params: {"api_key":"MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym", "q": nameVal}});
  console.log(gif.data);

}

$("#submit").on("click", submitHandler);
