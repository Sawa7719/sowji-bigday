function ouvrirSceau() {

    document.getElementById("sceau").style.display = "block";

}



function entrerPalais() {


    let code = document.getElementById("code").value;


    let erreur = document.getElementById("erreur");



    if (code.trim().toLowerCase() === "sowji") {


        erreur.innerHTML =
        "✨ Le sceau reconnaît ton cœur...";


        setTimeout(() => {

            window.location.href = "jardin.html";

        }, 1000);


    } else {


        erreur.innerHTML =
        "Le sceau reste fermé...";


    }


}
