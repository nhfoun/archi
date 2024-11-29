          


// testimonial js start
let a  = document.querySelector(".test-img1")
let b  = document.querySelector(".test-img2")
let c  = document.querySelector(".test-img3")



let x = document.querySelector(".first-test-item1")
let y = document.querySelector(".first-test-item2")
let z = document.querySelector(".first-test-item3")

a.addEventListener('click',()=>{
  x.style.left ='0%';
  x.classList.toggle('add') ;
  x.style.display = 'block';
  y.style.display = 'none';
  z.style.display = 'none';
})
b.addEventListener('click',()=>{
  y.style.left ='0%';
  y.classList.toggle('add') ;
  y.style.display = 'block';
  x.style.display = 'none';
  z.style.display = 'none';
})
c.addEventListener('click',()=>{
  z.style.left ='0%';
  z.classList.toggle('add') ;
  z.style.display = 'block';
  y.style.display = 'none';
  y.style.display = 'none';
})

// testimonial js end




const number = document.querySelectorAll('.count');
let interval =5000;
number.forEach((valueDispaly)=>{
  let startValue = 0;
  let endValue = parseInt(valueDispaly.getAttribute('data-count'));
  let duration = Math.floor(interval/endValue);
  let counter = setInterval(function(){
    startValue +=1
    valueDispaly.textContent = startValue
    if (startValue==endValue){
      clearInterval(counter)
    }
  },duration)
})



document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.container8');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});




document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.servises-card-section');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.servises-card-section2');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.about-img');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.about-txt');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.dabba-txt3');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.dabba-img2');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.test-container');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.counter-wrap');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.stories-all');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector('.pro');

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              container.classList.add('show');
              observer.unobserve(entry.target); // Stop observing after animation
          }
      });
  });

  observer.observe(container);
});


// All scrol event End


// let menu = document.getElementById("fuc");
// let close = document.getElementById("fuc3");
// let nav2 = document.getElementById("fuc2")
// let navi = document.querySelector(".navigation")
// menu.addEventListener('click',()=>{
//     navi.style.transform = "translateX(0)";
//     navi.style.opacity = "1";
//     menu.style.display = "none";
//     close.style.display = "block";
// })
// close.addEventListener('click',()=>{
//     navi.style.transform = "translateX(200px)";
//     navi.style.opacity = "0";
//     menu.style.display = "block";
//     close.style.display = "none";
// })

