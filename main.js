function showForm() {
  document.getElementById('signupForm').style.display = 'block';
}
function hideForm() {
  document.getElementById('signupForm').style.display = 'none';
}
// Close form when clicking outside
window.addEventListener('click', function(event) {
  const formContainer = document.getElementById('signupForm');
  const formBox = document.getElementById('formBox');
  if (formContainer.style.display === 'block' && !formBox.contains(event.target) && event.target !== document.querySelector('button[onclick="showForm()"]')) {
    hideForm();
  }
  });
function showLoginForm() {
  const form = document.getElementById('loginForm');
  form.style.display = 'block';

  // Trigger reflow to re-run animation
  const content = document.getElementById('formBox');
  content.classList.remove('animate');
  void content.offsetWidth; // force reflow
  content.classList.add('animate');
}

function hideLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
}

// Close form when clicking outside
window.addEventListener('click', function(event) {
  const formContainer = document.getElementById('loginForm');
  const formBox = document.getElementById('formBox');
  const loginButton = document.querySelector('button[onclick="showLoginForm()"]');

  // If the form is open
  if (formContainer.style.display === 'block') {
    // Check if the click is outside the formBox and not on the login button
    if (!formBox.contains(event.target) && event.target !== loginButton) {
      hideLoginForm();
    }
  }
});
const slidesWrapper = document.getElementById('slidesWrapper');
  const dots = document.querySelectorAll('.dot');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  const pauseBtn = document.querySelector('.pause-btn');
  let currentSlide = 0;
  const totalSlides = 5;
  let isTransitioning = false;
  let isPaused = false;
  let slideInterval = setInterval(nextSlide, 3000);

  function showSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    slidesWrapper.style.transition = 'transform 0.8s ease-in-out';
    slidesWrapper.style.transform = `translateX(-${index * 100}%)`;
    currentSlide = index;

    dots.forEach((dot, i) => dot.classList.toggle('active', i === (index % totalSlides)));

    if (index === totalSlides) {
      setTimeout(() => {
        slidesWrapper.style.transition = 'none';
        slidesWrapper.style.transform = 'translateX(0)';
        currentSlide = 0;
      }, 800);
    }

    setTimeout(() => isTransitioning = false, 800);
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % (totalSlides + 1));
  }

  function prevSlide() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) {
      slidesWrapper.style.transition = 'none';
      slidesWrapper.style.transform = `translateX(-${totalSlides * 100}%)`;
      newIndex = totalSlides - 1;
      setTimeout(() => {
        slidesWrapper.style.transition = 'transform 0.8s ease-in-out';
        showSlide(newIndex);
      }, 20);
    } else {
      showSlide(newIndex);
    }
  }

  function resetInterval() {
    clearInterval(slideInterval);
    if (!isPaused) {
      slideInterval = setInterval(nextSlide, 3000);
    }
  }

  next.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prev.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetInterval();
    });
  });

  pauseBtn.addEventListener('click', () => {
    if (isPaused) {
      slideInterval = setInterval(nextSlide, 3000);
      pauseBtn.textContent = 'pause';
    } else {
      clearInterval(slideInterval);
      pauseBtn.textContent = 'play';
    }
    isPaused = !isPaused;
  });
    // Topnav hide on scroll
  let lastScrollTop = 0;
  const middlenav = document.getElementsByClassName('middlenav');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      topnav.classList.add('hide'); // scrolling down
    } else {
      middlenav.classList.remove('hide'); // scrolling up
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
  function showForm() {
  document.getElementById('signupForm').style.display = 'block';
}

function hideForm() {
  document.getElementById('signupForm').style.display = 'none';
}

// Close form when clicking outside
window.addEventListener('click', function(event) {
  const formContainer = document.getElementById('signupForm');
  const formBox = document.getElementById('formBox');
  if (formContainer.style.display === 'block' && !formBox.contains(event.target) && event.target !== document.querySelector('button[onclick="showForm()"]')) {
    hideForm();
  }
  });
function showLoginForm() {
  const form = document.getElementById('loginForm');
  form.style.display = 'block';

  // Trigger reflow to re-run animation
  const content = document.getElementById('formBox');
  content.classList.remove('animate');
  void content.offsetWidth; // force reflow
  content.classList.add('animate');
}

function hideLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
}

// Close form when clicking outside
window.addEventListener('click', function(event) {
  const formContainer = document.getElementById('loginForm');
  const formBox = document.getElementById('formBox');
  const loginButton = document.querySelector('button[onclick="showLoginForm()"]');

  // If the form is open
  if (formContainer.style.display === 'block') {
    // Check if the click is outside the formBox and not on the login button
    if (!formBox.contains(event.target) && event.target !== loginButton) {
      hideLoginForm();
    }
  }
});