//setup
var i;
var addButton = document.getElementById("theAddButton");
addButton.addEventListener("click", newListItem);
var del = document.getElementsByClassName("del");
for (var i = 0; i < del.length; i++) {
  del[i].onclick = function(){
    var div = this.parentElement;
    div.style.display = "none";
  }
};
var todo = document.getElementsByClassName("todo");
for (var i = 0; i < todo.length; i++){
  todo[i].onclick = function(){
    this.classList.toggle("strike")
  }
}

//strikethrough todo items
function strikeIt(x){
  x.onclick = function(){
    this.classList.toggle("strike");
  }
}

//what makes the delete button "delete" (its really just being hidden though)
function delButton(smth){
  smth.onclick = function(){
    this.parentElement.style.display = "none"
  }
};

//creates the entire list item
function newListItem(){
  var li = document.createElement("li");
  var inputValue = document.getElementById("todoItem").value;
  var listSpan = document.createElement("SPAN");
  var listSpanText = document.createTextNode(inputValue);
  listSpan.classList.add("todo")
  listSpan.appendChild(listSpanText);

//adds the li item
  li.appendChild(listSpan);
  if(inputValue === ""){
    alert("You've got to write a to-do item.");
  } else {
    document.getElementById("theList").appendChild(li);
  }
  document.getElementById("todoItem").value = "";

  //strikethrough functionality
  strikeIt(listSpan);

  //creates + appends that little delete button
  var delSpan = document.createElement("SPAN");
  var delSpanText = document.createTextNode("delete?");
  delSpan.className = "del";
  delSpan.appendChild(delSpanText);
  li.appendChild(delSpan);
  delButton(delSpan);
}
