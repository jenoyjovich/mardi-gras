let mybutton = document.getElementById("goTop");
window.onscroll = () => {
    scrollFunction()
};

const scrollFunction = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        mybutton.style.display = "block"
    } else {
        mybutton.style.display = "none"
    }
}

const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

$("#goTop").on("click", topFunction)