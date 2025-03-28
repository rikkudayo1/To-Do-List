const main = document.getElementById("main");
const textField = document.getElementById("textField");
const uList = document.getElementById("uList");

function addTask() {
    if (textField.value === '') {
        alert('Enter some tasks');
    } else {
        let li = document.createElement("li");
        uList.appendChild(li);

        let div1 = document.createElement("div");
        div1.className = "div1"
        li.appendChild(div1);

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        div1.appendChild(checkbox)

        let h4 = document.createElement("h4");
        h4.style.color = 'black';
        h4.innerText = textField.value;
        div1.appendChild(h4);

        let div2 = document.createElement("div");
        div2.className = "div2"
        li.appendChild(div2);

        let deletebutton = document.createElement("button");
        deletebutton.innerHTML = "<box-icon color='white' type='solid' size='19px' name='trash-alt'></box-icon>";

        let editbutton = document.createElement("button");
        editbutton.style.backgroundColor = "greenyellow"
        editbutton.innerHTML = "<box-icon color='white' type='solid' size='19px' name='edit'></box-icon>";

        deletebutton.onclick = (e) => {
            e.stopPropagation();
            li.remove();
        };

        editbutton.onclick = (e) => {
            e.stopPropagation();

            if (checkbox.checked == true) {
                alert("Uncheck this to edit!")
            } else {
                let div1 = document.createElement("div");
                div1.className = "popup";

                let h2 = document.createElement("h2");
                h2.innerText = "Enter new title";
                div1.appendChild(h2);

                let input = document.createElement("input")
                input.type = "text"
                div1.appendChild(input);

                let div2 = document.createElement("div")
                div2.className = "buttons";
                div1.appendChild(div2);

                let cancelbutton = document.createElement("button")
                cancelbutton.className = "cancel"
                cancelbutton.innerText = "Cancel"
                div2.appendChild(cancelbutton);

                let confirmbutton = document.createElement("button")
                confirmbutton.className = "confirm"
                confirmbutton.innerText = "Confirm"
                div2.appendChild(confirmbutton);

                main.appendChild(div1);
  
                cancelbutton.onclick = () => {
                    div1.remove();
                }

                confirmbutton.onclick = () => {
                   h4.innerText = input.value;
                   div1.remove();
                }
            }
        };

        li.onclick = (e) => {
            if (e.target.tagName.toUpperCase() !== 'BUTTON') {
                if (checkbox.checked == false) {
                    checkbox.checked = true;
                    li.style.backgroundColor = "whitesmoke"
                    editbutton.style.backgroundColor = "darkgreen"
                } else {
                    checkbox.checked = false;
                    li.style.backgroundColor = "white"
                    editbutton.style.backgroundColor = "greenyellow"
                }
            }
        }
        
        div2.appendChild(editbutton)
        div2.appendChild(deletebutton)
    }
    textField.value = '';
}