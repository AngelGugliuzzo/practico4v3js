import './style.css'

import './style.css'
//import javascriptLogo from './javascript.svg'
//import viteLogo from '/vite.svg'

const formulario = document.querySelector('#formulario');

const nombreInput = document.querySelector('#nombre');


const apellidoInput=document.querySelector('#apellido');


const edadInput = document.querySelector('#edad');


const eventoInput = document.querySelector('#nombreEvento');

const paisInput=document.querySelector('#pais');


const cantidadInput=document.querySelector('#cantDePersonas');

const guardarBtn = document.querySelector('#guardar');

const listaDePaises = document.querySelector('#listaDePaises');

const borrarBtn=document.querySelector('#borrar');



guardarBtn.addEventListener('click',(event)=>{
	
		let registro = { 
			 nombre : nombreInput.value,
			 apellido : apellidoInput.value,
			 edad : edadInput.value,
			 elevento : eventoInput.value,
			 pais : paisInput.value,
			 cantidad : cantidadInput.value,   
					  };
					  
					  alert(nombre.value);
					  console.log(nombre.value);
					  alert(apellido.value);
					  console.log(apellido.value);
					  alert(edad.value);
					  console.log(edad.value);
					  alert(elevento.value);
					  console.log(elevento.value);
					  alert(pais.value);
					  console.log(pais.value);
					  alert(cantidad.value);
					  console.log(cantidad.value);

					

			let registrosVarios=JSON.parse(localStorage.getItem("registrosVarios") || []);
			registrosVarios.push(registro);
			localStorage.setItem("registrosVarios",JSON.stringify(registrosVarios));
			
			//formulario.reset(); 
					
                                        });
										

			
										

												

	//borrADO DE LA base
borrarBtn.addEventListener('click',(event)=> {
	localStorage.removeItem('registrosVarios')	
		//borradoDeBase();																																		
									    });	
										