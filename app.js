// var text= document.getElementById("text")
// function bracketBalanced() {
//     if(event.keyCode === 13){
//   var text = [];
//   var openingBrackets = ['(', '[', '{'];
//   var closingBrackets = [')', ']', '}'];


//   for (var i = 0; i < text.length; i++) {
//     var character = text[i];

//     if (openingBrackets.includes(character)) {
//       text.push(character);
//     } else if (closingBrackets.includes(character)) {
//       var lastOpeningBracket = text.pop();

//       if (
//         (character === ')' && lastOpeningBracket !== '(') ||
//         (character === ']' && lastOpeningBracket !== '[') ||
//         (character === '}' && lastOpeningBracket !== '{')
//       ) {
//       }
//     }
//   }

//   return text.length === 0;
// }
// }

// function bracketBalanced() {
//     var empty = "";
//     var openingBracket = ['(', '{', '['];
//     var closingBrackets = [')', '}', ']'];

//     for (var i = 0; i < empty.length; i++) {
//         var result = empty[i]

//         if (openingBracket.includes(result)) {
//             empty.push(result);
//         } else if (closingBrackets.includes(result)) {
//             var lastOpeningBracket= empty.pop();

//             if(result === ')' && lastOpeningBracket != '(' ||
//                 result === '}' && lastOpeningBracket != '{' ||
//                 result === ']' && lastOpeningBracket != '['
//             ){
//                 return false;
//             }
//         }
//         return empty.length === 0;
//     }
// }

// console.log(bracketBalanced("{"))


function checkBrackets(str) {
    var stack = [];
    var openBrackets = ['(', '[', '{'];
    var closeBrackets = [')', ']', '}'];
    
    for (let i = 0; i < str.length; i++) {
      var char = str[i];
      
      if (openBrackets.includes(char)) {
        stack.push(char);
      } else if (closeBrackets.includes(char)) {
        var lastOpenBracket = stack.pop();
        
        if (!lastOpenBracket || !matches(lastOpenBracket, char)) { 
          return false;
        }
      }
    }
    
    return stack.length === 0;
  }
  
  function matches(open, close) {
    return (open === '(' && close === ')') ||
           (open === '[' && close === ']') ||
           (open === '{' && close === '}');
  }
  
  var userInput = prompt("Enter a string:");
  document.write(checkBrackets(userInput) ?  "<div class= 'one'>Brackets are balanced </div>" : "<div class= 'one'>Brackets are not balanced</div>");


