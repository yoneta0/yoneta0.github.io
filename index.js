const onClickAdd = () => {

    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    if (inputText !== "") {
        createList(inputText);
    }

};

const createList = (text) => {
    
    //サンプルテキストを削除
    const deleteTarget = document.getElementById("memo");
    if (deleteTarget.firstElementChild.hasAttribute("id")) {
        deleteTarget.firstElementChild.remove();
    }

    const li = document.createElement("li");
    li.innerText = text;

    const parent = document.getElementById("memo");
    parent.appendChild(li);

}

document.getElementById("add-button").addEventListener("click", () => onClickAdd());
