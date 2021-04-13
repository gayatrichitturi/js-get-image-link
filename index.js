// Create a function that takes in a search keyword and returns a URL of image.
// Then modify the function a bit and modify it to also accept custom resoultions.

// Then make a second version of the function that takes in the search parameter, 
// the resoultion as well as the number of images we want, 
// so that we can have any number of images

// searchImage(girl,500x500, 3) = an array of 3 images with resoultion 

function searchImage(search, resoultion, numberOfImages){
        let searchResult = `https://source.unsplash.com/${resoultion}/?${search}`;
        const imagesArray = [];
        for(let i=1; i <= numberOfImages; i++){
            imagesArray.push(searchResult);
        }
        return imagesArray;
}
// https://source.unsplash.com/1600x900/?nature,water

let userSearch = searchImage("coffee", "500x500", 3);

console.log(userSearch);