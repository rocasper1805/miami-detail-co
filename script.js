const quoteForm = document.getElementById("quoteForm");
const formStatus = document.getElementById("formStatus");

quoteForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const service = document.getElementById("service").value;

  formStatus.textContent =
    `Thanks ${name}! Your request for ${service} has been received. We'll contact you at ${phone}.`;

  quoteForm.reset();
});

const year = document.getElementById("year");
year.textContent = new Date().getFullYear();