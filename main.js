// Search
function toggleSearch() {
  var searchInput = document.getElementById("search-input");
  var searchButton = document.getElementById("search-button");
  
  if (searchInput.style.display === "none") {
    searchInput.style.display = "inline-block";
    searchButton.style.display = "inline-block";
  } else {
    searchInput.style.display = "none";
    searchButton.style.display = "none";
  }
}

function search() {
  var searchInput = document.getElementById("search-input").value;
  
  // Perform search logic here
  console.log("Searching for: " + searchInput);
}

// ======================================================== //

// Sub-menu

document.addEventListener("DOMContentLoaded", function() {
  var menuItem = document.querySelector("li");
  menuItem.addEventListener("click", function() {
    var subMenu = this.querySelector(".sub-menu");
    subMenu.style.display = (subMenu.style.display === "block") ? "none" : "block";
  });
});

// ======================================================== //


// Navbar 
function toggleMenu() {
  let menu = document.getElementById('menu-0');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function closeMenu() {
  document.getElementById('menu-0').style.display = 'none';
  document.getElementById('submenu1').style.display = 'none';
  document.getElementById('submenu2').style.display = 'none';
  currentMenu = null; 
}

function openSubMenu(submenuId) {
  let submenu = document.getElementById(submenuId);
  submenu.style.display = 'block';
  currentMenu = submenuId; 
}

function goBack() {
  if (currentMenu) {
    document.getElementById(currentMenu).style.display = 'none';
    currentMenu = null; 
  }
}


// ======================================================== //

function openSubMenu(submenuId) {
  let submenu = document.getElementById(submenuId);
  let mainMenu = document.getElementById('menu-0');

  if (submenu && mainMenu) {
    mainMenu.style.display = 'none'; 
    submenu.style.display = 'block';
    currentMenu = submenuId;
  }
}

function goBack() {
  if (currentMenu) {
    let submenu = document.getElementById(currentMenu);
    let mainMenu = document.getElementById('menu-0');

    if (submenu && mainMenu) {
      submenu.style.display = 'none';
      mainMenu.style.display = 'block'; 
      currentMenu = null;
    }
  }
}

// ======================================================== //




// Slider 

document.addEventListener('DOMContentLoaded', function () {
  let  images = document.querySelectorAll('.slider img');
  let  numbersContainer = document.querySelector('.numbers');

  images.forEach(function (image, index) {

    var number = document.createElement('div');
    number.textContent = index + 1;
    number.classList.add('number');
    number.addEventListener('click', function () {
      showImage(index);
    });

  
    numbersContainer.appendChild(number);
  });


  showImage(0);

  function showImage(index) {
   
    images.forEach(function (image) {
      image.classList.remove('active');
    });
    images[index].classList.add('active');

   
    var numbers = document.querySelectorAll('.number');
    numbers.forEach(function (number) {
      number.classList.remove('active');
    });
    numbers[index].classList.add('active');
  }
});

// ============================================== //

// Navbar 
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;
const scrollImage = document.querySelector('.scroll-image'); // Reference to the element with the scroll-image class

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
    scrollImage.style.display = 'block';  // Show the image
  } else {
    navbar.classList.remove("sticky");
    scrollImage.style.display = 'none';  // Hide the image
  }
}

window.onscroll = function() {
  myFunction();
};
