function getUrlParam(param) {
    var urlParams = new URLSearchParams(window.location.search);
    
    return urlParams.get(param);
}

let sm_url = getUrlParam('url');
let confirmed_url = "/";
/*
if (sm_url == "facebook") {
    confirmed_url = "https://facebook.com";
    document.getElementById('sm-page-name').innerText = "Facebook Page"
}*/

switch (sm_url) {
    case "facebook":
        confirmed_url = "/facebook";
        document.getElementById('sm-page-name').innerText = "Please wait while we cofirim your connection security and redirect you to our Facebook Page"
      break;
    case "twitter":
   
    confirmed_url = "/twitter";
    document.getElementById('sm-page-name').innerText = "Please wait while we cofirim your connection security and redirect you to our Twitter Page";
    break;
    case "linkedin":
        confirmed_url = "/linkedin";
        document.getElementById('sm-page-name').innerText = "Please wait while we cofirim your connection security and redirect you to our LinkedIn Page"
      break;
      case "discord":
        confirmed_url = "/discord";
        document.getElementById('sm-page-name').innerText = "Please wait while we cofirim your connection security and redirect you to our Disocrd Server Join"
        break;/*
        case "discord.js":
          luaTutorials.style.display = 'contents';
          nothingToShow.style.display = 'none';
          break;
    case "ALL":
      htmlTutorials.style.display = 'contents';
      jsTutorials.style.display = 'contents';
      cssTutorials.style.display = 'contents';
      luaTutorials.style.display = 'contents';
      nothingToShow.style.display = 'none';
      jsTutorialTwo.style.display = 'contents';
      break;*/
    default:
        confirmed_url = "/";
        document.getElementById('sm-page-name').innerText = "Sorry the page you reqested is not available. You will be redirected main page."
        document.getElementById('sm-page-name').style.color = "red";
  }

  if (confirmed_url == "/") {
    setTimeout(() => {
      window.location.reload(confirmed_url);
    }, 2000);
  }else {
setTimeout(() => {
    window.location.replace(confirmed_url);
}, 10000);
  }

  localStorage.setItem('isAdClosed', "false");
const adContainer = document.getElementById('ad');
function adClose() {
    localStorage.setItem('isAdClosed', "true");
    /*adContainer.style.display = "none";*/
    adContainer.style.opacity = "0";

}

function gotoLink() {
  window.location.search = "TEST";
}