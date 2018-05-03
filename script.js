"use strict"; {
    class addressBook {
        constructor() {
            this.contacts = [
                new Contact("Hannah", "hannahsemail@hannah.com", "123-456-7890", "classmate")

            ];
        }
        add(info) {
            const addContact = new Contact(info.name, info.email, info.phone, info.relation)
            this.contacts.push(addContact);
        }
        deleteAt(index) {
            this.contacts.splice(index, 1);
        }
        print() {
            console.log(this.contacts);
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

    const myAddressBook = new addressBook();
    console.log(myAddressBook);

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
}