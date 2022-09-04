const container = document.querySelector('#container');

const content = document.createElement('p');
content.classList.add('content');
content.textContent = "Hey I'm red!";
content.style.cssText = "color: red;";

container.appendChild(content);

const heading3 = document.createElement('h3');
heading3.classList.add('heading3');
heading3.textContent = "I'm a blue h3!";
heading3.style.cssText = "color: blue;";

container.appendChild(heading3);

const div = document.createElement('div');
const head1 = document.createElement('h1');
const paragraph = document.createElement('p');
div.classList.add('vid');
head1.textContent = "I'm in a div";
paragraph.textContent = "ME TOO!";
div.style.cssText = "border: black; background-color: pink;";
div.appendChild(head1);
div.appendChild(paragraph);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
  console.log(e.target.style.background = 'blue');
});
