const button_Submit=document.getElementById("button_submit")
const InputName=document.getElementById("input_name")
const InputLastName=document.getElementById("input_lastname")
const NameView=document.getElementById("nombre_view")
const LastNameView=document.getElementById("apellido_view")
const ContainerName=document.getElementById("container_name")
button_Submit.addEventListener("click",twoFunctions,false)
const elementImg=document.getElementById("img-animal")

function ingresarText(){

 const nombre= InputName.value
 const apellido=InputLastName.value

 NameView.innerText=nombre
 LastNameView.innerText=apellido

}

function twoFunctions(){
    ingresarHTML()
    cambiarImagen()

}

function ingresarHTML(){
    const nombre= InputName.value
    const apellido=InputLastName.value
    var contenido=' <div class="persona"> <p  class="p-form" id="nombre_view">'+nombre+' </p> <p class="p-form" id ="apellido_view">'+apellido+'</p> </div>'
    ContainerName.innerHTML+= contenido

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


