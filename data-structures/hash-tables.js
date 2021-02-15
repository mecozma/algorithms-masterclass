class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value])
        console.log(this.keyMap)
    }
    get(key) {
        let index = this._hash(key);
        let arr = this.keyMap[index];
        if (arr) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] === key) {
                    return arr[i][1]
                }
            }
        }
        return undefined;
    }
    get_keys() {
        let keys = [];
        let arr = this.keyMap;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (!keys.includes(arr[i][j][0])) {
                        keys.push(arr[i][j][0]);
                    }
                }
            }
        }
        return keys;
    }

    get_values() {
        let values = [];
        let arr = this.keyMap;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (!values.includes(arr[i][j][1])) {
                        values.push(arr[i][j][1]);
                    }
                }
            }
        }
        return values;
    }
}

let a = new HashTable();
a.set("yellow", 1)
a.set("maroon", 9)
a.set("green", 3)
a.set("white", 4)
a.set("black", 5)
a.set("salmon", 6)
a.set("magenta", 7)
a.set("gray", 8)
a.set("coffee", 9)
// console.log(a.get("coffee"))
console.log(a.get_keys())
console.log(a.get_values())