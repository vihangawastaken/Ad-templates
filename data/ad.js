
localStorage.setItem('isAdClosed', "false");
const adContainer = document.getElementById('ad');
function adClose() {
    localStorage.setItem('isAdClosed', "true");
    /*adContainer.style.display = "none";*/
    adContainer.style.display = "none";

}

function gotoLink() {
  window.location.search = "TEST";
}