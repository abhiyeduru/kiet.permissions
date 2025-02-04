
document.addEventListener('DOMContentLoaded', function () {
  const cursor = document.createElement('div');
  cursor.classList.add('cursor');
  document.body.appendChild(cursor);
  const title = document.querySelector('.title')
  const body = document.querySelector('body')


  document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
  });
  title.addEventListener('mouseenter', (e) => {
    cursor.classList.add('hovered');
      body.classList.add('cursor-hovered')
    body.style.setProperty('--mouse-x', e.clientX / window.innerWidth);
  });
  title.addEventListener('mouseleave', ()=>{
     cursor.classList.remove('hovered');
    body.classList.remove('cursor-hovered')
  });
});