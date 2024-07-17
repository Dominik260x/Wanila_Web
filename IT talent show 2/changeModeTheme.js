const switchButton = document.querySelector("#change-mode");
let theme = localStorage.getItem("theme");

switchButton.addEventListener("click", () => {
  if (theme === "dark") {
    document.querySelector("nav").classList.remove("dark");
    document.querySelector("nav ul").classList.remove("dark");
    document.querySelector("nav #bookmarks-element-1").classList.remove("dark");
    document.querySelector("nav #bookmarks-element-2").classList.remove("dark");
    document.querySelector("nav #bookmarks-element-3").classList.remove("dark");
    document.querySelector("nav #bookmarks-element-4").classList.remove("dark");
    document.querySelector("nav #line-1").classList.remove("dark");
    document.querySelector("nav #line-2").classList.remove("dark");
    document.querySelector("nav #line-3").classList.remove("dark");
    document.querySelector("nav #change-mode").classList.remove("dark");
    document.querySelector("nav #change-mode-dot").classList.remove("dark");
    document.querySelector("header").classList.remove("dark");
    document.querySelector("header #slide-1").classList.remove("dark");
    document.querySelector("header #slide-2").classList.remove("dark");
    document.querySelector("header #slide-3").classList.remove("dark");
    document.querySelector("section").classList.remove("dark");
    document.querySelector("section article").classList.remove("dark");
    document.querySelector("footer").classList.remove("dark");

    document.querySelector("nav").classList.add("light");
    document.querySelector("nav #bookmarks-element-1").classList.add("light");
    document.querySelector("nav #bookmarks-element-2").classList.add("light");
    document.querySelector("nav #bookmarks-element-3").classList.add("light");
    document.querySelector("nav #bookmarks-element-4").classList.add("light");
    document.querySelector("nav #line-1").classList.add("light");
    document.querySelector("nav #line-2").classList.add("light");
    document.querySelector("nav #line-3").classList.add("light");
    document.querySelector("nav ul").classList.add("light");
    document.querySelector("nav #change-mode").classList.add("light");
    document.querySelector("nav #change-mode-dot").classList.add("light");
    document.querySelector("header").classList.add("light");
    document.querySelector("header #slide-1").classList.add("light");
    document.querySelector("header #slide-2").classList.add("light");
    document.querySelector("header #slide-3").classList.add("light");
    document.querySelector("section").classList.add("light");
    document.querySelector("section article").classList.add("light");
    document.querySelector("footer").classList.add("light");
    theme = "light";
  } else {
    document.querySelector("nav").classList.remove("light");
    document
      .querySelector("nav #bookmarks-element-1")
      .classList.remove("light");
    document
      .querySelector("nav #bookmarks-element-2")
      .classList.remove("light");
    document
      .querySelector("nav #bookmarks-element-3")
      .classList.remove("light");
    document
      .querySelector("nav #bookmarks-element-4")
      .classList.remove("light");
    document.querySelector("nav #line-1").classList.remove("light");
    document.querySelector("nav #line-2").classList.remove("light");
    document.querySelector("nav #line-3").classList.remove("light");
    document.querySelector("nav ul").classList.remove("light");
    document.querySelector("nav #change-mode").classList.remove("light");
    document.querySelector("nav #change-mode-dot").classList.remove("light");
    document.querySelector("header").classList.remove("light");
    document.querySelector("header #slide-1").classList.remove("light");
    document.querySelector("header #slide-2").classList.remove("light");
    document.querySelector("header #slide-3").classList.remove("light");
    document.querySelector("section").classList.remove("light");
    document.querySelector("section article").classList.remove("light");
    document.querySelector("footer").classList.remove("light");

    document.querySelector("nav").classList.add("dark");
    document.querySelector("nav #bookmarks-element-1").classList.add("dark");
    document.querySelector("nav #bookmarks-element-2").classList.add("dark");
    document.querySelector("nav #bookmarks-element-3").classList.add("dark");
    document.querySelector("nav #bookmarks-element-4").classList.add("dark");
    document.querySelector("nav #line-1").classList.add("dark");
    document.querySelector("nav #line-2").classList.add("dark");
    document.querySelector("nav #line-3").classList.add("dark");
    document.querySelector("nav ul").classList.add("dark");
    document.querySelector("nav #change-mode").classList.add("dark");
    document.querySelector("nav #change-mode-dot").classList.add("dark");
    document.querySelector("header").classList.add("dark");
    document.querySelector("header #slide-1").classList.add("dark");
    document.querySelector("header #slide-2").classList.add("dark");
    document.querySelector("header #slide-3").classList.add("dark");
    document.querySelector("section").classList.add("dark");
    document.querySelector("section article").classList.add("dark");
    document.querySelector("footer").classList.add("dark");
    theme = "dark";
  }

  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.querySelector("nav").classList.add("dark");
  document.querySelector("nav #bookmarks-element-1").classList.add("dark");
  document.querySelector("nav #bookmarks-element-2").classList.add("dark");
  document.querySelector("nav #bookmarks-element-3").classList.add("dark");
  document.querySelector("nav #bookmarks-element-4").classList.add("dark");
  document.querySelector("nav #line-1").classList.add("dark");
  document.querySelector("nav #line-2").classList.add("dark");
  document.querySelector("nav #line-3").classList.add("dark");
  document.querySelector("nav ul").classList.add("dark");
  document.querySelector("nav #change-mode").classList.add("dark");
  document.querySelector("nav #change-mode-dot").classList.add("dark");
  document.querySelector("header").classList.add("dark");
  document.querySelector("header #slide-1").classList.add("dark");
  document.querySelector("header #slide-2").classList.add("dark");
  document.querySelector("header #slide-3").classList.add("dark");
  document.querySelector("section").classList.add("dark");
  document.querySelector("section article").classList.add("dark");
  document.querySelector("footer").classList.add("dark");
}

if (theme === "light") {
  document.querySelector("nav").classList.add("light");
  document.querySelector("nav #bookmarks-element-1").classList.add("light");
  document.querySelector("nav #bookmarks-element-2").classList.add("light");
  document.querySelector("nav #bookmarks-element-3").classList.add("light");
  document.querySelector("nav #bookmarks-element-4").classList.add("light");
  document.querySelector("nav #line-1").classList.add("light");
  document.querySelector("nav #line-2").classList.add("light");
  document.querySelector("nav #line-3").classList.add("light");
  document.querySelector("nav ul").classList.add("light");
  document.querySelector("nav #change-mode").classList.add("light");
  document.querySelector("nav #change-mode-dot").classList.add("light");
  document.querySelector("header").classList.add("light");
  document.querySelector("header #slide-1").classList.add("light");
  document.querySelector("header #slide-2").classList.add("light");
  document.querySelector("header #slide-3").classList.add("light");
  document.querySelector("section").classList.add("light");
  document.querySelector("section article").classList.add("light");
  document.querySelector("footer").classList.add("light");
}
