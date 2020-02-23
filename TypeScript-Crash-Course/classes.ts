interface UserInterface {
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created: ' + this.name);
  }

  register() {
    console.log(this.name + ' is now registered.');
  }

  payInvoice() {
    console.log(this.name + ' paid invoice.');
  }
}

class Member extends User {
  id: Number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

// let john = new User('John Doe', 'johndoe@email.com', 34);
// console.log(john.age);

let jane = new Member(1, 'Jane Doe', 'janedoe@email.com', 34);
jane.payInvoice();
