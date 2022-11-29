// Creare un ciclo for che conti  da 1 a 100;

for(let i=1; i<=100; i++){

    //2.1 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 3 e di 5,ALLORA DOBBIAMO stampare "FrizzBuzz";
     if (i % 3 == 0 && i % 5 == 0){
       console.log('Frizzbuzz')

    }

    //2.2 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 3,ALLORA DOBBIAMO stampare "Frizz";
    else if (i % 3 === 0){
        console.log('Frizz ')
    }

    //2.3 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero è multiplo di 5,ALLORA DOBBIAMO stampare "Buzz";
     else if (i % 5 === 0){
        console.log('Buzz') 
     }

    // 2.4 Eseguire il controllo sul numero tramite l'operatore resto, SE il numero non è multiplo di 3 e neanche multiplo di 5,ALLORA DOBBIAMO stampare il valore numerico;
     else{
        console.log(i)
     }
}