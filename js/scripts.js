//Function expression to select elements
const selectElement = (s) => document.querySelector(s);

//Open the menu on click
selectElement('.open').addEventListener('click', () => {
    selectElement('.nav-list').classList.add('active');
});

//Close the menu on click
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');
});

//Search-Button on Click
// selectElement('.search-icon').addEventListener('click', () =>{
//   if(selectElement('.nav-search-text-box').style.display==="none"){
//     selectElement('.nav-search-text-box').style.display="block";
//   }
//   else{
//     selectElement('.nav-search-text-box').style.display="none";
//   }
// });

//featured-items buttons
selectElement('.feature-men').addEventListener('click', () => {
    selectElement('.men-items').style.display = "block";
    selectElement('.women-items').style.display = "none";
    selectElement('.products-items').style.display = "none";
});

selectElement('.feature-women').addEventListener('click', () => {
    selectElement('.men-items').style.display = "none";
    selectElement('.women-items').style.display = "block";
    selectElement('.products-items').style.display = "none";
});

selectElement('.feature-products').addEventListener('click', () => {
    selectElement('.men-items').style.display = "none";
    selectElement('.women-items').style.display = "none";
    selectElement('.products-items').style.display = "block";
});

//banners-btns
selectElement('.circle-btn-1').addEventListener('click', () => {
    selectElement('.circle-btn-1').style.color = "green";
    selectElement('.circle-btn-2').style.color = "black";
    selectElement('.circle-btn-3').style.color = "black";
    selectElement('.banner-img1').style.display = "block";
    selectElement('.banner-img2').style.display = "none";
    selectElement('.banner-img3').style.display = "none";
});

selectElement('.circle-btn-2').addEventListener('click', () => {
    selectElement('.circle-btn-1').style.color = "black";
    selectElement('.circle-btn-2').style.color = "green";
    selectElement('.circle-btn-3').style.color = "black";
    selectElement('.banner-img1').style.display = "none";
    selectElement('.banner-img2').style.display = "block";
    selectElement('.banner-img3').style.display = "none";
});

selectElement('.circle-btn-3').addEventListener('click', () => {
    selectElement('.circle-btn-1').style.color = "black";
    selectElement('.circle-btn-2').style.color = "black";
    selectElement('.circle-btn-3').style.color = "green";
    selectElement('.banner-img1').style.display = "none";
    selectElement('.banner-img2').style.display = "none";
    selectElement('.banner-img3').style.display = "block";
});