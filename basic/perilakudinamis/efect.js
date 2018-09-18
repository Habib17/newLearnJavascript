var para = document.querySelector('p');

para.addEventListener('click', updateName);


function updateName(){
	var name = prompt('Enter new Name');
	para.textContent = 'Player 1: '+ name;
}

