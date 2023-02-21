function tocaSom(SeletorAudio) {

	const elemento = document.querySelector(SeletorAudio);

	if (elemento && elemento.localName === "audio") {

			elemento.play();
		
	} else {console.log("Elemento não encontrado");}

}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let x = 0; x < listaDeTeclas.length; x++){
	

	const tecla = listaDeTeclas[x];
	const instrumento = tecla.classList[1];

	const idAudio = `#som_${instrumento}`;

	tecla.onclick = function(){
		tocaSom(idAudio)
	};

	tecla.onkeydown = function(){

		console.log(evento.code == 'Space');

		if (evento.code === 'Space' || evento.code === 'Enter'){

		tecla.classList.add("ativa");
		
		}

	}

	tecla.onkeyup = function(){
		tecla.classList.remove("ativa");
	}

	
}

//const botaoPom = document.querySelector('.tecla_pom');
//const pom = document.querySelector('#som_tecla_pom');
//botaoPom.addEventListener("click", ()=>{
//	pom.play();
//});
//
//const botaoClap = document.querySelector('.tecla_clap');
//const clap = document.querySelector('#som_tecla_clap');
//botaoClap.addEventListener("click", ()=>{
//	clap.play();
//});
//
//const botaoTim = document.querySelector('.tecla_tim');
//const tim = document.querySelector('#som_tecla_tim');
//botaoTim.addEventListener("click", ()=>{
//	tim.play();
//});

//const botaoPuff = document.querySelector('.tecla_puff');
//const puff = document.querySelector('#som_tecla_puff');
//botaoPuff.addEventListener("click", ()=>{
//	puff.play();//
//});
//
//const botaoSplash = document.querySelector('.tecla_splash');
//const splash = document.querySelector('#som_tecla_splash');
//botaoSplash.addEventListener("click", ()=>{
//	splash.play();
//});
//
//const botaoToim = document.querySelector('.tecla_toim');
//const toim = document.querySelector('#som_tecla_toim')
//botaoToim.addEventListener("click", ()=>{
//	toim.play();
//});

//const botaoPsh = document.querySelector('.tecla_psh');
//const psh = document.querySelector('#som_tecla_psh');
//botaoPsh.addEventListener("click", ()=>{
//	psh.play();
//});

//const botaoTic = document.querySelector('.tecla_tic');
//const tic = document.querySelector('#som_tecla_tic');
//botaoTic.addEventListener("click", ()=>{
//	tic.play();
//});

//const botaTom = document.querySelector('.tecla_tom');
//const tom = document.querySelector('#som_tecla_tom');
//botaTom.addEventListener("click", ()=>{
//	tom.play();
//});
