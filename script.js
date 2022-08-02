//const list = []

//function toDoList(items){
    //inputValue = document.getElementById("userInput").value;
    //let addToList = (userInput)
function toDoList() {
        let li = document.createElement("li");
        let inputValue = document.getElementById("userInput").value;
        let t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
          alert("You must write something!");
        } else {
          document.getElementById("myUL").appendChild(li);
        }
        document.getElementById("userInput").value = "";
      
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
      
        for (i = 0; i < close.length; i++) {
           close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
            }
                
         }
       }
       let close = document.getElementsByClassName("close");
       let i;
       for (i = 0; i < close.length; i++) {
         close[i].onclick = function() {
           let div = this.parentElement;
           div.style.display = "none";
         }
        }