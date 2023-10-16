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


const dropdownToggle = document.querySelector(".sect");
const dropdownContent = document.querySelector(".mobile-dropdown-content");
const chevronIcon = document.querySelector(".arrow-down");

// Add a click event listener to the dropdown toggle
dropdownToggle.addEventListener("click", function () {
  if (dropdownContent.style.display === "flex") {
    // If content is visible, hide it and change the icon
    dropdownContent.style.display = "none";
    chevronIcon.classList.remove("fa-chevron-up");
    chevronIcon.classList.add("fa-chevron-down");
  } else {
    // If content is hidden, show it and change the icon
    dropdownContent.style.display = "flex";
    chevronIcon.classList.remove("fa-chevron-down");
    chevronIcon.classList.add("fa-chevron-up");
  }
});