// Action button download
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var link = document.createElement("a"); //membuat elemen link
    link.download = "CV.pdf"; // menetapkan nama file dan url
    link.href = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

// Slideshow gambar
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //loop utk menyembunyikan gambar
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000);
}
