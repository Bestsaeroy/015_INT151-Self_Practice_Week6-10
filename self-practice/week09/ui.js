import {
  addQuote,
  deleteQuote,
  updateQuote,
  getAllQuotes,
} from "./quote.js";

// Select DOM elements
const quoteList = document.getElementById("quote-list");
const form = document.getElementById("quoteForm");
const contentInput = document.getElementById("content");
const authorInput = document.getElementById("author");
const idInput = document.getElementById("quoteId");
const randomBtn = document.getElementById("randomBtn");
const randomDisplay = document.getElementById("randomQuoteDisplay");

// Create a single quote card
function createQuoteElement(quote) {
  const div = document.createElement("div");
  div.setAttribute("data-id", quote.id);

  const contentP = document.createElement("p");
  contentP.textContent = quote.content;

  const authorP = document.createElement("p");
  authorP.textContent = quote.author;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.dataset.id = quote.id;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.dataset.id = quote.id;

  div.appendChild(contentP);
  div.appendChild(authorP);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  // Button events
  editBtn.addEventListener("click", () => {
    idInput.value = quote.id;
    contentInput.value = quote.content;
    authorInput.value = quote.author;
  });

  deleteBtn.addEventListener("click", () => {
    deleteQuote(quote.id);
    deleteQuoteFromDOM(quote.id);
  });

  return div;
}

// Add to DOM
function addQuoteToDOM(quote) {
  const element = createQuoteElement(quote);
  quoteList.appendChild(element);
}

// Update DOM
function updateQuoteInDOM(quote) {
  const card = quoteList.querySelector(`[data-id='${quote.id}']`);
  if (card) {
    card.children[0].textContent = quote.content;
    card.children[1].textContent = quote.author;
  }
}

// Delete from DOM
function deleteQuoteFromDOM(id) {
  const card = quoteList.querySelector(`[data-id='${id}']`);
  if (card) card.remove();
}

// Render All
function renderQuotes() {
  quoteList.innerHTML = "";
  const all = getAllQuotes();
  all.forEach((q) => addQuoteToDOM(q));
}

// Random Quote
function showRandomQuote() {
  const all = getAllQuotes();
  if (all.length === 0) {
    randomDisplay.textContent = "-- No quotes to show --";
    return;
  }
  const random = all[Math.floor(Math.random() * all.length)];
  randomDisplay.textContent = `"${random.content}" — ${random.author}`;
}

// Form Submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const content = contentInput.value.trim();
  const author = authorInput.value.trim();
  const id = idInput.value;

  if (!content || !author) {
    alert("Please fill in both quote and author.");
    return;
  }

  if (id) {
    const updated = updateQuote(Number(id), content, author);
    updateQuoteInDOM(updated);
  } else {
    const newQuote = addQuote(content, author);
    addQuoteToDOM(newQuote);
  }

  form.reset();
  idInput.value = "";
});

// Random Btn Event
randomBtn.addEventListener("click", showRandomQuote);

// Initial render
renderQuotes();
