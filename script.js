let button = document.querySelector('.button');
function nbAleatoire(nombre){
    return Math.floor (Math.random()*(nombre+1));
}

button.onclick = function () {
    let couleur = 'rgb('+nbAleatoire(255)+','
    +nbAleatoire(255)+','+nbAleatoire(255)+')';
    document.body.style.backgroundColor=couleur;
}