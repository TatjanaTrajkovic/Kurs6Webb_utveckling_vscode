/*
https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
 */
const elArticle = document.querySelector("#myArticle");

function toggleFunction() {

    if (elArticle.style.display === "none") {
        elArticle.style.display = "block";
    } else {
        elArticle.style.display = "none";
    }
}
