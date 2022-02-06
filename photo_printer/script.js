document.addEventListener("DOMContentLoaded", () => {

  const printer = document.querySelector('.printer'),
  printBtn = document.querySelector('.print-btn'),
  gImage = document.querySelector('.DY_image'),
  lightbox = document.querySelector('.lightbox'),
  lightboxImage = document.querySelector('.lightbox-image');
  var URL;

  let printing = false;

  //Fetch image
  printBtn.addEventListener('click', () => {
    URL = document.getElementById("url").value;
    if (URL == "") {
      URL="https://image.shutterstock.com/image-vector/dy-d-y-letter-logo-260nw-1113955913.jpg";
      }
    gImage.src = URL;
    gImage.alt = URL;
    //alert(URL);
    lightboxImage.src = URL;
    lightboxImage.alt = URL;
    if (!printing) printer.classList.add('printing');
    printing = true;
  });

  gImage.addEventListener('click', () => lightbox.classList.add('show'));

  lightbox.addEventListener('click', () => lightbox.classList.remove('show'));

  lightboxImage.addEventListener('click', e => e.stopPropagation());

  //CodePen preview window
  if (location.pathname.includes('fullcpgrid')) printer.classList.add('printing');

});