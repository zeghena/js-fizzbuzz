const cardsRow = document.getElementById('cards-row')
let text = '';
for ( let i = 1; i <= 100; i++){
  if(i % 15 == 0){
    text = 'FizzBuzz';
    console.log('FizzBuzz');
  }else if(i % 3 == 0){
    text = 'Fizz';
    console.log('Fizz');
  }else if(i % 5 == 0){
    text = 'Buzz';
    console.log('Buzz');
  } else{
    text = i;
    console.log(i);
  }





  cardsRow.innerHTML +=
`<div class ="square">
  ${text}
</div>`





}

