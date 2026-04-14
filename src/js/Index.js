document.addEventListener("DOMContentLoaded", () => {
  const contactLink = document.getElementById("contactLink");
  const contactSection = document.getElementById("contacto");
  const submitContact = document.getElementById("submitContact");
  const contactMessage = document.getElementById("contactMessage");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");

  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    contactSection.classList.add("focus-highlight");
    setTimeout(() => {
      contactSection.classList.remove("focus-highlight");
    }, 2000);
  });

  submitContact.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
      contactMessage.textContent =
        "Por favor escribe tu nombre y correo para contactarte.";
      contactMessage.classList.remove("hidden");
      return;
    }

    contactMessage.textContent = `Gracias ${name}, recibimos tu mensaje. Te contactaremos a ${email}.`;
    contactMessage.classList.remove("hidden");
    nameInput.value = "";
    emailInput.value = "";
  });
});
