const body = document.querySelector('body');

const avancarScroll = (elemento, direcao) => {
  const carrocelContent = document.querySelector(elemento);

  if(direcao == 'left'){
    carrocelContent.scrollLeft -= 100;
    // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100;
  } else if (direcao == 'right'){
    carrocelContent.scrollLeft += 100;
    // carrocelContent.scrollRight = carrocelContent.scrollRight - 100;
  }
}

const pageFilm = (titulo, codeVideo) => {
  body.innerHTML = `
  <header>
  <img class="logo" src="assets/images/netflix-logo.png">
  </header>

  <main id="main-page-film">
    <div id="container-voltar" onClick="backHome()"> 
      <span> < Voltar </span> 
    </div>
    
    <div class="container">
      <span id="title">${titulo}</span>

      <iframe width="900" height="400" src="https://www.youtube.com/embed/${codeVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>

  </main>
  `
  console.log("aqui")
}

const createCarrocel = () => {
  const listSuspense = [
    {
      title: "A Espreita Do Mal",
      capa: "assets/images/capas/suspense/a-espreita-do-mal.jpg",
      code: "scvw7GRyUxI"
    },
    {
      title: "A Vida Secreta de Zoe",
      capa: "assets/images/capas/suspense/a-vida-secreta-de-zoe.jpg",
      code: "4SFXPP2ek5k"
    },
    {
      title: "Destinos á Deriva",
      capa: "assets/images/capas/suspense/destinos-a-deriva.jpg",
      code: "B0pDOG2pFOw"
    },
    {
      title: "O Lado Bom De Ser Traída",
      capa: "assets/images/capas/suspense/o-lado-bom-de-ser-traida.jpg",
      code: "hqFVSHWIE14"
    },
    {
      title: "O Limite Da Traição",
      capa: "assets/images/capas/suspense/o-limite-da-traicao.jpg",
      code: "Rhv2kFF6yTA"
    },
    {
      title: "Truque De Mestre",
      capa: "assets/images/capas/suspense/truque-de-mestre.jpg",
      code: "TSDhZrPu7Ok"
    },
    {
      title: "Ultima Parada",
      capa: "assets/images/capas/suspense/ultima-parada",
      code: "GaLl9Ymeg54"
    },
  ];

  listSuspense.forEach((e) => createCarrocelItem(".suspense", e.capa, e.title, e.code))

  const listTerror = [
    {
      title: "Jogos Mortais",
      capa: "assets/images/capas/terror/jogos-mortais.jpg",
      code: "VjB5ZuZd4Zo"
    },
    {
      title: "O Filho de Chucky",
      capa: "assets/images/capas/terror/o-filho-de-chucky.jpg",
      code: "1chYpei1n54"
    },
    {
      title: "O grito",
      capa: "assets/images/capas/terror/o-grito.jpg",
      code: "D6HF2nJxKEk"
    },
    {
      title: "Tempo",
      capa: "assets/images/capas/terror/tempo.jpg",
      code: "zxnVGnQKM4E"
    },
    {
      title: "Todo Mundo em Pânico",
      capa: "assets/images/capas/terror/todo-mundo-em-panico.jpg",
      code: "PL8GYlj_OvDy19PRD2SKUmeszJrEJcitxT"
    },
    {
      title: "Tubarão",
      capa: "assets/images/capas/terror/tubarao.jpg",
      code: "T3PRY7k9QdE"
    },
    {
      title: "Massacre No Texas",
      capa: "assets/images/capas/terror/massacre.jpg",
      code: "53Q4s1bxGUw"
    },
  ];

  listTerror.forEach((e) => createCarrocelItem(".terror", e.capa, e.title, e.code))

  const listComedia = [
    {
      title: "Cunhado Vampiro",
      capa: "assets/images/capas/comedia/cunhado-vampiro.jpg",
      code: "F4DSFOabvaM"
    },
    {
      title: "Minha Mãe é Uma Peça",
      capa: "assets/images/capas/comedia/minha-mae-e-uma-peca.jpg",
      code: "qfdcZQ36u_A"
    },
    {
      title: "Modo Avião",
      capa: "assets/images/capas/comedia/modo-aviao.jpg",
      code: "oJiS4bDCVvQ"
    },
    {
      title: "Os Parças",
      capa: "assets/images/capas/comedia/os-parcas.jpg",
      code: "Km_8jEUXB3E"
    },
    {
      title: "Uma Quase Dupla",
      capa: "assets/images/capas/comedia/uma-quase-dupla.jpg",
      code: "PosLyjN_gkA"
    },
    {
      title: "Vizinhos",
      capa: "assets/images/capas/comedia/vizinhos.jpg",
      code: "IaV-OO-Mwx0"
    },
    {
      title: "Vó To Rica",
      capa: "assets/images/capas/comedia/vo-to-rica.jpg",
      code: "GIg8IZettZ4"
    },
  ];

  listComedia.forEach((e) => createCarrocelItem(".comedia", e.capa, e.title, e.code))
}

const createCarrocelItem = (generoClass, capa, titulo, codeVideo) =>{
  const carrocel = document.querySelector(".carrocel-content" + generoClass);
  const newDiv = document.createElement("div");
  newDiv.classList.add("carrocel-item");
  newDiv.onclick = () => pageFilm(titulo, codeVideo);

  //Adiciona o conteudo ao elemento div
  newDiv.innerHTML = `
    <img class="carrocel-capa" src="${capa}" alt="capa filme ${titulo}">
    <span class="carrocel-title">${titulo}</span>
  `
  carrocel.appendChild(newDiv);
}

const backHome = () => {
  body.innerHTML = `
    <header>
      <img class="logo" src="assets/images/netflix-logo.png">
    </header>

      <main id="main-home">
        <div class="carrocel suspense">
          <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.png">
          <div class="carrocel-content suspense"></div>
        <img onclick="avancarScroll('.carrocel-content.suspense', 'right')" class="carrocel-seta" src="assets/images/seta-direita.png">
        </div>

        <div class="carrocel terror">
          <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.png">
          <div class="carrocel-content terror"></div>
          <img onclick="avancarScroll('.carrocel-content.terror', 'right')" class="carrocel-seta" src="assets/images/seta-direita.png">
        </div>

        <div class="carrocel comedia">
          <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.png">
          <div class="carrocel-content comedia"></div>
          <img onclick="avancarScroll('.carrocel-content.comedia', 'right')" class="carrocel-seta" src="assets/images/seta-direita.png">
        </div>
      </main>
  `;
  
  createCarrocel()
}

createCarrocel()
