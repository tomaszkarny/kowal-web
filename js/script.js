var filterizd = $('.filtr-container').filterizr({
   //options object
    animationDuration: 1,
    layout: 'packed',
    delay: 150,
          delayMode: "progressive",
          easing: "ease-out",
          filter: "all",
  
});

const buttons = Array.from(document.querySelectorAll('.filteringBtn'));
const galleryItems = Array.from(document.querySelectorAll('.filtr-item'));

buttons.forEach(button => {
  button.addEventListener('click', handleBtnClick);
})

function handleBtnClick() {
  const category = this.dataset.filter;
  const isAll = category === 'all';
  
  galleryItems.forEach(item => {
    const imageItem = item.querySelector('a');
    imageItem.dataset.lightbox = '';

    if (isAll) {
      imageItem.dataset.lightbox = 'gallery';

      return;
    }

    if (item.dataset.category.includes(category)) {
      item.querySelector('a').dataset.lightbox = 'gallery';

      return;
    }
  })
}

/*fltr.filterizr('setOptions', {layout: 'horizontal'});*/

//hambureer icon
const ico = document.querySelector('.burger');
  ico.addEventListener("click", function () {
   ico.classList.toggle("active");
  })


//sal
sal({
  threshold: 1,
  once: false,
});