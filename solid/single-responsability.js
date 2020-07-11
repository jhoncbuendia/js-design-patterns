const fs = require('fs');

class CheckList {
    constructor() {
        this.counter = 0;
        this.items = [];
    }

    addItem(text) {
        this.items[this.counter] = `${this.counter}. ${text}`;
        this.counter++;
    }

    toString() {
        return Object.values(this.items).join('\n');
    }
}

class PersistenceManager {
    saveToFile(fileName, text) {
        fs.writeFileSync(fileName, text);
    }
}

const checkList = new CheckList();
const persistenceManager = new PersistenceManager();

checkList.addItem('item a');
checkList.addItem('item b');

persistenceManager.saveToFile('./check-list.txt', checkList.toString());

console.log(checkList.toString());




