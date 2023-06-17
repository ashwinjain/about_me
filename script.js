// Show about me page my default
document.getElementById("defaultOpen").style.display = "block";

// function to deal with tab onClicks
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // get tabcontent elements
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";

}