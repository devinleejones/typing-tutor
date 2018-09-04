var myArray = []

function createCharacter(string) {
for (var i = 0; i < string.length; i++) {
  var obj = {
    letter: ''
  }
  obj.letter = string[i]
  myArray.push(obj)
  }
  return myArray
}

createCharacter('grumpy wizards make toxic brew for the evil queen and jack')

function renderCharacter(character) {
  var $letter = document.createElement('span')
  $letter.textContent = character.letter
  return $letter
}
