function createParagraf(){
	var para = document.createElement('p');
	para.textContent = 'kamu ngeklik button';
	document.body.appendChild(para);

}



var button = document.querySelectorAll('button');

for (var i = 0 ; i < button.length ; i++){
	button[i].addEventListener('click', createParagraf);

}
