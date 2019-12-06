let overlay = document.createElement('div');
let popup = document.createElement('div');

function openModal() {
  overlay.className = 'overlay';
  overlay.classList.add('show-popup');
  popup.className = 'popup';
  popup.innerHTML = '<span onclick="closeModal()">&times</span> <div>&#10004;</div> <h1>Good Job!</h1>  ';
  document.body.append(overlay);
  overlay.prepend(popup);
};

function closeModal() {
  overlay.classList.replace('show-popup', 'hide-popup');
  setTimeout(function() 
  { 
    overlay.remove();
  }, 240);
  
};
window.onclick = function (e) {
  if (e.target == overlay) {
    closeModal();
  }
};
