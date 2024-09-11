const images = [
    'image/img8.webp',
    'image/img4.jpg',
    'image/img3.jpg',
    'image/img7.jpeg',
  ];
  
  let currentIndex = 0;
  
  function showImage(index) {
    const imageElement = document.getElementById('currentImage');
    imageElement.src = images[index];
  }
  
  function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showImage(currentIndex);
  }
  
  function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showImage(currentIndex);
  }
  