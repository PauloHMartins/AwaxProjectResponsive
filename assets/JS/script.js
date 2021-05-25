function mudar() {
    let sliderss = document.getElementById('sliders');
    if (sliderss.classList.contains('.mudar') == false) {
       sliderss.style.marginLeft = "0vw";
       document.getElementById('pointer').style.backgroundColor = "#b28756";
       document.getElementById('pointer1').style.backgroundColor = "#000";
       document.getElementById('pointer2').style.backgroundColor = "#000";

    }
}
function mudar1() {
    let sliderss = document.getElementById('sliders');
    if (sliderss.classList.contains('.mudar1') == false ) {
        sliderss.style.marginLeft = "-100vw";
        document.getElementById('pointer1').style.backgroundColor = "#b28756";
        document.getElementById('pointer').style.backgroundColor = "#000";
        document.getElementById('pointer2').style.backgroundColor = "#000";
    }
}
function mudar2() {
    let sliderss = document.getElementById('sliders');
    if (sliderss.classList.contains('.mudar2') == false ) {
        sliderss.style.marginLeft = "-200vw";
        document.getElementById('pointer2').style.backgroundColor = "#b28756";
        document.getElementById('pointer').style.backgroundColor = "#000";
        document.getElementById('pointer1').style.backgroundColor = "#000";

    }
}