//Injecter le nom du formulaire choisi directement dans l'input de l'Organisation

let optionFill = select.options[select.selectedIndex].innerHTML;
let organisation = document.getElementById("form_8_1-element-8");
organisation.setAttribute("value", optionFill);

//Permet de choisir parmi les 3 formulaires et de ne pas afficher les deux autres

function formOption() {
  let select = document.getElementById("select");
  let option = select.options[select.selectedIndex].value;
  let optionFill = select.options[select.selectedIndex].innerHTML;

  if (option === "OJ") {
    document.getElementById("form_8_1").style.display = "initial";
    document.getElementById("form_7_1").style.display = "none";
    document.getElementById("form_12_1").style.display = "none";
    let organisation = document.getElementById("form_8_1-element-8");
    organisation.setAttribute("value", optionFill);
  } else if (option === "ES") {
    document.getElementById("form_7_1").style.display = "initial";
    document.getElementById("form_8_1").style.display = "none";
    document.getElementById("form_12_1").style.display = "none";
    let organisationB = document.getElementById("form_7_1-element-8");
    organisationB.setAttribute("value", optionFill);
  } else {
    document.getElementById("form_12_1").style.display = "initial";
    document.getElementById("form_8_1").style.display = "none";
    document.getElementById("form_7_1").style.display = "none";
    let organisationC = document.getElementById("form_12_1-element-8");
    organisationC.setAttribute("value", optionFill);
  }
}

//Permet de changer le texte généré automatiquement du label de l'anglais au français

let profileNames = document.querySelectorAll(".rmfield");

for (let profileName of profileNames) {
  if (
    profileName.innerHTML ==
    'Enter password again<sup class="required">&nbsp;*</sup>'
  ) {
    profileName.innerHTML = "Confirmer mot de passe *";
  }
}

//Permet de changer le texte généré automatiquement du titre

let titles = document.querySelectorAll(".titre-central");

for (let title of titles) {
  if (title.innerHTML == "Register") {
    title.innerHTML = "Inscription";
  }
}
