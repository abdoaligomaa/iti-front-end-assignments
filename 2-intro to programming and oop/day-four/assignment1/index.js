class Person {
  name;
  age;
  constructor(name, age) {
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
    console.log(`person name : ${this.name} , age : ${this.age} `);
    console.log(
      `Employee company : ${this.company} , salary : ${this.salary} `
    );
  }
}

class Student extends Person {
  school;
  company;
  constructor(name, age, school, company) {
    super(name, age);
    this.school = school;
    this.company = company;
  }
  changeStudentSchool(schoolName) {
    this.school = schoolName;
  }
  printPerson() {
    console.log(`person name : ${this.name} , age : ${this.age} `);
    console.log(`student school: ${this.school} `);
  }
}
