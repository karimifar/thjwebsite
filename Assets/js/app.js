function goResponsive() {
    var mainNav = document.getElementById("main-nav");
    if (mainNav.className === "mynavbar main-nav") {
        mainNav.className += " responsive";
    } else {
        mainNav.className = "mynavbar main-nav";
    }
}
// function showDropDown() {
//     var content = document.getElementById("ut-inst-drop-content");
//     if (content.className === "dropdown-content") {
//         content.className += " clicked-dropdown";
//     } else {
//         content.className = "dropdown-content";
//     }
// }