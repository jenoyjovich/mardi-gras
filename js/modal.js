let picture = document.querySelectorAll('.lightbox');
let modal = document.querySelectorAll('.popupWrapper');
let closeUp = document.querySelector('.popupClose');

for (let i = 0; i < picture.length; i++) {
    picture[i].onclick = function (e) {
        modal = document.querySelector(e.target.getAttribute("href"));
        modal.style.display = "block";
    }
}
$(".popupClose").on("click", function () {
    modal.style.display = "none";
})
$(".popupWrapper").on("click", function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
})