//base class (Person class)
class Person {
  constructor(name, ID) {
    this.name = name; // for the name of the person
    this.ID = ID; // for the unique ID of the person
  }

  //method
  tellAboutPerson() {
    return `Name: ${this.name}, ID: ${this.ID}`;
  }
}

//child class (Student Class)
class Student extends Person {
  constructor(name, ID, grades) {
    super(name, ID); //to call the contructor of person
    this.grades = grades; // store the student grades
  }

  //to calculate the average of grades
  calculateAverage() {
    const total = this.grades.reduce((sum, grades) => sum + grades, 0);
    return total / this.grades.length;
  }

  //view student details
  viewDetails() {
    const average = this.calculateAverage().toFixed(2); // to 2 decimal places
    return `${this.describePerson()}, Grades: [${
      this.grades
    }], Average Grade: ${average}`;
  }
}
