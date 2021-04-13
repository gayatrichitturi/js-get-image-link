// Create a function that takes in a search keyword and returns a URL of image.
// Then modify the function a bit and modify it to also accept custom resoultions

function searchImage(search){
  return `https://source.unsplash.com/500x500/?${search}`;
}
// https://source.unsplash.com/1600x900/?nature,water

let userSearch = searchImage("coffee");

console.log(userSearch);