console.clear();

class ToDoStore {
  constructor() {
    this.toDos = [];
  }

  addNewItem(item) {
    this.toDos.push(item);
  }

  addNewItemList(itemList) {
    this.toDos.push(...itemList);
    return this.toDos;
  }

  removeItem(itemNumber) {
    if (itemNumber - 1 > this.toDos.length)
      return `The requested item number ${itemNumber} currently does not exist in myToDo list.`;
    this.toDos.splice(itemNumber - 1, 1);
    return `removed item number ${itemNumber}: "${
      this.toDos[itemNumber - 1]
    }" - from myToDo list.`;
  }

  editItem(itemNumber, newValue) {
    this.toDos[itemNumber - 1] = newValue;
  }

  editItemsList(arrNums, arrValues) {
    for (let i = 0; i < arrValues.length; i++) {
      this.toDos[arrNums[i] - 1] = arrValues[i];
    }
    return this.toDos;
  }

  readToDosList() {
    if (this.toDos.length < 1) {
      return `My to-do list is empty`;
    } else {
      console.log("Todo List:");
      for (let item of this.toDos) {
        console.log(`${this.toDos.indexOf(item)}- ${item}`);
      }
    }
  }
}

const myToDos = new ToDoStore();

myToDos.addNewItem("Shopping");
myToDos.addNewItem("Home work");
myToDos.addNewItem("Go to the gym");
myToDos.addNewItem("Cook");
myToDos.addNewItem("Call Alex");

myToDos.removeItem(3);
myToDos.removeItem(5);

myToDos.editItem(3, "Pay bills");
myToDos.editItem(5, "Visiting Tommy");

console.log(
  myToDos.addNewItemList(["Go to supermarket", "Meet with Ghassan", "New test"])
);

console.log(
  myToDos.editItemsList(
    [2, 4, 6],
    ["Meet with PR department", "By milk", "Check the internet connection"]
  )
);

console.log("--------------------------------");
myToDos.readToDosList();
