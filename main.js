const button_Submit=document.getElementById("button_submit")
const InputName=document.getElementById("input_name")
const InputLastName=document.getElementById("input_lastname")
const InputCedula=document.getElementById("input_cedula")
const NameView=document.getElementById("nombre_view")
const LastNameView=document.getElementById("apellido_view")
const ContainerName=document.getElementById("container_name")
button_Submit.addEventListener("click",twoFunctions,false)
const elementImg=document.getElementById("img-animal")
formulario=document.getElementById("Form")
containerColor=document.getElementById("container-color")

window.addEventListener("load",funcionCargar(),false)

function funcionCargar(){

    for (let index = 0; index < localStorage.length; index++) {
        let clave=localStorage.key(index)
        let persona= JSON.parse(localStorage.getItem(clave))
        var contenido=' <div class="persona"> <p  class="p-form" id="nombre_view">'+persona.nombre+' </p> <p class="p-form" id ="apellido_view">'+persona.apellido+'</p> </div>'
        ContainerName.innerHTML+= contenido
       
        
    }
}

document.getElementById("morado").addEventListener("click",Cambiarmorado,false)
document.getElementById("amarillo").addEventListener("click",CambiarAmarillo,false)
document.getElementById("rojo").addEventListener("click",CambiarRojo,false)


function ingresarText(){

 const nombre= InputName.value
 const apellido=InputLastName.value

 NameView.innerText=nombre
 LastNameView.innerText=apellido

}

function twoFunctions(ev){
    ev.preventDefault()
    ingresarHTML()
    cambiarImagen()

}

function ingresarHTML(){
    const nombre= InputName.value
    const apellido=InputLastName.value
    const cedula= InputCedula.value
    var contenido=' <div class="persona"> <p  class="p-form" id="nombre_view">'+nombre+' </p> <p class="p-form" id ="apellido_view">'+apellido+'</p> </div>'
    ContainerName.innerHTML+= contenido
    const persona ={nombre:nombre, apellido: apellido, cedula:cedula}


    localStorage.setItem(cedula,JSON.stringify(persona))


}

function cambiarImagen(){

    let imgText1='https://www.hogarmania.com/archivos/202109/animales-felices-portada-1280x720x80xX.jpg'

    let imgText2="https://assets.afcdn.com/story/20161017/989289_w1200h630c1cx511cy250.jpg"

    let currentlyimg=elementImg.getAttribute("src")

    if(imgText1!=currentlyimg){


        elementImg.setAttribute("src",imgText1)
    }
    else{
        elementImg.setAttribute("src",imgText2)
    }


}

function Cambiarmorado(){
containerColor.classList.toggle('morado')
containerColor.classList.remove('rojo')
containerColor.classList.remove('amarillo')


}
function CambiarAmarillo(){
    containerColor.classList.toggle('amarillo')
    containerColor.classList.remove('rojo')
    containerColor.classList.remove('morado')

}function CambiarRojo(){
containerColor.classList.toggle('rojo')
containerColor.classList.remove('morado')
containerColor.classList.remove('amarillo')

}


