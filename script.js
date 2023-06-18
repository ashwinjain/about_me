// Show about me page my default
document.getElementById("defaultOpen").style.display = "block";

// function to deal with tab onClicks

function openTabTest(thisId) {
    
    // get tabcontent elements
    var tabcontent = document.getElementsByClassName("tabcontent");

    // hide all tabcontent
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        document.getElementById(thisId).style.backgroundColor = "#2b3b54";
    }

    // change all tabs to orange
    var tabs = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.backgroundColor = "#FF5F05";
    }

    var tabName = thisId.replace("_button", "")
    
    document.getElementById(tabName).style.display = "block";
    document.getElementById(thisId).style.backgroundColor = "#2b3b54";

}