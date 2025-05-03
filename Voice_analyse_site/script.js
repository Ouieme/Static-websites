// Fonction pour ouvrir la fenêtre modale
function openPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    // Afficher la fenêtre modale et l'overlay
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Fonction pour fermer la fenêtre modale
function closePopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('overlay');

    // Masquer la fenêtre modale et l'overlay
    popup.style.display = 'none';
    overlay.style.display = 'none';

    // Arrêter la lecture audio
    var audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
}
