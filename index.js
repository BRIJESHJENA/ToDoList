let add = document.querySelector("#add");
let list = document.querySelector("#list");

add.onclick = (e) => {
    // debugger;
  e.preventDefault();

  let listItem = document.querySelector("#listItem");

  if (listItem.value !== "") {
    let newElement = document.createElement("li");

    newElement.innerHTML = listItem.value;

    let removebtn = document.createElement("button");

    removebtn.className = "delete";

    removebtn.innerHTML = "❌";

    newElement.appendChild(removebtn);

    list.appendChild(newElement);

    listItem.value = "";

    newElement.addEventListener("click", (e) => {
      e.target.style.textDecoration = "line-through";
    });

    removebtn.addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
    });
  } else {
    alert("Write something inside the input!!");
  }
};
