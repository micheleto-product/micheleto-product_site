function toggleSubMenu(className) {
  const subMenu = document.querySelector(`.${className}`);
  const allSubMenus = document.querySelectorAll('.sub-menu-produtos');

  allSubMenus.forEach(menu => {
    if (menu !== subMenu) {
      menu.style.display = 'none';
    }
  });

  subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}
  
  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    
    if (sidebar.style.width === '0px' || !sidebar.style.width) {
      sidebar.style.width = '33.33%';
    } else {
      sidebar.style.width = '0';
    }
  } 

  document.addEventListener("DOMContentLoaded", function () {
    const categoryButtons = document.querySelectorAll(".category-button");
    const products = document.querySelectorAll(".product");

    categoryButtons.forEach((button) => {
        button.addEventListener("click", function () {
            categoryButtons.forEach((btn) => btn.classList.remove("selected"));
            button.classList.add("selected");

            const selectedCategory = button.getAttribute("data-category");

            products.forEach((product) => {
                product.style.display = "block"; // Exibe todos os produtos inicialmente

                if (selectedCategory !== "todos" && !product.classList.contains(selectedCategory)) {
                    product.style.display = "none"; // Esconde produtos que não pertencem à categoria selecionada
                }
            });
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll(".star");

  stars.forEach((star) => {
    star.addEventListener("mouseover", function () {
      const value = star.getAttribute("data-value");
      const product = star.closest(".product");
      const ratingValue = product.querySelector(".rating-value");
      ratingValue.textContent = value;
      highlightStars(product, value);
    });

    star.addEventListener("mouseout", function () {
      const product = star.closest(".product");
      const selectedValue = product.querySelector(".rating-value span").textContent;
      if (selectedValue === "0") {
        product.querySelector(".rating-value").textContent = "";
      }
      highlightStars(product, selectedValue);
    });

    star.addEventListener("click", function () {
      const value = star.getAttribute("data-value");
      const product = star.closest(".product");
      const ratingValue = product.querySelector(".rating-value span");
      ratingValue.textContent = value;
      highlightStars(product, value);
    });
  });

  function highlightStars(product, value) {
    const stars = product.querySelectorAll(".star");
    stars.forEach((star) => {
      if (star.getAttribute("data-value") <= value) {
        star.style.color = "gold";
      } else {
        star.style.color = "gray";
      }
    });
  }
});

document.querySelector('.enviar-button').addEventListener('click', function() {
  
 
  document.getElementById('email-input').style.border = '1px solid #ccc';
  });