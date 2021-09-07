const themeToggle = document.getElementById("toggle");
const icon = document.querySelector(".icon")

themeToggle.addEventListener("change", changeTheme);

function changeTheme(){
    if(this.checked){
        document.documentElement.setAttribute("data-theme", "dark");

        // change the icon
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }else{
        document.documentElement.setAttribute("data-theme", "light");
        // change the icon
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}