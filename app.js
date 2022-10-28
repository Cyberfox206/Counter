
let minute = 0;

let conteur = 0;
let a_conteur = document.getElementById("conteur").textContent = conteur;

const fin = setInterval(() => {
    a_conteur = document.getElementById("conteur").textContent = conteur;
    conteur++;
    console.log(conteur)
    if (conteur === 3600000) {
        clearInterval(fin)
    }
}, 1000);



