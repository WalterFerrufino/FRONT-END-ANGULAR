function cambiar_parrafo(){
    document.getElementById("edit-sobremi").style.display="block";
    let texto = document.getElementById("text-sobremi").innerText;
    console.log(texto);
}

function myFunction2(valor){
    document.getElementById("text-sobremi").innerText=valor;
}
