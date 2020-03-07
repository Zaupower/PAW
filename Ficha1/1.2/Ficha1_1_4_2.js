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
var conc = createContact('John', 3939399)
addContact(conc)
console.log(contactsList)
updateObject(conc, 'marcelo', 99999)
console.log(contactsList)
removeContact(conc)
console.log(contactsList)
