const sofiaPhoto = document.querySelector('.sofia-photo');
const evgeniiPhoto = document.querySelector('.evgenii-photo')

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  sofiaPhoto.style.transform = `translateX(${scrollPosition * -0.5}px)`;
  evgeniiPhoto.style.transform = `translateX(${scrollPosition * 0.5}px)`;
});