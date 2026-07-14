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
// ---------------------- Section Arquiteture ------------------------
document.addEventListener('DOMContentLoaded', function() {
    // Conteúdo dinâmico dos serviços
    const arquiteturaHome = [
        {
            title: 'Notícias',
            image: 'img/section-arquiteture/logo-ux-ser-arquiteture.png',
            description: 'Últimas notícias e tendências em UX para você.'
        },
        {
            title: 'Micheleto',
            image: 'img/section-arquiteture/logo-ux-ser-arquiteture.png',
            description: 'De especialista a consultor na área de UX'
        },
        {
            title: 'Serviços',
            image: 'img/section-arquiteture/logo-ux-ser-arquiteture.png',
            description: 'Soluções UX inovadoras para seu projeto'
        },
        {
            title: 'Academy',
            image: 'img/section-arquiteture/logo-ux-ser-arquiteture.png',
            description: 'Cursos de UX para impulsionar sua carreira'
        },
    ];

    const arquiteturaHomeContainer = document.getElementById('arquitetureHomeContainer');

    arquiteturaHome.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.classList.add('arquiteture-home-card');
        serviceCard.innerHTML = `
            <div class="card-image">
                <img src="${service.image}" alt="${service.title}">
            </div>
            <div class="card-content">
                <h3>${service.title}</h3>
                <p>${service.description}</p>
            </div>
        `;
        arquiteturaHomeContainer.appendChild(serviceCard);
    });
    // ---------------------- Section Arquiteture ------------------------
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
    // ------------------- Section Serviços -----------------
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-item');
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    const indicators = document.querySelectorAll('.carousel-indicators button');

    let currentSlide = 0;

    function goToSlide(index) {
        carouselWrapper.style.transform = `translateX(-${index * 100}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const nextSlideIndex = (currentSlide + 1) % slides.length;
        goToSlide(nextSlideIndex);
    }

    function prevSlide() {
        const prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
        goToSlide(prevSlideIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    setInterval(nextSlide, 5000); // Auto-slide every 5 segundos
});
    // ------------------- Section Serviços -----------------
    // ------------------- Section Portifólio -----------------

    document.addEventListener('DOMContentLoaded', function () {
        // Conteúdo dinâmico do portfólio
        const portfolioItems = [
            {
                title: 'Superhuman',
                image: 'img/section-portifolio/superhuman.png',
                description: 'Information Architect'
            },
            {
                title: 'Loggi',
                image: 'img/section-portifolio/superhuman.png',
                description: 'UX Strategy'
            },
            {
                title: 'Ebanx',
                image: 'img/section-portifolio/superhuman.png',
                description: 'UX Research'
            },
            {
                title: 'Petlove',
                image: 'img/section-portifolio/superhuman.png',
                description: 'Visual Design'
            },
            {
                title: 'FlowMapp',
                image: 'img/section-portifolio/superhuman.png',
                description: 'Growth Design'
            },
            {
                title: 'Maze',
                image: 'img/section-portifolio/superhuman.png',
                description: 'Full Stack'
            },
            {
                title: 'Tilda',
                image: 'img/section-portifolio/superhuman.png',
                description: 'Business Analysis'
            },
            {
                title: 'Framer',
                image: 'img/section-portifolio/superhuman.png',
                description: 'Interaction Design'
            },
        ];
    
        const portfolioItemsContainer = document.getElementById('portfolioItemsContainer');
    
        // Adiciona os itens do portfólio ao contêiner
        portfolioItems.forEach(item => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio-item');
            portfolioItem.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="item-content">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            portfolioItemsContainer.appendChild(portfolioItem);
        });
    
        // Carrossel de Portfólio
        let currentPortfolioIndex = 0;
    
        function updatePortfolioDisplay() {
            const itemsPerPage = 8; // Exibir 8 itens de cada vez
            const totalItems = portfolioItems.length;
            const totalPages = Math.ceil(totalItems / itemsPerPage);
    
            // Calcular a posição da transformação
            portfolioItemsContainer.style.transform = `translateX(-${(currentPortfolioIndex * itemsPerPage) * 100 / 8}%)`;
            
            // Ocultar/mostrar botões
            document.querySelector('.carousel-prev').style.display = currentPortfolioIndex === 0 ? 'none' : 'block';
            document.querySelector('.carousel-next').style.display = currentPortfolioIndex === totalPages - 1 ? 'none' : 'block';
        }
    
        // Evento de clique para a seta esquerda
        document.querySelector('.carousel-prev').addEventListener('click', () => {
            if (currentPortfolioIndex > 0) {
                currentPortfolioIndex--;
                updatePortfolioDisplay();
            }
        });
    
        // Evento de clique para a seta direita
        document.querySelector('.carousel-next').addEventListener('click', () => {
            const totalItems = portfolioItems.length;
            const totalPages = Math.ceil(totalItems / 8);
            if (currentPortfolioIndex < totalPages - 1) {
                currentPortfolioIndex++;
                updatePortfolioDisplay();
            }
        });
    
        updatePortfolioDisplay(); // Atualizar a exibição inicial
    });
    

// ------------------- Section Portifólio -----------------

// ------------------- Section Biográfia -----------------

let biografiaIndex = 0;
const biografiaSlides = document.querySelectorAll('.biografia-slider .slider-item');
const biografiaDotsContainer = document.querySelector('.biografia-dots');

function showBiografiaSlide(index) {
    biografiaSlides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
    
    // Atualiza as bolinhas
    const dots = biografiaDotsContainer.querySelectorAll('button');
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function moveBiografiaSlide(n) {
    biografiaIndex += n;
    if (biografiaIndex < 0) {
        biografiaIndex = biografiaSlides.length - 1; // Volta para o último slide
    } else if (biografiaIndex >= biografiaSlides.length) {
        biografiaIndex = 0; // Volta para o primeiro slide
    }
    showBiografiaSlide(biografiaIndex);
}

// Adiciona eventos para as bolinhas
function initBiografiaDots() {
    biografiaSlides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.addEventListener('click', () => {
            biografiaIndex = index;
            showBiografiaSlide(biografiaIndex);
        });
        biografiaDotsContainer.appendChild(dot);
    });
    showBiografiaSlide(biografiaIndex); // Mostra o primeiro slide
}

initBiografiaDots(); // Inicializa as bolinhas

// ------------------- Section Biográfia -----------------

// ------------------- Section Marcas ------------------
// Função para observar a seção
const marcasSection = document.querySelector('.marcas');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Adiciona a classe 'animate' quando a seção entra na viewport
            marcasSection.classList.add('animate');
        } else {
            // Remove a classe 'animate' se sair da viewport (opcional)
            marcasSection.classList.remove('animate');
        }
    });
}, {
    threshold: 0.5 // Ajuste para a porcentagem de visibilidade necessária
});

// Inicia a observação
observer.observe(marcasSection);

// -------------------- Section Marcas ----------------

// --------------------- Section SMM ------------------
const expandButtons = document.querySelectorAll('.expand-btn');

expandButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling; // Seleciona o próximo elemento (grid-content)
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block"; // Expande
        } else {
            content.style.display = "none"; // Contrai
        }
    });
});


document.querySelectorAll('.expand-btn').forEach(button => {
    button.addEventListener('click', () => {
        const gridContainer = document.querySelector('.grid-container');
        // Alternar a exibição da grade
        gridContainer.style.display = gridContainer.style.display === 'none' ? 'grid' : 'none';
    });
});





// ---------------------- Section SMM -----------------------
