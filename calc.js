let myInput = document.getElementById("aff-inp");
//myDis() pour extract et afficher la valeur des btns
function myDis(num){
    myInput.value += num;
}

// faire() pour calculer les valeurs ou faire les operaion  
function faire(){
    try{
        myInput.value = eval(myInput.value);
    }
    catch(err){
        alert("invalid")
    }
}

//myEfac pour effacer l'affichage
function myEfac(){
    myInput.value = "";
} 

//mySupr pour supprimer un element  
function mySupr(){
    myInput.value = myInput.value.slice(0,-1)
}