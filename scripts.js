let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")


function handleSubmit() {
  let newListItem = document.createElement('LI')
  newListItem.innerText = usersWord

  
  if(usersWord.length % 2 === 0) {
    
      evenList.appendChild(newListItem)
    } else {
    
      oddList.appendChild(newListItem)

      console.log
      }

  usersWord = ""
  document.getElementById("even-odd-form").reset()
}

function updateWord(element) {
    usersWord = element.value

    console.log(usersWord)
  }