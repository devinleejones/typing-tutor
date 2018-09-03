var $words = 'grumpy wizards make toxic brew for the evil queen and jack'
var myArray = []
for (var i = 0; i < $words.length; i++) {
  var obj = {
    character: ''
  }
  obj.character = phrase[i]
  myArray.push(obj)
}

console.log(myArray)
