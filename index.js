const toggle = document.getelementbyid("toggle");
console.log("toggle");


const navbar = document.getelementbyid("navbar");
console.log("navbar");

toggle.getElementById('btn').addEventListener('click', () => {
    alert('Bouton cliqué !');
});

toggle.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});