class Person {
  name;
  age;
  constructor(name, age) {
    if (new.target === Person) {
      throw Error(
        "This class is abstract class , you can't create instance from it"
      );
    }
    this.name = name;
    this.age = age;
  }
  printPerson() {
    console.log(`person name : ${this.name} , age : ${this.age} `);
  }
}

class Employee extends Person {
  salary;
  company;
  constructor(name, age, salary, company) {
    super(name, age);
    this.salary = salary;
    this.company = company;
  }
  increaseSalary(bonse) {
    this.salary += bonse;
  }
  printPerson() {
    // console.log(`person name : ${this.name} , age : ${this.age} `);
    super.printPerson();
    console.log(
      `Employee company : ${this.company} , salary : ${this.salary} `
    );
  }
}

class Student extends Person {
  school;
  company;
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }
  changeStudentSchool(schoolName) {
    this.school = schoolName;
  }
  printPerson() {
    // console.log(`person name : ${this.name} , age : ${this.age} `);
    super.printPerson();
    console.log(`student school: ${this.school} `);
  }
}

const person1 = new Person("abdo ali", 23);
// person1.printPerson();

const employee1 = new Employee("abdo ", 23, 2000, "cairo-tech");
employee1.printPerson();

const student1 = new Student("abdo ", 23, 2000, "elmaymon");
student1.printPerson();
