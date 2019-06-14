	todoInput.addEventListener('keypress', (ev) => {
if(ev.keyCode === 13) {todoList()}});

function todoList(){
	let item = document.getElementById("todoInput").value;
    let text = document.createTextNode('text');
	let newItem = document.createElement("li");
	newItem.appendChild(text);
	document.getElementById("todoList").appendChild(newItem);
	
    let delate = document.createElement("button"); 
 	delate.innerHTML="Clear";
    delate.type ="button";
    delate.name ="Clear";
	delate.id = "clear";
	newItem.appendChild(delate);
	delate.onclick  = function (e){
		const p = e.target.parentNode;
		p.parentNode.removeChild(p);
  }
}
function removeItem(){
	var rem = document.getElementById("todoList");
	rem.removeChild(rem.childNodes);
}
 



