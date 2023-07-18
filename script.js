let quoteArray = [
  ['Be yourself; everyone else is already taken.' , '― Oscar Wilde']
,
["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me" , '― Marilyn Monroe'] 
, 
["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." ,'― Albert Einstein'] 
, 
['So many books, so little time.' , '― Frank Zappa'] 
,
["A room without books is like a body without a soul." , '― Marcus Tullius Cicero']
]

  let y = null ;
const generateQuote = function ()  {

  let x =  Math.floor((Math.random() * quoteArray.length)) ;
  
  if(x != y || y == null){
    y = x
    console.log(x)
    document.getElementById('demo').innerHTML =`
    <div class='d'>
    <div class='box'>
     <div id='quote'>
     <h2>${quoteArray[x][0]}</h2>
      <h3>${quoteArray[x][1]}</h3>
     </div>
     </div>
     <i class="fa-solid fa-quote-left"></i>
     <i class="fa-solid fa-quote-left"></i>
     </div>
     `
     ;
  }else{
    console.log( x + ' ' + y + ' ' + 'reapted');
    generateQuote();
    
  } 
};

document.getElementByClassname


