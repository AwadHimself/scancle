
function home() { window.open("home%20page.html"   , )  }
  
function scrollWin() { window.open("profile.html"   , "_self") }
  function fun() { window.open("scan.html"   , "_self") ; }

  function logout() { window.open("login%20page.html" , "_self")  } 














function startScan() {
    // Hide the form container
    document.getElementById('form-container').style.display = 'none';

    // Show the animation
    document.getElementById('animation-container').style.display = 'block';

    // After 7 seconds, hide the animation and show the form again
    setTimeout(function() {
        document.getElementById('animation-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    }, 7000);
}
function startScan() {
    // Hide the form and show the loading animation
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('loading-animation').style.display = 'block';

    // After 5 seconds, show the post-scan form
    setTimeout(function() {
        document.getElementById('loading-animation').style.display = 'none';
        document.getElementById('post-scan').style.display = 'block';
    }, 10000);
}

function downloadReport() {
    alert("Downloading report...");
}

function reviewReport() {
    window.location.href = "rebort.html";;
}

function newScan() {
    // Hide the post-scan form and show the original form again
    document.getElementById('post-scan').style.display = 'none';
    document.getElementById('form-container').style.display = 'block';

    // Clear form inputs if necessary
    document.querySelector('.ip-input').value = '';
    document.querySelector('.toggle-switch input').checked = false;
    document.querySelector('.dropdown').selectedIndex = 0;
}
