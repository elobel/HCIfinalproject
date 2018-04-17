var BMC = document.getElementById("BrynMawr");
var HC = document.getElementById("Haverford");
var nextLeavingTime = document.getElementById("nextLeavingTime");


BMC.onclick = function() {    
   // var day = new Date().getDay();
    //var time = new Date().getTime();
    nextLeavingTime.innerHTML = "hello!";
    BMC.innerHTML = "wowza!";
}


HC.onclick = function() {
  //  var day = new Date().getDay();
  //  var time = new Date().getTime();
    nextLeavingTime.innerHTML = "hello!";
    HC.innerHTML = "howdy!";
}




function openCollege(nm, collegeName) {
        // Declare all variables
        var i, tabContent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(collegeName).style.display = "block";
        nm.currentTarget.className += " active";
}


function openSchedule(dy, dySchedule) {
        // Declare all variables
        var i, tabContent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(dySchedule).style.display = "block";
        dy.currentTarget.className += " active";
}


