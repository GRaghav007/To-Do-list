let item_value = document.getElementsByClassName("input")[0]

let add_btn = document.getElementsByClassName("add")[0]

let ul = document.getElementById("lists");

let search = document.getElementsByClassName("search_item")[0];

let input = document.getElementsByClassName("input")[0];

input.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        add_btn.click();
    }
})

add_btn.addEventListener('click', addItem);

function addItem(e){
    e.preventDefault();

    let text = item_value.value;
    let list = document.createElement("div");
    list.classList.add("item-btn");

    let list_item = document.createElement("div");
    list_item.classList.add("item");
    let item = document.createTextNode(text);
    list_item.appendChild(item);
    
    let btn = document.createElement("button");
    btn.classList.add("btn")
    let cross = document.createTextNode("❌")
    btn.appendChild(cross);

    let msg = document.createElement("div");
    msg.classList.add("msg2");
    let msg2 = document.createTextNode("Click to remove this item")
    msg.appendChild(msg2);

    list.appendChild(list_item);
    list.appendChild(btn);
    list.appendChild(msg);
    ul.appendChild(list);
}

ul.addEventListener('click', function(e){
    if(e.target.classList.contains("btn")){
        if(confirm("Are you sure?")){
            let item = e.target.parentElement;
            item.remove();
            e.target.remove();
        }
       
    }
})

// console.log(search);
search.addEventListener("keyup", function(e){
    var itemList = document.getElementsByTagName("li");
    let search_text = e.target.value.toLowerCase();
    Array.from(itemList).forEach(function(item){
            let text = item.firstChild.textContent.toLowerCase();
            if(text.indexOf(search_text) != -1){
                item.style.display = "block";
                item.nextElementSibling.style.display = "block";
                item.parentElement.style.display = "block";
            }
            else{
                item.style.display = "none";
                item.nextElementSibling.style.display = "none";
                item.parentElement.style.display = "none";
            }
    })
})
