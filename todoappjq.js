$(function(){
  //setup
  function strikeIt(){
    $(this).toggleClass("strike")
  }

  function delButton(){
    $(this).parent().css("display", "none");
  }

  $(".del").click(delButton);
  //strikethrough todo items
  $(".todo").click(strikeIt);

  $("#theAddButton").click(newListItem);
  //creates the entire list item
  function newListItem(){
    var listItem = document.createElement("li");

    var inputValue = document.getElementById("todoItem").value;
    var listSpan = document.createElement("SPAN");
    listSpan.innerHTML = inputValue;
    listSpan.className = "todo";
    listItem.append(listSpan);

    var delSpan = document.createElement("SPAN");
    var delSpanText = "delete?";
    delSpan.innerHTML = delSpanText;
    delSpan.className = "del";
    listItem.append(delSpan);

    if(inputValue === ""){
      alert("You've got to write a to-do item.");
    } else {
      $("li:last").after(listItem);
    }
    $("#todoItem").value = "";
    $(".del").click(delButton);
    $(".todo").click(strikeIt);
  }
})
