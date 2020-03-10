import "./test.scss";

document.querySelector(".button").addEventListener("click", download);

function download() {
    setTimeout('document.location.href="./../Bislite.zip";', 1000);
    // document.location.href = "./../favicon.ico";
}