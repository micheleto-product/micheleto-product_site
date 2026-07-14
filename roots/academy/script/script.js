// --------------------------- Menu ----------------------------------

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
// --------------------------- Menu ----------------------------------

// ---------------------- Cursor ------------------------
    // Efeito de partículas no cursor para o site inteiro
    let canvas;
    let ctx;
    let particles = [];
    const mouse = { x: 0, y: 0 };
    let particleColor = 'rgba(0, 153, 204, 0.8)'; // Cor inicial: Azul cintilante escuro
    const colorChangeInterval = 10000; // Intervalo de mudança de cor em milissegundos

    function startParticles() {
        canvas = document.createElement('canvas');
        ctx = canvas.getContext('2d');
        canvas.style.position = 'fixed';
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);

        window.addEventListener('resize', () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        document.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        animate();
    }

    function Particle() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 1;
        this.speedX = (Math.random() * 1 - 0.5) / 3;
        this.speedY = (Math.random() * 1 - 0.5) / 3;
        this.color = particleColor; // Define a cor atual da partícula
    }

    Particle.prototype.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    };

    Particle.prototype.draw = function () {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };

    function handleParticles() {
        particles.push(new Particle());
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = particles[i].color;
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
            if (particles[i].size <= 0.2) {
                particles.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }

    startParticles();
// ---------------------- Cursor ------------------------


// Adiciona um pequeno atraso para o efeito de fade-in
window.onload = function() {
    setTimeout(function() {
        document.querySelector('.container').style.opacity = "1";
    }, 500);
}
