const images = document.querySelectorAll('img');
images.forEach(function(img) {
    if (img.getAttribute('alt') === 'One' || img.getAttribute('alt') === 'Three') {
      img.setAttribute('alt', 'Old');
    }else {
      img.setAttribute('alt', 'Elzero New');
    }
  });








