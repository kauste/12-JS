/* 
OBJECT
*/

/*, 
Mokiniai (array):
    Mokinys (??): 
    - varda (string)
    - pazymius, array
    - kontaktini asmeni (??)
        - varda  (string)
        - tel nr number
*/
const students = [
   {  // { }- reprezentuoja objekta
      // key: value, - key- kokia informacija turi sedeti, value- konkreti reiksme
        name: 'Petras',
        marks: [
            10, 
            6,
        ],
        contacts: {
            name: 'P.P',
            phone : 111,
            adress : {
                city: 'Vilnius',
                street: 'Azuolo'
            },
        },
    },
   {
        name: 'Jonas',
        marks: [10, 9],
        contacts: {
            name: 'J.J',
            phone : 222,
            adress : {
                city: 'Vilnius',
                street: 'Lubinu'
            },
        },
    },
];


const studentIndex = 0;
const student = students[studentIndex]; //masyvuose tuo tarpu studets.2 neprarasysi
const name = student.name; //=== name = student['name'];      /*masyve raktazodziai automatizuoti(0, 1, 2), o objekte- sukuriame*/
const contact = student.contacts;//student['contacts']
const contactName = contact.name; // contact['name']*/
const contactPhome = student.contacts.phone;
const contacCity = student.contacts.adress.city;

console.log(student);
console.log(name);
console.log(contactName);
 ///