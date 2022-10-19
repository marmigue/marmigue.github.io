//Recordar: agregar la funcion onchange sobre los inputs de texto
const inputNombre = document.querySelector( ".input-name" );
const inputFecha = document.querySelector( ".input-fecha" );
const selectGenero = document.querySelector( ".select-genero" );
const selectEstCiv = document.querySelector( ".select-estado-civil" );
const selectOcup = document.querySelector( ".select-ocupacion" );
const selectCiudad = document.querySelector( ".select-ciudad" );
const inputTrabajo = document.querySelector( ".input-trabajo" );
const inputAL = document.querySelector( ".input-AL" );
const inputCI = document.querySelector( ".input-ci" );
const inputIngresos = document.querySelector( ".input-ingresos" );
const inputDir = document.querySelector( ".input-dir" );
const inputEmail = document.querySelector( ".input-email" );
const inputPhone = document.querySelector(".input-phone");
const inputFirstRef = document.querySelector( ".input-first-ref" );
const inputSecondRef = document.querySelector( ".input-second-ref" );
const inputRefComer = document.querySelector( ".input-ref-comer" );
const inputNumberCorp = document.querySelector( ".input-number-corp" );
const btnAtras = document.querySelector( ".button-atras" );
const btnSiguiente = document.querySelector( ".button-siguiente" );
const btnVolver = document.querySelector( ".button-volver" );
const progStep = [...document.querySelectorAll( ".progress-step" )];
const activeForm = [...document.querySelectorAll( ".form" )];
const inputEnt = document.querySelector( ".input-entidad" );
const inputCarg = document.querySelector( ".input-cargo" );
const inputEntFam = document.querySelector( ".input-entidad-fam" );
const inputCargFam = document.querySelector( ".input-cargo-fam" );
const inputSiPep = document.getElementById( "sipep" );
const inputNoPep = document.getElementById( "nopep" );
const inputFamSi = document.getElementById( "fam-pol-si" );
const inputFamNo = document.getElementById( "fam-pol-no" );
const inputPep = document.querySelector( ".input-pep1" );
const inputPepFam = document.querySelector( ".input-pep2" );
const loader = document.querySelector( ".loader" );
const responsiveStep = [...document.querySelectorAll( ".responsive-step" )];
const progressResponsive = document.querySelector( ".progress-responsive" );
const progressContainer = document.querySelector( ".container-progress" );
const btnConfirm = document.querySelector( ".button-confirm" );
const confirmContainer = document.querySelector( ".confirm-container" );
const formContainer = document.querySelector( ".form-container-flex" );
const info = [...document.querySelectorAll( ".info" )];
const pepConfirm = document.querySelector( ".pep-confirm" );
const pepFamConfirm = document.querySelector( ".pep-fam-confirm" );
const pepEnteidadConfirm = [...document.querySelectorAll( ".info-pep" )];
const pepFamEntidadConfirm = [...document.querySelectorAll( ".info-pep-fam" )];
const fotoFrontalConfirm = document.querySelector( ".foto-frontal-confirm" );
const fotoTraseraConfirm = document.querySelector( ".foto-trasera-confirm" );
const selfieConfirm = document.querySelector( ".selfie-confirm" );
const datosConfirmados = document.querySelector( ".datos-confirmados" );
const btnContainer = document.querySelector( ".button-container" );
const inputCredito = document.querySelector( ".input-credito-solicitar" );//valor del prestamos solicitado
const inputNameRef = document.querySelector( ".input-name-ref" );//nombre de la primera referencia
const inputNameSecondRef = document.querySelector( ".input-name-second-ref" );//nombre de la segunda referencia personal
const inputNameComercial = document.querySelector( ".input-name-comercial" );//nombre primera referencia comercial
const aLink = document.querySelector( '.link' );
const numeroCasa = document.querySelector( ".numero-casa" );
const inputCalle1 = document.querySelector( ".input-calle1" );
const inputCalle2 = document.querySelector( ".input-calle2" );
const ciudadesTrabajo = document.querySelector( ".select-ciudad-trabajo" );
const barrioTrabajo = document.querySelector( ".input-dir-trabajo" );
const calle1Trabajo = document.querySelector( ".input-calle1-trabajo" );
const calle2Trabajo = document.querySelector( ".input-calle2-trabajo" );
const edificioTrabajo = document.querySelector( ".numero-edificio-trabajo" );

console.log( edificioTrabajo );
//Expresiones Regulares usadas para la validacion
const regExpPhone = /^09[0-9]{2}([\s-.]?[0-9]{3}){2}$/;
const regExpNum = /^\d+$/; //Se tiene que mejorar la expresion para validar simbolos
const regExpLetras = /^[a-zA-Z\u00C0-\u017F\s]+$/;//probar casos
const regExpCI = /^([\d]{1,3})?([\s.-]?\d{3}){2}$/;
const regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regExpAll = /./;

let completedPep1 = false;
let completedPep2 = false;
let jump = 20;
let fecha = new Date();
const currentYear = fecha.getFullYear();
const currentMonth = fecha.getMonth()+1;
const currentDay = fecha.getDate();


progStep[0].classList.add( "step-active" ); //establece el paso 1 como activo
responsiveStep[0].style.display = 'inline';
progressResponsive.style.width = '20%';

let currentPointer = 1;//valor al que se apunta cuando se carga el form-1
let previousPointer = 0;
btnAtras.disabled = true;
btnAtras.classList.add( "button-disabled" );
btnSiguiente.disabled = true;
btnSiguiente.classList.add( "button-disabled" );

// console.log( inputNoPep );


const disableButtonNext = ()=>{
  btnSiguiente.disabled = true;
  btnSiguiente.classList.add( "button-disabled" );
}


const infoConfirm = ()=>{
  
  let pepBool1 = false;
  let pepBool2 = false;

  let fech = inputFecha.value.split( '-' );
  let newFech = `${fech[2]}-${fech[1]}-${fech[0]}`;
  
  info[0].innerText = inputNombre.value;
  info[1].innerText = inputCI.value;
  info[2].innerText = newFech;
  info[3].innerText = selectGenero.value;
  info[4].innerText = selectEstCiv.value;
  info[5].innerText = inputTrabajo.value;
  info[6].innerText = inputAL.value;
  info[7].innerText = selectOcup.value;
  info[8].innerText = inputIngresos.value;
  info[9].innerText = inputEmail.value;
  info[10].innerText = inputPhone.value;
  info[11].innerText = inputFirstRef.value;
  info[12].innerText = inputSecondRef.value;
  info[13].innerText = inputRefComer.value;
  info[14].innerText = selectCiudad.value;
  info[15].innerText = inputDir.value;
  if( inputSiPep.value !== ''){
    info[16].innerText = 'Si';
    pepConfirm.style.display = 'block';
    pepEnteidadConfirm[0].innerText = inputEnt.value;
    pepEnteidadConfirm[1].innerText = inputCarg.value;
    pepBool1 = true;
  } else{
    info[16].innerText = 'No';
    pepBool1 = false;
  }
  if( inputFamSi.value !== '' ){
    info[17].innerText = 'Si';
    pepFamConfirm.style.display = 'block';
    pepFamEntidadConfirm[0].innerText = inputEntFam.value;
    pepFamEntidadConfirm[1].innerText = inputCargFam.value;
    pepBool2 = true;
  }else{
    info[17].innerText = 'No';
    pepBool2 = false;
  }
  fotoFrontalConfirm.src = lienzo1.toDataURL();
  fotoTraseraConfirm.src = lienzo2.toDataURL();
  selfieConfirm.src = lienzo3.toDataURL();
  
  let subCad = inputNombre.value.split( ' ' );
  
  
  let send1 = {
    "tipoPersona": "F",
    "tipoDocumento": "CI",
    "numeroDocumento": inputCI.value,
    "primerNombre": subCad[0],
    "primerApellido": subCad[1],
    "fechaNacimiento": inputFecha.value, 
    "estadoCivil": selectEstCiv.value,
    "idNacionalidad": 1,
    "sexo": selectGenero.value,
    "telefono": "021456789",
    "correoElectronico": inputEmail.value,
    "numeroCelular": inputPhone.value,
    "direccion": inputDir.value,
    "idLocalidad": selectCiudad.selectedIndex,
    "lugarTrabajo": inputTrabajo.value,
    "ocupacionLaboral": inputAL.value,
    "ingresosMensuales": inputIngresos.value,
    "pep": ( pepBool1 || pepBool2 ),
    "referenciasPersonales": [
      {
        "origenReferencia": inputNameRef.value,
        "numeroTelefono": inputFirstRef.value
      },
        {
          "origenReferencia": inputNameSecondRef.value,
          "numeroTelefono": inputSecondRef.value
        }
      ],
      "referenciasComerciales": [
        {
          "origenReferencia": inputNameComercial.value,
          "numeroTelefono": inputRefComer.value
        },
    ],
    "montoSolicitado": inputCredito.value,
    "idMoneda": "GS",
    "idModalidad": 65,
    "plazo": 360,
    "comentarioCliente": "PRUEBA"
  }
  // console.log( JSON.stringify( send1 ) );
  // prueba( 'http://192.168.0.103:3000/api/creditos/finlatina/solicitar');
}

const setForm = ( prevous, current )=>{ //coloca un formulario en activo y desactiva el anterior
  activeForm[current].style.display = "block";
  activeForm[ prevous ].style.display = "none";
}

const checkButtonState = (regExp, e)=>{ //verifica si el input esta siendo llenado y elimina la clase error
  const field = e.target;//Tambien se encarga de cambiar el estado del boton "siguiente"
  const fieldvalue = e.target.value;
  field.nextElementSibling.classList.remove( "error" );
  field.style.border = '1px solid #ccc';
  field.nextElementSibling.innerText = "";
  if( regExp.test( fieldvalue ) ){
    formCompleted( previousPointer );
  }else{
    btnSiguiente.disabled = true;
    btnSiguiente.classList.add( "button-disabled" );
  }
}

const moverSiguiente = ()=>{
  if( currentPointer < 5 ){
    btnAtras.disabled = false;
    btnAtras.classList.remove( "button-disabled" );
    aLink.classList.add( "link-disabled" );
    // console.log( 'CUrrent pointer = ' + currentPointer );
//     console.log( formCompleted(currentPointer) );
    if( formCompleted( currentPointer ) === false ){
      btnSiguiente.disabled = true;
      btnSiguiente.classList.add( "button-disabled" );
    }
    progStep[currentPointer].classList.add( "step-active" );
    responsiveStep[previousPointer].style.display = 'none';
    responsiveStep[currentPointer].style.display = 'inline';
    progressResponsive.style.width = `${jump+=20}%`;

    setForm( previousPointer, currentPointer );
  }else{
    apagarCamara();
    progressContainer.style.display = 'none';
    btnSiguiente.style.display = 'none';
    btnConfirm.style.display = 'inline';
    confirmContainer.style.display = 'block';
    formContainer.style.display = 'none';
    btnAtras.style.display = 'none';
    btnVolver.style.display = 'inline';
    infoConfirm();
  }
  currentPointer++;
  previousPointer++;
  if(currentPointer === 5){
    loader.style.display = 'inline';
    video.style.display = 'none';
    iniciarConexion();
  }
}


const moverAtras = ()=>{
  if( previousPointer > 0 ){
    btnSiguiente.disabled = false;
    btnSiguiente.classList.remove( "button-disabled" );
    aLink.classList.remove( "link-disabled" );
    progStep[previousPointer].classList.remove( "step-active" );
    responsiveStep[previousPointer].style.display = 'none';
    responsiveStep[previousPointer-1].style.display = 'inline';
    progressResponsive.style.width = `${jump-=20}%`;

    

    setForm( currentPointer-1, previousPointer-1 );
    currentPointer--;
    previousPointer--;
    if( previousPointer === 0 ){
      btnAtras.disabled = true;
      btnAtras.classList.add( "button-disabled" );
    }else if( currentPointer === 4 ){
      apagarCamara();
    }
  }
}

/*------ Form completed verifica si los campos de los formularios estan llenos -------*/
/*------Si los inputs estan completos procede a activar el boton de siguiente ------- */

const formCompleted = ( current )=>{ //verifica si el primer formulario esta lleno
  let dataForm = activeForm[current];
  let cont = 0;
  let valid = false;
  // console.log( 'Se inicio formCompleted' );
  if( current === 0 ){
    for( let i = 0; i<8; i++ ){
      if( dataForm[i].value != '' ){
        let next = dataForm[i].nextElementSibling
        if( dataForm[i].tagName !== 'SELECT' ){
          if( next.textContent === '' ){
            cont++;
          }
        }else{
          let pText = dataForm[i].parentElement.nextElementSibling.textContent;
          if( pText === '' ){
            cont++;
          }
        }
      }
    }if( cont === 8 ){ //cambiar el valor para cuando se agreguen mas input para el form 1
      btnSiguiente.disabled = false;
      btnSiguiente.classList.remove( "button-disabled" );
      aLink.classList.remove( "link-disabled" );
      valid = true;
    }
  }else if( current === 1 ){
    for( let i = 0; i<12; i++ ){
      if( dataForm[i].value != '' ){
        let next = dataForm[i].nextElementSibling;

        if( dataForm[i].tagName !== 'SELECT' ){
          if( next.textContent === '' ){
            cont++;
          }
        }else{
          let pText = dataForm[i].parentElement.nextElementSibling.textContent;
          if( pText === '' ){
            cont++;
          }
        }
      }
    }
    if( cont === 12 ){ //cambiar el valor para cuando se agreguen mas input al form 2
      btnSiguiente.disabled = false;
      btnSiguiente.classList.remove( "button-disabled" );
      aLink.classList.remove( "link-disabled" );
      valid = true;
    }
  }else if( current === 2 ){
    for( let i = 0; i<10; i++ ){
      if( dataForm[i].value != '' ){
        cont++;
      }
    }
    if( cont === 10 ){
      btnSiguiente.disabled = false;
      btnSiguiente.classList.remove( "button-disabled" );
      aLink.classList.remove( "link-disabled" );
      valid = true;
    }
  }else if( current === 3 ){
    if( completedPep1 == true && completedPep2 == true ){
      btnSiguiente.disabled = false;
      btnSiguiente.classList.remove( "button-disabled" );
      aLink.classList.remove( "link-disabled" );
      valid = true;
    }
  }else if( current === 4 ){
    if( fotosTomadas[0] === true && fotosTomadas[1] === true && fotosTomadas[2] === true ){
      btnSiguiente.disabled = false;
      btnSiguiente.classList.remove( "button-disabled" );
      aLink.classList.remove( "link-disabled" );
      valid = true;
    }
  }
  return valid;
}


/*-----------------------------Eventos del form 4------------------------------------------- */

const setInputRadioValue = ( data, e )=>{
  const field = e.target;
  e.target.value = data;
  if( data === 'si' && field === inputSiPep ){
    inputNoPep.value = '';
    inputPep.style.display = 'block';
  }else if( data === 'no' && field === inputNoPep ){
    inputSiPep.value = '';
    inputPep.style.display = 'none';
    inputEnt.value = '';
    inputCarg.value = '';
  }else if( data === 'si' && field === inputFamSi ){
    inputFamNo.value = '';
    inputPepFam.style.display = 'block';
  }else{
    inputFamSi.value = '';
    inputPepFam.style.display = 'none';
    inputEntFam.value = '';
    inputCargFam.value = '';
  }
}

/*--------------------------------------------------------------------------------------------*/

/*-------------------Funcion para analizar el estado de los input en el form 4--------------- */


const checkSelectState = ( inputNo, inputEntidad, inputCargo, pep )=>{
  if( inputNo.value !== '' ){
    ( pep===1 )? completedPep1 = true : completedPep2 = true;
  }else if( inputEntidad.value !== '' && inputCargo.value !== '' ){
    ( pep===1 )? completedPep1 = true : completedPep2 = true;
  }else{
    console.log( 'Error' );
  }
}


/*------------------------------------------------------------------------------------------- */

/*-------------Funcion para resetear los estados ( completedPep1 y competedPep2)-------------- */

const resetStatePep = (value)=>{
  if( value === 1 ){
    completedPep1 = false;
    btnSiguiente.disabled = true;
    btnSiguiente.classList.add( "button-disabled" );
  }else{
    completedPep2 = false;
    btnSiguiente.disabled = true;
    btnSiguiente.classList.add( "button-disabled" );
  }
}

/*-------------------------------------------------------------------------------------------- */

btnSiguiente.addEventListener( "click", moverSiguiente );//dispara el evento para cambiar al siguiente form
btnSiguiente.addEventListener( "click", ()=>formCompleted( currentPointer-1 ) );
btnAtras.addEventListener( "click", moverAtras );//dispara el evento para cambiar al form anterior

const isEmpty = ( value ) =>{//verifica si el campo esta vacio
  if( value.trim().length === 0  ){
    return true;
  }else{
    return false;
  }
}

const setError = ( field, text )=>{//establece la etiqueta p(por debajo del imput) con un valor de error.
  field.style.border = '1px solid red';
  if( field.tagName === 'SELECT' ){
    const padre = field.parentElement;
    padre.nextElementSibling.innerText = text
    padre.nextElementSibling.classList.add( "error" );
    disableButtonNext();
}else{
    field.nextElementSibling.innerText = text;
    field.nextElementSibling.classList.add( "error" );
  }
}


const emptyInput = (e) => { //verifica que un imput esta vacio
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Complete el campo" );
  }else{
    field.nextElementSibling.innerText = "";
  }
}

const checkEmail = (e)=>{
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Agregue un Email" );
  }else if( regExpEmail.test( fieldvalue ) ){
    field.nextElementSibling.innerText = "";
  }else{
    setError( field, "Correo electrónico incorrecto" );
  }
}

const ciValidation = (e)=>{
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Ingrese el numero de ci" );
  }else if( regExpCI.test( fieldvalue ) ){
    field.nextElementSibling.innerText = "";
  }else{
    setError( field, "Puede ingresar solamente numeros" );
  }
}

const checkText = ( e )=>{
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Complete el campo" );
  } else if( regExpLetras.test( fieldvalue ) ){
    field.nextElementSibling.innerText = "";
  }else{
    setError( field, "Ingrese una palabra" );
  }
}

const setSelect = ( e ) => {
  const field = e.target;
  const fieldvalue = e.target.value;
  const padre = field.parentElement;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Seleccione una opcion" );
    formCompleted( currentPointer-1 );
  }else{
    padre.nextElementSibling.innerText = '';
    field.style.border = '1px solid #ccc';
    // padre.nextElementSibling.classList.add( "selected" );
    formCompleted( currentPointer-1 );
  }
}


const ingresos = ( e )=>{
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Seleccione un valor para el ingreso" );
  }else if( regExpNum.test( fieldvalue ) ){
    field.nextElementSibling.innerText = "";
  }else{
    setError( field, "Ingrese un valor correcto" );
  }
}

const checkNumberPhone = (e)=>{
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Ingrece un numero de Celular" );
  } else if( !regExpPhone.test( fieldvalue )){
    setError( field, "Ingrese un número de celular válido" );
  } else {
    field.nextElementSibling.innerText = "";
  }
}


const volverInicio = ()=>{
  progressContainer.style.display = 'block';
  formContainer.style.display = 'block';
  confirmContainer.style.display = 'none';
  btnVolver.style.display = 'none';
  btnConfirm.style.display = 'none';
  btnAtras.style.display = 'inline';
  btnSiguiente.style.display = 'inline';
  currentPointer--;
  previousPointer--;
  iniciarCamara( dispositivosDisponibles[0].deviceId );
}


const enviarDatos = ()=>{
  datosConfirmados.style.display = 'block';
  formContainer.style.display = 'none';
  confirmContainer.style.display = 'none';
  btnContainer.style.display = 'none';
}


const validarFecha = ()=>{
  const inputFechaArray = inputFecha.value.split( '-' );
  let year = inputFechaArray[0];
  if( year < currentYear  && year > 1900 ){
    let edad = mayorDeEdad( inputFechaArray );
    if( edad < 18 ){
      setError( inputFecha, 'Debes ser mayor de edad' );
    }else{
      inputFecha.nextElementSibling.innerText = '';
      inputFecha.style.border = '1px solid #ccc';
      formCompleted( 0 );
    }
  }else{
    setError( inputFecha, 'Fecha no valida' );
  }
  formCompleted[0];
}


const resetErrorStateDate = ()=>{
  inputFecha.nextElementSibling.innerText = '';
  inputFecha.style.border = '1px solid #ccc';
}

const mayorDeEdad = ( dato )=>{

  let year = parseInt(dato[0]);
  let month = parseInt( dato[1] );
  let day = parseInt( dato[2] );

  let edad = currentYear - year;
  
  if( currentMonth < month ){
    edad--;
  }else if( currentMonth === month ){
    if( currentDay < day ){
      edad--;
    }
  }

  return edad;
  
}



const isInclude = ( classList, stringValue )=>{//valida si el string esta contenido dentro de la classList de un input
  for (let className of classList ) {
      if( className == stringValue ){
          return true;
      }
  }
  return false
}


const CheckNumber = (e)=>{
  const field = e.target;
  const fieldvalue = e.target.value;
  if( isEmpty( fieldvalue ) ){
    setError( field, "Seleccione el numero de casa" );
  }else if( regExpNum.test( fieldvalue ) ){
    field.nextElementSibling.innerText = "";
  }else{
    setError( field, "Ingrese un numero" );
  }
}


// phone.addEventListener( "blur",  checkNumber);
selectGenero.addEventListener( "blur", setSelect);
selectGenero.addEventListener( "change", setSelect );
selectEstCiv.addEventListener( "blur", setSelect );
selectEstCiv.addEventListener( "change", setSelect );
selectOcup.addEventListener( "blur", setSelect );
selectOcup.addEventListener( "change", setSelect );
selectCiudad.addEventListener( "blur", setSelect );
selectCiudad.addEventListener( "change", setSelect );
ciudadesTrabajo.addEventListener( "blur", setSelect );
ciudadesTrabajo.addEventListener( "change", setSelect );
inputNameRef.addEventListener( "blur", checkText );
inputNameRef.addEventListener( "keyup", (e)=> checkButtonState(regExpLetras, e) );
inputNameSecondRef.addEventListener( "blur", checkText );
inputNameSecondRef.addEventListener( "keyup", (e)=> checkButtonState(regExpLetras, e) );
inputNameComercial.addEventListener( "blur", checkText );
inputNameComercial.addEventListener( "keyup", (e)=> checkButtonState(regExpLetras, e) );
inputTrabajo.addEventListener( "blur", emptyInput );
inputTrabajo.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );//tener en cuenta cambiar la exp reg
inputFecha.addEventListener( "blur", validarFecha );
inputFecha.addEventListener( "change", resetErrorStateDate );
inputAL.addEventListener( "blur", emptyInput );
inputAL.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
inputDir.addEventListener( "blur", emptyInput );
inputDir.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
barrioTrabajo.addEventListener( "blur", emptyInput );
barrioTrabajo.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
inputNombre.addEventListener( "blur", checkText );
inputNombre.addEventListener( "keyup", (e)=> checkButtonState(regExpLetras, e) );
inputCI.addEventListener( "blur", ciValidation );
inputCI.addEventListener( "keyup", (e)=> checkButtonState( regExpCI, e ) );
inputIngresos.addEventListener( "blur", ingresos );
inputIngresos.addEventListener( "keyup", (e)=> checkButtonState( regExpNum, e ) );
inputCredito.addEventListener( "blur", ingresos );
inputCredito.addEventListener( "keyup", (e)=> checkButtonState( regExpNum, e ) );
inputEmail.addEventListener( "blur", checkEmail );
inputEmail.addEventListener( "keyup", (e)=> checkButtonState( regExpEmail, e ) );
inputPhone.addEventListener( "blur", checkNumberPhone );
inputPhone.addEventListener( "keyup", (e)=> checkButtonState( regExpPhone, e ) );
inputFirstRef.addEventListener( "blur", checkNumberPhone );
inputFirstRef.addEventListener( "keyup", (e)=> checkButtonState( regExpPhone, e ) );
inputSecondRef.addEventListener( "blur", checkNumberPhone );
inputSecondRef.addEventListener( "keyup", (e)=> checkButtonState( regExpPhone, e ) );
inputRefComer.addEventListener( "blur", checkNumberPhone );
inputRefComer.addEventListener( "keyup", (e)=> checkButtonState( regExpPhone, e ) );
inputNumberCorp.addEventListener( "blur", checkNumberPhone );
inputNumberCorp.addEventListener( "keyup", (e)=> checkButtonState( regExpPhone, e ) );
inputEnt.addEventListener( "blur", emptyInput );
inputEnt.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
inputCarg.addEventListener( "blur", emptyInput );
inputCarg.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
inputEntFam.addEventListener( "blur", emptyInput );
inputEntFam.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
inputCargFam.addEventListener( "blur", emptyInput );
inputCargFam.addEventListener( "keyup", (e)=>checkButtonState( regExpAll, e ) );
inputSiPep.addEventListener( "click", (e)=> setInputRadioValue( 'si', e ) );
inputNoPep.addEventListener( "click", (e)=> setInputRadioValue( 'no', e ) );
inputFamSi.addEventListener( "click", (e)=> setInputRadioValue( 'si', e ) );
inputFamNo.addEventListener( "click", (e)=> setInputRadioValue( 'no', e ) );
inputNoPep.addEventListener( "click", ()=> checkSelectState( inputNoPep, inputEnt, inputCarg, 1 ) );
inputNoPep.addEventListener( "click", ()=> formCompleted( currentPointer-1 ) );
inputSiPep.addEventListener( "click", ()=> resetStatePep(1) );
inputEnt.addEventListener( "keyup", ()=> checkSelectState( inputNoPep, inputEnt, inputCarg, 1 ) );
inputCarg.addEventListener( "keyup", ()=> checkSelectState( inputNoPep, inputEnt, inputCarg, 1 ) );
inputFamNo.addEventListener( "click", ()=> checkSelectState( inputFamNo, inputEntFam, inputCargFam, 2 ) );
inputFamNo.addEventListener( "click", ()=> formCompleted( currentPointer-1 ) );
inputFamSi.addEventListener( "click", ()=>resetStatePep(2) );
inputEntFam.addEventListener( "keyup", ()=> checkSelectState( inputFamNo, inputEntFam, inputCargFam, 2 ) );
inputCargFam.addEventListener( "keyup", ()=>checkSelectState(inputFamNo, inputEntFam, inputCargFam, 2 ) );
btnVolver.addEventListener( "click", volverInicio );
btnConfirm.addEventListener( "click", enviarDatos );
inputCalle1.addEventListener( "blur", emptyInput );
inputCalle1.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
inputCalle2.addEventListener( "blur", emptyInput );
inputCalle2.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
numeroCasa.addEventListener( "blur", CheckNumber );
numeroCasa.addEventListener( "keyup", (e)=> checkButtonState( regExpNum, e ) );

calle1Trabajo.addEventListener( "blur", emptyInput );
calle1Trabajo.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
calle2Trabajo.addEventListener( "blur", emptyInput );
calle2Trabajo.addEventListener( "keyup", (e)=> checkButtonState( regExpAll, e ) );
edificioTrabajo.addEventListener( "blur", CheckNumber );
edificioTrabajo.addEventListener( "keyup", (e)=> checkButtonState( regExpNum, e ) );

/*------------------Inicio de funciones relacionadas al manejo de la camara---------------------- */

const video = document.querySelector( ".video" );
const select = document.getElementById( "select-disp" );
const lienzo1 = document.querySelector( ".lienzo-1" );
const lienzo2 = document.querySelector( ".lienzo-2" );
const lienzo3 = document.querySelector( ".lienzo-3" );
const noImage1 = document.querySelector( ".no-image-1" );
const noImage2 = document.querySelector( ".no-image-2" );
const noImage3 = document.querySelector( ".no-image-3" );
const buttonFoto = document.querySelector( ".button-foto" );
const delete1 = document.querySelector( ".delete-1" );
const delete2 = document.querySelector( ".delete-2" );
const delete3 = document.querySelector( ".delete-3" );
let listaCargada = false;

const tieneSoporteUserMedia = ()=> {
	return !!(
    navigator.getUserMedia || (navigator.mozGetUserMedia ||
    navigator.mediaDevices.getUserMedia) ||
    navigator.webkitGetUserMedia || navigator.msGetUserMedia
  );
}

navigator.getMedia =
      (navigator.getUserMedia ||
      (navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia) ||
      navigator.webkitGetUserMedia || navigator.msGetUserMedia);

let fotosTomadas = [ false, false, false ];
let dispositivosDisponibles = [];
let localStream;




const llenarSelect = ()=>{
  navigator.mediaDevices.enumerateDevices()
  .then( dispositivos => {
    if( listaCargada === false ){
      listaCargada = true;
      dispositivos.forEach( dispositivo=>{
        const tipo = dispositivo.kind;
        if( tipo === 'videoinput' ){
          dispositivosDisponibles.push( dispositivo );
        }
      } );
      if( dispositivosDisponibles.length > 0 ){
        dispositivosDisponibles.forEach( dispositivoVideo => {
          const option = document.createElement( 'option' );
          option.value = dispositivoVideo.deviceId;
          option.text = dispositivoVideo.label;
          select.appendChild( option );
        } );
      }
    }
    iniciarCamara(dispositivosDisponibles[0].deviceId);
  });
}

const iniciarConexion = ()=>{
  navigator.getMedia( {video: true, audio: false}, streamObtenido=>{
    try{
      localStream = streamObtenido;
      apagarCamara();
      llenarSelect();
    }catch(error){
      video.srcObject = null;
    }
  }, error=>{
    console.log( error );//TODO: manejar los errores de forma eficiente
  } );
}


const iniciarCamara = ( idObtenido )=>{
  navigator.getMedia( {
    audio:false,
    video:{
      deviceId: idObtenido
    }
  }, streamObtenido=>{
    try{
      localStream = streamObtenido;
      video.srcObject = streamObtenido;
      video.play();
      video.style.display = 'inline';
      loader.style.display = 'none';
    }catch(error){
      video.srcObject = null;
    }
  }, error=>{
    console.log( error );//TODO: manejar los errores de forma eficiente para que el usuario vea el problema
  } );
}


const apagarCamara = ()=>{
  let arr = [...localStream.getTracks()];
  arr.forEach( value => {
    value.stop();
  } );
  video.srcObject = null;
  video.pause();
}


const cambiarDispositivo = ()=>{
  if( localStream ){
    localStream.getTracks().forEach( track => track.stop() );
  }
  iniciarCamara( select.value );
}

const pintar = (indice) =>{
  if( indice === 0 ){
    noImage1.style.display = 'none';
    lienzo1.style.display = 'inline';
    let ctx = lienzo1.getContext('2d');
    ctx.drawImage(video, 0, 0, lienzo1.width, lienzo1.height );
    fotosTomadas[0] = true;
  }else if( indice === 1 ){
    noImage2.style.display = 'none';
    lienzo2.style.display = 'inline';
    let ctx = lienzo2.getContext('2d');
    ctx.drawImage(video, 0, 0, lienzo2.width, lienzo2.height );
    fotosTomadas[1] = true;
  }else if( indice === 2 ){
    noImage3.style.display = 'none';
    lienzo3.style.display = 'inline';
    let ctx = lienzo3.getContext('2d');
    ctx.drawImage(video, 0, 0, lienzo3.width, lienzo3.height );
    fotosTomadas[2] = true;
  }
}


const tomarFoto = ()=>{
  let i = null;
  for( i = 0; i<3; i++ ){
    if( fotosTomadas[i] === false ){
      break;
    }
  }
  if( i !== null ){
    pintar( i );
  }
  formCompleted(4);
}

const eliminarFoto = ( indice )=>{
  if( indice === 0){
    fotosTomadas[0] = false;
    lienzo1.style.display = 'none';
    noImage1.style.display = 'inline';
    btnSiguiente.disabled = true;
    btnSiguiente.classList.add( "button-disabled" );
  }else if( indice === 1 ){
    fotosTomadas[1] = false;
    lienzo2.style.display = 'none';
    noImage2.style.display = 'inline';
    btnSiguiente.disabled = true;
    btnSiguiente.classList.add( "button-disabled" );
  }else if( indice === 2 ){
    fotosTomadas[2] = false;
    lienzo3.style.display = 'none';
    noImage3.style.display = 'inline';
    btnSiguiente.disabled = true;
    btnSiguiente.classList.add( "button-disabled" );
  }
}


buttonFoto.addEventListener( "click", tomarFoto );
delete1.addEventListener( "click", ()=> eliminarFoto( 0 ) );
delete2.addEventListener( "click", ()=> eliminarFoto( 1 ) );
delete3.addEventListener( "click", ()=> eliminarFoto( 2 ) );
select.addEventListener( "change", cambiarDispositivo );

const setCities = async ()=>{
  const response = await fetch( 'https://apidesa.vaquita.com.py/api/ciudades' );
  const data = await response.json();
  for (let value of data) {
      const option = document.createElement( 'option' );
      option.text = value.nombre;
      option.value = value.nombre;
      option.id = value.ciudadFinlatina;
      selectCiudad.append(option);
  }
}


const setCiudadesTrabajo = async ()=>{
  const response = await fetch( 'https://apidesa.vaquita.com.py/api/ciudades' );
  const data = await response.json();
  for (let value of data) {
      const option = document.createElement( 'option' );
      option.text = value.nombre;
      option.value = value.nombre;
      option.id = value.ciudadFinlatina;
      ciudadesTrabajo.append(option);
  }
}


setCities();
setCiudadesTrabajo();


// var headersToken = new Headers();
// headersToken.append("Content-Type", "application/x-www-form-urlencoded");

// var urlencoded = new URLSearchParams();
// urlencoded.append("grant_type", "client_credentials");
// urlencoded.append("client_id", "cli-publico-sin-usuario");
// urlencoded.append("client_secret", "c48d0a0c-cbf5-4182-b35f-53f7d6832210");

// var requesToken = {
//   method: 'POST',
//   headers: headersToken,
//   body: urlencoded,
//   redirect: 'follow'
// };
  
// const getToken = async (API, options)=>{

//   const response = await fetch( API, options );
//   const data = await response.json();
//   console.log( response.status );
//   console.log( data.access_token );
  
//   var headersPeticion = new Headers();
//   headersPeticion.append("Content-Type", "aplication/json");
//   headersPeticion.append("Access-Control-Allow-Origin", "*");
//   headersPeticion.append("Authorization", `Bearer ${data.access_token}`);

//   var raw = JSON.stringify({
//     "tipoPersona": "F",
//     "tipoDocumento": "CI",
//     "numeroDocumento": "4498993",
//     "primerNombre": "A",
//     "primerApellido": "V",
//     "fechaNacimiento": null,
//     "estadoCivil": "S",
//     "idNacionalidad": 1,
//     "sexo": "F",
//     "telefono": "021456789",
//     "correoElectronico": "ap@gmail.com",
//     "numeroCelular": "0986123456",
//     "direccion": "Destacamento cazal 123456",
//     "idLocalidad": 1001,
//     "montoSolicitado": 1,
//     "idMoneda": "GS",
//     "idModalidad": 65,
//     "plazo": 360,
//     "comentarioCliente": "PRUEBA"
//   });

//   var requestOptions2 = {
//     method: 'POST',
//     mode: 'cors',
//     headers: headersPeticion,
//     body: raw,
//     redirect: 'follow'
//   };


//   fetch("https://secure.finlatina.com.py:8443/desa.gw-safi/api/1.0/public/solicitudes/prestamos", requestOptions2)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

    

// }

// getToken( "https://secure.finlatina.com.py/auth/realms/vaquita-desa/protocol/openid-connect/token", requesToken );


// http://192.168.0.103/api/creditos/finlatina/solicitar


const prueba = async (API)=>{

  var raw = JSON.stringify({
    "tipoPersona": "F",
    "tipoDocumento": "CI",
    "numeroDocumento": "4498993",
    "primerNombre": "A",
    "primerApellido": "V",
    "fechaNacimiento": null,
    "estadoCivil": "S",
    "idNacionalidad": 1,
    "sexo": "F",
    "telefono": "021456789",
    "correoElectronico": "ap@gmail.com",
    "numeroCelular": "0986123456",
    "direccion": "Destacamento cazal 123456",
    "idLocalidad": 1001,
    "montoSolicitado": 1,
    "idMoneda": "GS",
    "idModalidad": 65,
    "plazo": 360,
    "comentarioCliente": "PRUEBA"
  });


  let requestOptions2 = {
    header:{
      'Content-Type' : 'aplication/json'
    },
    method: 'POST',
    body: raw
  }
  try{
    const response = await fetch(API, requestOptions2);
    console.log( 'Prueba' );
    console.log( response );
  }catch(e){
    console.log(e);
  }
}



