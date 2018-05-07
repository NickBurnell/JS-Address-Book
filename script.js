"use strict";
class addressBook {
  constructor() {
    this.contacts = [
      new Contact("Nick Burnell", "nick@nick.com", "123-456-7890", "family"),
      new Contact('Charles', 'charles@charles.com', '123-456-7890', 'friend')
    ];
  }
  add(info) {
    const addContact = new Contact(info.name, info.email, info.phone, info.relation)
    this.contacts.push(addContact);
  }
  deleteAt(index) {
    this.contacts.splice(index, 1);
  }
  display() {

  }
}

function makeContactCard() {
  const thisContactContainer = document.getElementById('contactsContainer');
  for (let i = 0; i < myAddressBook.contacts.length; i++) {
    
    let contactInfo = ['contactName','contactEmail','contactPhone','contactRelation']
    let contactCard = document.createElement('div');
    
    contactCard.className = 'contactCards';
    
    thisContactContainer.appendChild(contactCard);
    
    let contactRecord = document.createElement('ul');
    contactRecord.style.listStyle = 'none';
    
    contactCard.appendChild(contactRecord);
    
    for(let o = 0; o < contactInfo.length; o++){
      let cardInfo = document.createElement('li');
      cardInfo.className = `contactCard ${contactInfo[o]}`;
      cardInfo.innerHTML = myAddressBook.contacts[i].name;
      if(cardInfo.classList.contains('contactName')){
        cardInfo.innerHTML = myAddressBook.contacts[i].name;
      } else if (cardInfo.classList.contains('contactEmail')){
        cardInfo.innerHTML = myAddressBook.contacts[i].email;
      } else if (cardInfo.classList.contains('contactPhone')){
        cardInfo.innerHTML = myAddressBook.contacts[i].phone;
      } else {
        cardInfo.innerHTML = myAddressBook.contacts[i].relation
      }
      contactRecord.appendChild(cardInfo)

    }
    
    let contactIndiRecord = document.getElementsByClassName('contactCard');
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}
// const info = {
//   name: info.name,
//   phone: info.email,
//   email: info.phone,
//   relation: info.relation
// }
const myAddressBook = new addressBook();
document.body.addEventListener('load', makeContactCard());

// ***Need to figure out add button***

// document.getElementById("addBtn").addEventListener("click", myAddressBook.add(info));
// makeContactCard();

// ***Need to make delete button***

/*
while (true) {
    let userInput = prompt("Would you like to add, delete, delete by name, print, or quit to the address book?");
    let userInputLowerCase = userInput.toLowerCase();
    if (userInputLowerCase === 'add') {
        const info = {

            name: prompt('Name?'),
            phone: prompt('Phone number?'),
            email: prompt('Email address?'),
            relation: prompt('Relation?')
        }
        console.log('selected Info');
        myAddressBook.add(info);
        console.log(myAddressBook);
    } else if (userInputLowerCase === "delete") {
        console.log("selected delete");
        const index = prompt("write the number of the index you want to delete");
        myAddressBook.deleteAt(index);
        console.log(myAddressBook);
    } else if (userInputLowerCase === "print") {
        console.log("selected print");
        for (let i = 0; i < myAddressBook.contacts.length; i++) {
            console.log(myAddressBook.contacts[i]);
        }
    } else if (userInputLowerCase === 'quit') {
        console.log('Goodbye!');
        break;
    } else {
        console.log('Invalid Input');
        continue;
    }
    
}
*/