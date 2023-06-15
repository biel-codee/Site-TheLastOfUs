const eps = [
    {
        img: "./assets/img/Eps/episodio1.svg",
        title: "Quando você está perdido na escuridão",
        description:
          " Vinte anos após um surto de fungos devastar o planeta, os sobreviventes Joel e Tess recebem uma missão que pode mudar tudo.",
      },
    
      {
        img: "./assets/img/Eps/episodio2.svg",
        title: "Infetado",
        description:
          " Depois de escapar do QZ, Joel e Tess discutem sobre o destino de Ellie enquanto navegam pelas ruínas de uma Boston há muito abandonada.",
      },
      {
        img: "./assets/img/Eps/episodio3.svg",
        title: "Muito, muito tempo",
        description:
          " Quando uma pessoa desconhecida se aproxima de seu complexo, o sobrevivente Bill estabelece uma conexão improvável. Mais tarde, Joel e Ellie buscam a orientação de Bill.",
      },
      {
        img: "./assets/img/Eps/episodio4.svg",
        title: "Por favor, segure em minha mão",
        description:
          " Depois de abandonar seu caminhão em Kansas City, Joel e Ellie tentam escapar sem chamar a atenção de um líder rebelde vingativo. ",
      },
      {
        img: "./assets/img/Eps/episodio5.jpg",
        title: "Resistir e Sobreviver",
        description:
          " Enquanto tentam fugir dos rebeldes, Joel e Ellie cruzam o caminho do homem mais procurado de Kansas City. Kathleen continua sua caçada. ",
      },
      {
        img: "./assets/img/Eps/episodio6.jpg",
        title: "Parente",
        description:
          " Depois de ignorar o conselho dos habitantes locais, Joel e Ellie descem mais fundo em um território perigoso em busca dos Vaga-lumes - e de Tommy.",
      },
      {
        img: "./assets/img/Eps/episodio7.jpg",
        title: "Deixado para trás",
        description:
          " Enquanto Joel luta para sobreviver, Ellie relembra a noite que mudou tudo.",
      },
      {
        img: "./assets/img/Eps/episodio8.jpg",
        title: "Quando Estamos Necessitados",
        description:
          " Ellie cruza o caminho de um vingativo grupo de sobreviventes - e chama a atenção de seu líder. Um enfraquecido Joel enfrenta uma nova ameaça.",
      },
      {
        img: "./assets/img/Eps/episodio9.jpg",
        title: "Procure a Luz",
        description:
          " Uma Anna grávida deposita sua confiança em um amigo de longa data. Mais tarde, Joel e Ellie estão perto do fim de sua jornada. ",
      },
];

const list = document.querySelector(".epsList");

function addCard (eps){
    for(let i = 0 ; i< eps.length ; i++){

        renderCard (eps[i]);
    }
}

addCard(eps)
function renderCard(eps){
    const listItem = document.createElement("li");
    listItem.classList.add("card")
     
    listItem.innerHTML = `
    <img src=${eps.img} 
    alt=${eps.title}>
        <div class="cardText">
            <h4>${eps.title}</h4>
                <p>
                ${eps.description}
                </p>
        </div>
                    ` ;
list.appendChild(listItem);
}

// JavaScript Carousel

const carouselImages = [
    "./assets/img/Galery/tlou-1.jpg",
    "./assets/img/Galery/tlou-2.jpg",
    "./assets/img/Galery/tlou-3.jpg",
    "./assets/img/Galery/tlou-4.jpg",
    "./assets/img/Galery/tlou-5.jpg",
    "./assets/img/Galery/tlou-6.jpg",
  ];
  
  let currentImageIndex = 0;
  const imageElement = document.getElementById("carousel-image");
  
  function showCurrentImage() {
    imageElement.src = carouselImages[currentImageIndex];
  }
  
  function showNextImage() {
    currentImageIndex++;
    if (currentImageIndex >= carouselImages.length) {
      currentImageIndex = 0;
    }
    showCurrentImage();
  }
  
  function showPreviousImage() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
      currentImageIndex = carouselImages.length - 1;
    }
    showCurrentImage();
  }
  
  document.getElementById("next-button").addEventListener("click", showNextImage);
  document.getElementById("previous-button").addEventListener("click", showPreviousImage);
  
  // Show the initial image
  showCurrentImage();
  