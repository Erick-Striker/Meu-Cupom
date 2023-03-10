const users = [
	{name: 'Mariana Luiza Nascimento de Paula', code: 'Apolo23', page: 'page1.html'},
	{name: 'Ana Luisa de Souza Pacheco', code: 'ALSP1,618', page: 'page2.html'},
	{name: 'Raphael Ignacio Nunes Passos', code: '3.141592', page: 'page3.html'},
	{name: 'Erick Albino Oliveira', code: '0717', page: 'page4.html'},
	{name: 'User5', code: '3141', page: 'page5.html'},
];

const form = document.querySelector('form');
const errorMessage = document.createElement('p');
errorMessage.classList.add('error-message');
errorMessage.innerText = 'Nome ou ID de acesso informado errado. Tente novamente.';

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const name = event.target.elements.name.value;
	const code = event.target.elements.code.value;
	const user = users.find(u => u.name === name && u.code === code);
	if (user) {
		window.location.href = user.page;
	} else {
		form.appendChild(errorMessage);
	}
});
