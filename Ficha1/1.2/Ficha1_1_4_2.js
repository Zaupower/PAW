var contactsList = []
//criar array de contactos
function createContact(name, number){

    var newContact = new Object();
    newContact.name = name;
    newContact.number = number;
return  newContact
}
//add contacto
function addContact(contact){

    contactsList.push(contact)

}
//remove contact
function removeContact(contact){
    for (const iterator of contactsList) {
        if(iterator === contact){
            contactsList.pop(iterator)
        }
    }
}
//update 
function updateObject(contact, newName, newContact){
    var index = contactsList.findIndex(contact => contact.name === 'John');
    console.log(index)
    contactsList[index].name = newName
    contactsList[index].number = newContact
}

function findByAge(age){
    var tmpArr = []

    for (contact of contactsList){
        if (contact.name === age){
            tmpArr.push(contact)
        }
    } 
    return tmpArr
}
 
var tmpArr = []

var conc = createContact('John', 3939399)
addContact(conc)
addContact(conc)
addContact(conc)
console.log(contactsList)
updateObject(conc, 'marcelo', 99999)
console.log(contactsList)
tmpArr = findByAge("marcelo")
console.log("Achado: "+JSON.stringify(tmpArr))

removeContact(conc)
console.log(contactsList)
