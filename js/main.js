console.log("Running")

function openpage(pageName) {
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].getElementsByClassName.display = "none;"
    }
    document.getElementById(pageName).style.display = "block";
}
document.getElementById("defaultOpen").click();