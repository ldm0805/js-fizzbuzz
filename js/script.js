// Creare un ciclo for che conti  da 1 a 100;
const container = document.querySelector('.container')

for(let i=1; i<=100; i++){
let box;
    //2.1 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 3 e di 5,ALLORA DOBBIAMO stampare "FrizzBuzz";
     if (i % 3 == 0 && i % 5 == 0){
       console.log('FizzBuzz');
            box = `<div class="box box-pink">Fizzbuzz</div>`
     }

    //2.2 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 3,ALLORA DOBBIAMO stampare;
    else if (i % 3 === 0){
        console.log('Fizz')
            box = `<div class="box box-green">fizz</div>`
     }

    //2.3 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 5,ALLORA DOBBIAMO stampare "Buzz";
     else if (i % 5 === 0){
        console.log('Buzz') 
            box = `<div class="box box-yellow">Buzz</div>`
     }

    // 2.4 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero non è multiplo di 3 e neanche multiplo di 5,ALLORA DOBBIAMO stampare il valore numerico;
     else{
        console.log(i)
            box = `<div class="box box-blue">${i}</div>`
     }

     container.innerHTML += box;
}
