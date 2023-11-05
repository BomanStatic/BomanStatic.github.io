const themeBtn = document.querySelector("#theme");
const themeIcon = document.querySelector("#themeIcon");
const html = document.querySelector("html");
let dark = true;
themeBtn.addEventListener("click", (e) => {
    dark = !dark;
    dark
        ? (html.setAttribute("data-theme", "dark"), themeIcon.setAttribute("icon", "line-md:sunny-filled-loop-to-moon-filled-transition"))
        : (html.setAttribute("data-theme", "light"), themeIcon.setAttribute("icon", "line-md:moon-filled-to-sunny-filled-transition"));
});
