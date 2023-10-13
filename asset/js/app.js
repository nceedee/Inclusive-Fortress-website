const cancel = document.querySelector(".cancel");
const bar = document.querySelector(".bar");
const mobileNav = document.querySelector( ".mobile-nav" );

bar.addEventListener( "click", () =>
{
    mobileNav.style.display="block"
})

cancel.addEventListener("click", () => {
  mobileNav.style.display = "none";
});
