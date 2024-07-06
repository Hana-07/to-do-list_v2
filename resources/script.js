const inputBox = document.getElementById("input-box");
const thelist = document.getElementById("List-items");
const addButton = document.getElementById("addbutton");
const uncomplist = document.getElementById("uncompleted");
const complist = document.getElementById("completed");

function task(){
    if(inputBox.value === ''){
        let ER = document.createElement("h3");
        ER.innerHTML = "ERROR:Input feild Empty!"
        ER.className = "errormsg";
        thelist.appendChild(ER);
        inputBox.classList.toggle("errorbox");
        addButton.classList.toggle("errorbtn");
    }
    if(inputBox.value != ''){
        thelist.remove();
        addButton.classList.remove("errorbtn");
        inputBox.classList.remove("errorbox");
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        uncomplist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00D7"
        li.appendChild(span);
        span.className = "delete";
    }
    inputBox.value = "";
}

uncomplist.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "LI"){
        complist.appendChild(e.target)
    }
}, false);

complist.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    else if(e.target.tagName === "LI"){
        uncomplist.appendChild(e.target)
    }
}, false ) ;