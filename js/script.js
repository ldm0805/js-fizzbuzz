// Creare un ciclo for che conti  da 1 a 100;
const container = document.querySelector('.container')

for(let i=1; i<=100; i++){
let box;
    //2.1 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 3 e di 5,ALLORA DOBBIAMO stampare "FrizzBuzz";
     if (i % 3 == 0 && i % 5 == 0){
       console.log('FizzBuzz');

        // bonus 2
            box = `<div class="box box-pink">FizzBuzz</div>`
     }

    //2.2 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 3,ALLORA DOBBIAMO stampare;
    else if (i % 3 === 0){
        console.log('Fizz');

        // bonus 2
            box = `<div class="box box-green">Fizz</div>`
     }

    //2.3 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 5,ALLORA DOBBIAMO stampare "Buzz";
     else if (i % 5 === 0){
        console.log('Buzz');

        // bonus 2
            box = `<div class="box box-yellow">Buzz</div>`
     }

    // 2.4 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero non è multiplo di 3 e neanche multiplo di 5,ALLORA DOBBIAMO stampare il valore numerico;
     else{
        console.log(i);
        // bonus 2

            box = `<div class="box box-blue">${i}</div>`
     }
     
    //  collegamento a container in html
     container.innerHTML += box;
}
