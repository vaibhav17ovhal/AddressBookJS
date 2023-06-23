class Contact {
    id;
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(...parms) {
        this.id = parms[0];
        this.firstName = parms[1];
        this.lastName = parms[2];
        this.address = parms[3];
        this.city = parms[4];
        this.state = parms[5];
        this.zip = parms[6];
        this.phoneNumber = parms[7];
        this.email = parms[8];
    }

    get id() { return this._id; }
    set id(value) {
        this._id = value;
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let first = RegExp('^[A-Z][a-z]{2,}$');
        if (first.test(firstName))
            this._firstName = firstName;
        else throw "Invalid First Name";
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let first = RegExp('^[A-Z][a-z]{2,}$');
        if (first.test(firstName))
            this._lastName = lastName;
        else throw "Invalid Last Name";
    }
    get address() { return this._address; }
    set address(address) {
        let addr = RegExp('^[a-zA-Z]{4,}$');
        if (addr.test(address))
            this._address = address;
        else throw "Invalid Address";
    }
    get city() { return this._city; }
    set city(city) {
        let cit = RegExp('^[a-zA-Z]{4,}$');
        if (cit.test(city))
            this._city = city;
        else throw "Invalid City";
    }
    get state() { return this._state; }
    set state(state) {
        let stat = RegExp('^[a-zA-Z]{4,}$');
        if (stat.test(state))
            this._state = state;
        else throw "Invalid State";
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let ZIP = RegExp('^[0-9]{3}[ ]+[0-9]{3}$');
        if (ZIP.test(zip))
            this._zip = zip;
        else throw "Invalid Zip";
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phone = RegExp('^[0-9]{2}[ ]+[6-9][0-9]{9}$');
        if (phone.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number";
    }
    get email() { return this._email; }
    set email(email) {
        let mail = RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}$');
        if (mail.test(email))
            this._email = email;
        else throw "Invalid Email";
    }

    toString() {
        return "Id: " + this.id + ", FirstName: " + this.firstName + ", LastName: " + this.lastName + ", Address: " + this.address
            + ", City: " + this.city + ", State: " + this.state + ", ZIP: " + this.zip + ", PhoneNumber: " + this.phoneNumber
            + ", Email: " + this.email;
    }
}
let contact = new Contact(1, "Vaibhav", "Ovhal", "Harsiddhi", "Indore", "M.P.", "452007", "9340596362", "vaibhavovhal15@gmail.com");
console.log(contact.toString());

let contactArray = new Array();
try{
    contact = new Contact(2,"Sameer","Joshi","Annapurna","Indore","M.P.","452009","9967989410","sameer123@gmail.com");
    contactArray.push(contact);
    contact = new Contact(3,"Kartik","Sharma","Juni Indore","Indore","M.P.","452122","9874697488","kartik@gmail.com");
    contactArray.push(contact);
    console.log(contactArray);

    let editName = "Sameer";
    for(let item of contactArray)
    {
        if(item._firstname==editName)
        {
            item._firstname="Ram";
        }
    }
    console.log(contactArray);
}
catch
{
    console.error(e);
}
