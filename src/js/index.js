function toggleNavbar() {
  const navItems = document.getElementById("navItems");
  navItems.classList.toggle("hidden");

  if (navItems.classList.contains("hidden")) {
    navItems.classList.remove("slide-up");
  } else {
    navItems.classList.add("slide-up");
  }
}

document.getElementById("navbarBtn").addEventListener("click", toggleNavbar);


