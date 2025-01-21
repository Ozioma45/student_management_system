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
    return `${this.tellAboutPerson()}, Grades: [${
      this.grades
    }], Average Grade: ${average}`;
  }
}

//store all students in an array
const students = [];

// Add a new student
function addStudent(name, ID, grades) {
  const student = new Student(name, ID, grades); // Create a new student
  students.push(student); // Add the student to the array
  console.log(`Student added: ${student.tellAboutPerson()}`);
}

// Add some students
addStudent("John Doe", 101, [90, 80, 85]);
addStudent("Jane Smith", 102, [88, 92, 76]);
