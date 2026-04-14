document.addEventListener("DOMContentLoaded", () => {
  const toggleOfferBtn = document.getElementById("toggleOfferBtn");
  const nextOfferBtn = document.getElementById("nextOfferBtn");
  const offerDetails = document.getElementById("offerDetails");
  const section = document.querySelector("section");

  const offers = [
    {
      title: "Oferta del día",
      description:
        "Hoy: 20% de descuento en arroz y pan. Precio especial por tiempo limitado.",
      image: "./style/img/ofertas1.jpeg",
      alt: "Arroz y pan en oferta",
    },
    {
      title: "Oferta de miércoles",
      description:
        "Miércoles: 15% de descuento en productos de limpieza. Precio especial por tiempo limitado.",
      image: "./style/img/ofertas 2.jpeg",
      alt: "Productos de limpieza en oferta",
    },
    {
      title: "Oferta de viernes",
      description:
        "Viernes: 10% en carne y pescado. Precio especial por tiempo limitado.",
      image: "./style/img/ofertas de carnes.jpeg",
      alt: "Carnes y pescados en oferta",
    },
  ];

  let currentOfferIndex = 0;

  const renderOffer = (index) => {
    const offer = offers[index];
    offerDetails.innerHTML = `
      <article class="offer-card">
        <h3>${offer.title}</h3>
        <p>${offer.description}</p>
        <img src="${offer.image}" alt="${offer.alt}" class="offer-image" />
        <p class="offer-counter">Oferta ${index + 1} de ${offers.length}</p>
      </article>
    `;
  };

  const showOffer = () => {
    offerDetails.classList.remove("hidden");
    toggleOfferBtn.textContent = "Ocultar oferta del día";
    renderOffer(currentOfferIndex);
  };

  const hideOffer = () => {
    offerDetails.classList.add("hidden");
    toggleOfferBtn.textContent = "Mostrar oferta del día";
  };

  toggleOfferBtn.addEventListener("click", () => {
    if (offerDetails.classList.contains("hidden")) {
      showOffer();
    } else {
      hideOffer();
    }
  });

  nextOfferBtn.addEventListener("click", () => {
    currentOfferIndex = (currentOfferIndex + 1) % offers.length;
    if (offerDetails.classList.contains("hidden")) {
      showOffer();
    } else {
      renderOffer(currentOfferIndex);
    }
  });

  renderOffer(currentOfferIndex);
});
