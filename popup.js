let overlay = document.createElement('div');
let popup = document.createElement('div');

function openModal() {
  overlay.className = 'overlay';
  popup.className = 'popup';
  popup.innerHTML = '<span onclick="closeModal()">&times</span> <div>&#10004;</div> <h1>Good Job!</h1>  ';
  document.body.append(overlay);
  overlay.prepend(popup);
};

function closeModal() {
  overlay.remove(overlay);
  
};
window.onclick = function (e) {
  if (e.target == overlay) {
    overlay.remove(overlay);
  }
};
