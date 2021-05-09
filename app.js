let boule_curent=document.querySelector('.numero.not');
let result=document.querySelector('#result');
const play_btn=document.querySelector('button.play');
let roll=true;
let conteur=0;

/* Verifie si les num sont compris entre 0 et 100 et retourne un array */
function checkNumber(){
    let numbers=document.querySelectorAll('.entree');
    let numeros_ticket=[];
    let i=0;
    let numero_entree=[];

    for(let i=0;i<numbers.length;i++){
        if(numbers[i].value && numbers[i].value>0 && numbers[i].value<100){
            
            numero_entree.push(numbers[i].value);
        }
        
    }

    if(numero_entree==[] || numero_entree.length<7){
        result.textContent="Erreur Valeur Non Conventionelle .";
        return [];    
    }
    return numero_entree;
    
}

/*----------------  Fonction qui retourne un numero aleatoire   --------------*/
function getRandomNumb(){
  
    return Math.floor(Math.random()*100);
  }

/*---   Modifie le span(boule) et renvoie la valeur de la boule    --*/
function updt_boulle(){
    if(boule_curent)
        boule_curent.textContent=getRandomNumb();
}

/* Fonction pour terminer le jeu */
function endGame() {  
    let num_gagnant=[];
    document.querySelectorAll('.numero').forEach(element => {
        num_gagnant.push(element.textContent);

    });

    document.querySelectorAll('.numero').forEach(element => {
        num_gagnant.push(element.textContent);

    });

    if(num_gagnant.toString()==numero_test.toString()){
        
        result.textContent="Félicitation vous êtes millionnaires";
           
    }else{
        result.textContent="Pas de chance, essaie encore";
                
    }
    reset();
}

/* Fonction reset : rejouer */
function reset() {  
    play_btn.addEventListener('click',play_lotto);
    document.querySelectorAll('.numero').forEach(element => {
        element.classList.add('not');        
    });
    boule_curent=document.querySelector('.numero.not');
}

/*   Simuler le roulement des boules   */
function rouler() {

    conteur++;
    
    if(conteur>30){roll=false}
    if(roll){

        setTimeout(()=>{

            updt_boulle();
            rouler();
        },50);
    }else{

        conteur=0;
        roll=true;
        if(boule_curent.classList){
            boule_curent.classList.remove('not');
            if(boule_curent=document.querySelector('.numero.not')){
                rouler();
            }else{
                
                endGame();
            }
            
        }else{
            return true;
        }

    }
}



/*-- Prototype pour faire sortir les 7 nun au hassard   */
function roll_numero() {
    let lotto_numb=[];
    conteur=0;
    roll=true; 
    

    return lotto_numb;

}


/*----------    Fonction principale du jeu        ----------*/

function play_lotto(){
    let num_gagnant=[];
    play_btn.removeEventListener('click',play_lotto);
    

    /*On verifie les numeros entre avant de commencer le jeu*/ 
    numero_test=checkNumber();

    if(numero_test.length){
        result.textContent='';
        rouler();

    }else{

        play_btn.addEventListener('click',play_lotto);
    }
}

play_btn.addEventListener('click',play_lotto);
