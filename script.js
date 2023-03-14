let itemArray = [];

class listItem {
    title;
    description;
    dueDate;
    priority;

    constructor(title,description,dueDate,priority) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority
    }
}

function newItem() {
    let item = new listItem(
        this.title = prompt("title?"),
        this.description = prompt("title?"),
        this.dueDate = prompt("title?"),
        this.priority = prompt("title?"),
    )
    itemArray.push(item);
    kys()
};

let one = new listItem(1,1,1,1)
let two = new listItem(2,2,2,2)
let three = new listItem(3,3,3,3)


itemArray.push(one);
itemArray.push(two);
itemArray.push(one);

function kys (){
    const table = document.querySelector('tbody')
    table.innerHTML = '';
                itemArray.forEach((item) => {
                    table.innerHTML = table.innerHTML + `<tr>
                            <td>${item.title}</td>
                            <td>${item.description}</td>
                            <td>${item.dueDate}</td>
                            <td>${item.priority}</td>
                        </tr>`
                })
            }


            kys();
