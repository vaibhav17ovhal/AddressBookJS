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
        else throw "First name is not vaild";
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let first = RegExp('^[A-Z][a-z]{2,}$');
        if (first.test(firstName))
            this._lastName = lastName;
        else throw "First name is not vaild";
    }
    get address() { return this._address; }
    set address(address) {
        let addr = RegExp('^[a-zA-Z]{4,}$');
        if (addr.test(address))
            this._address = address;
        else throw "Address is not Valid";
    }
    get city() { return this._city; }
    set city(city) {
        let cit = RegExp('^[a-zA-Z]{4,}$');
        if (cit.test(city))
            this._city = city;
        else throw "City is not Valid";
    }
    get state() { return this._state; }
    set state(state) {
        let stat = RegExp('^[a-zA-Z]{4,}$');
        if (stat.test(state))
            this._state = state;
        else throw "State is not Valid";
    }
    get zip() { return this._zip; }
    set zip(zip) {
        let ZIP = RegExp('^[0-9]{3}[ ]+[0-9]{3}$');
        if (ZIP.test(zip))
            this._zip = zip;
        else throw "ZIP is not valid";
    }
    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phone = RegExp('^[0-9]{2}[ ]+[6-9][0-9]{9}$');
        if (phone.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Phone number is Invalid";
    }
    get email() { return this._email; }
    set email(email) {
        let mail = RegExp('^[0-9a-zA-Z]+[.+-_]{0,1}[0-9a-zA-Z]+[@][a-zA-Z]+[.][a-zA-Z]{2,3}$');
        if (mail.test(email))
            this._email = email;
        else throw "Email is Invalid";
    }

    toString() {
        return "Id: " + this.id + ", FirstName: " + this.firstName + ", LastName: " + this.lastName + ", Address: " + this.address
            + ", City: " + this.city + ", State: " + this.state + ", ZIP: " + this.zip + ", PhoneNumber: " + this.phoneNumber
            + ", Email: " + this.email;
    }
}
let contact = new Contact(1, "Soma", "Shekar", "Mittur", "Kolar", "Karnataka", "563123", "9087123456", "soma@email.com");
console.log(contact.toString());

let contactArray = new Array();
try{
    contact = new Contact(2,"Sanjana","Dhenge","Abcd","KoLhapur","Maharashtra","416012","9359923789","abc@gmail.com");
    contactArray.push(contact);
    contact = new Contact(3,"Radha","Patil","Defg","KoLhapur","Maharashtra","416022","9359915712","xyz@gmail.com");
    contactArray.push(contact);
    console.log(contactArray);

    let editName = "Sanjana";
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