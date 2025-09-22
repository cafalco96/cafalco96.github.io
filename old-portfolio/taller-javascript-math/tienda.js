const button = document.querySelector(".price-calc");
const realPrice = document.querySelector(".real-price");

function calcPrice() {
  const price = parseInt(document.querySelector(".price").value);
  const descount = parseInt(document.querySelector(".descount").value);
  if (descount > 100) {
    realPrice.innerText = "Please add a real discount that less to 100";
    realPrice.classList.add("alert");
  } else if (!price || !descount) {
    realPrice.innerText = "Please add a price and discount";
    realPrice.classList.add("alert");
  } else {
    const result = (price * (100 - descount)) / 100;
    realPrice.innerHTML = `The price is $${result}`;
  }
}
button.addEventListener("click", calcPrice);

// Do you have a ticket
const btTickets = document.querySelector(".price-calc-ticket");
const realPriceTicket = document.querySelector(".real-price-ticket");
const tickets = {
  carlos: 10,
  falconi: 50,
  negra: 75,
  carmen: 90,
  alfonso: 100,
};
btTickets.addEventListener("click", () => {
  const price = parseInt(document.querySelector(".price-ticket").value);
  const discount = document.querySelector(".discount-ticket").value;
  if (!price || !discount) {
    realPriceTicket.innerText = "Please add a price and ticket";
    realPriceTicket.classList.add("alert");
  } else {
    for (ticket in tickets) {
      if (ticket === discount) {
        const result = (price * (100 - tickets[ticket])) / 100;
        realPriceTicket.innerHTML = `Your discount was ${tickets[ticket]}% and the price is $${result}`;
        return;
      } else {
        realPriceTicket.innerHTML = "Sorry, ticket not found";
      }
    }
  }
});

// Do you have a ticket arrays methods
const btTicketsArray = document.querySelector(".price-calc-ticket-array");
const realPriceTicketArray = document.querySelector(".real-price-ticket-array");
const ticketsArray = [
  { name: "carlos", value: 10 },
  { name: "falconi", value: 50 },
  { name: "negra", value: 75 },
  { name: "carmen", value: 90 },
  { name: "alfonso", value: 100 },
];
btTicketsArray.addEventListener("click", () => {
  const discount = document.querySelector(".discount-ticket-array").value;
  const price = parseInt(document.querySelector(".price-ticket-array").value);
  const ticketName = ticketsArray.find((ticket) => {
    return ticket.name === discount;
  });
  if (ticketName) {
    const result = (price * (100 - ticketName.value)) / 100;
    realPriceTicketArray.innerHTML = `Your discount was ${ticketName.value}% and the price is $${result}`;
    return;
  } else {
    realPriceTicketArray.innerHTML = "Sorry, ticket not found";
  }
});
