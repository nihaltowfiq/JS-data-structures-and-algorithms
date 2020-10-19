//DICTIONARY === key-value

//simple example:

const phoneBook = {};
phoneBook["Nihal"] = 8801711111111; //ading key and value
phoneBook["Nirob"] = 8801922222222; //ading key and value
phoneBook["Towfiq"] = 8801833333333; //ading key and value
phoneBook["Liza"] = 8801544444444; //ading key and value
console.log(phoneBook); //phoneBook with all key-value
const searchAndUpdate = phoneBook["Nihal"] = 8801355555555; //seaching from phoneBook by key and updating its value
console.log(searchAndUpdate); //searched and updated result
console.log(phoneBook); // phoneBook with all key-value after update

//another example:

class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
    update(key, value){
        return this.dictionary[key] = value;
    }
};

const girlsBook = new Dictionary();
girlsBook.add('Mahiya Mahi', '01733333333'); //ading key and value
girlsBook.add('Pori Moni', '01622222222'); //ading key and value 
girlsBook.add('Purnima Khatun', '01855555555'); //ading key and value
girlsBook.add('Shabnur Begum', '01599999999'); //ading key and value
console.log(girlsBook.dictionary); //girlsBook with all key-value
const Mahi = girlsBook.get('Pori Moni'); //seaching from girlsBook
console.log(Mahi); //seached result
const updatedNumber = girlsBook.update('Pori Moni', '015555555555');  //seaching from girlsBook by key and updating its value
console.log(updatedNumber); //updated result
console.log(girlsBook.dictionary); // girlsBook with all key-value after update
