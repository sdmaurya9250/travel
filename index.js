let currentSlide = 0;
const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");

function showSlide(slideIndex) {
  const slideWidth = slides[0].clientWidth;
  slidesContainer.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  console.log("click");
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
  console.log("click");
}

// Show the initial slide
showSlide(currentSlide);

// document.getElementById('viewMoreBtn').addEventListener('click', function() {
//   var content = document.querySelector('.content');
//   content.classList.toggle('showContent');
//   this.textContent = content.classList.contains('showContent') ? '...View Less' : '...View More';
// });

var viewMoreBtns = document.querySelectorAll(".viewMoreBtn");

viewMoreBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var content = this.previousElementSibling;
    content.classList.toggle("showContent");
    this.textContent = content.classList.contains("showContent")
      ? "...View Less"
      : "...View More";
  });
});

const btnList = document.querySelectorAll(".right-btn");

btnList.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector('.right-btn-active')?.classList.remove('right-btn-active');btn.classList.add('right-btn-active')
  });
});


// Copy text button

document.getElementById("copyButton").addEventListener("click", function () {
  var copyText = document.getElementById("copyText");
  copyText.select();
  document.execCommand("copy");
  // alert("Account No: " + copyText.value);
}); 
document.getElementById("copyIfscCode").addEventListener("click", function () {
  var copyText = document.getElementById("copycode");
  copyText.select();
  document.execCommand("copy");
  // alert("IFSC Code: " + copyText.value);
});

