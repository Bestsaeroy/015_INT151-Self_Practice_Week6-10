const container = document.getElementById('container');

// -------------------------------
// Exercise 1: h1 + p with attribute
// -------------------------------

const h1 = document.createElement('h1');
h1.textContent = 'Welcome To DOM';

const pIntro = document.createElement('p');
pIntro.textContent = 'This is a DOM Practice.';
pIntro.setAttribute('data-info', 'intro');

container.appendChild(h1);
container.appendChild(pIntro);

// -------------------------------
// Exercise 2: innerHTML / innerText / textContent
// -------------------------------

const p1 = document.createElement('p');
p1.innerHTML = '<b>Bold Text (innerHTML)</b>';

const p2 = document.createElement('p');
p2.innerText = '<b>Bold Text (innerText)</b>';

const p3 = document.createElement('p');
p3.textContent = '<b>Bold Text (textContent)</b>';

container.appendChild(p1);
container.appendChild(p2);
container.appendChild(p3);

// -------------------------------
// Exercise 3: <img> with attributes
// -------------------------------

const img = document.createElement('img');
img.setAttribute('src', 'https://du2j4cfd2qo0k.cloudfront.net/5854f92a_70d7_4207_a8a5_2fb9aee2775a_22159d8c00.png');
img.setAttribute('alt', 'sample image');
img.setAttribute('width', '120');

container.appendChild(img);

// -------------------------------
// Exercise 4: <button>
// -------------------------------

const button = document.createElement('button');
button.setAttribute('type', 'button');
button.textContent = 'Click Me';

container.appendChild(button);

console.log('DOM Elements Created Successfully!');
