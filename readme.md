# Student Management System

A simple **Student Management System** built using **Object-Oriented Programming (OOP)** principles in JavaScript. The system allows adding students, viewing their details, and calculating their average grades, demonstrating OOP concepts like encapsulation, abstraction, inheritance, and polymorphism.

---

## Features

1. **Add Students**: Create and store new students with their name, unique ID, and grades.
2. **View Student Details**: Retrieve a student's details, including their name, ID, grades, and average grade.
3. **Calculate Average Grades**: Automatically calculate and display a student's average grade based on their scores.

---

## OOP Concepts Used

- **Encapsulation**: Properties and methods related to `Person` and `Student` are grouped together in their respective classes.
- **Abstraction**: Internal details like grade calculation are hidden, exposing only the relevant methods for use.
- **Inheritance**: The `Student` class extends the `Person` class, inheriting and reusing its functionality.
- **Polymorphism**: Methods like `viewDetails` and `describePerson` behave differently based on the context.

---

## Prerequisites

- A basic understanding of JavaScript.
- Node.js or any modern browser console to run the code.

---

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Ozioma45/student_management_system.git
   ```
2. Navigate to the project folder:

   ```bash
   cd student-management-system
   ```

3. Run the code in a Node.js environment or paste it into the browser console to test it.

---

## Usage

### Example Code

Here's how to use the Student Management System:

```javascript
// Import or paste the classes and functions into your project

// Add students
addStudent("Ozioma John", 101, [90, 80, 85]);
addStudent("Ebuka Nnams", 102, [88, 92, 76]);

// View student details
viewStudent(101); // Displays details of John Doe
viewStudent(102); // Displays details of Jane Smith
viewStudent(103); // Error: Student not found
```

### Expected Output

```plaintext
Student added: Name: John Doe, ID: 101
Student added: Name: Jane Smith, ID: 102
Name: John Doe, ID: 101, Grades: [90,80,85], Average Grade: 85.00
Name: Jane Smith, ID: 102, Grades: [88,92,76], Average Grade: 85.33
Student with ID 103 not found.
```

---

## File Structure

```plaintext
student-management-system/
├── README.md          # Project documentation
├── index.js           # Main JavaScript code for the system
```

---

## How It Works

1. **Person Class**:  
   The `Person` class is the base class that stores the common details of a person like `name` and `ID`.

2. **Student Class**:  
   The `Student` class inherits from `Person` and includes additional properties like `grades` and methods for calculating average grades and viewing details.

3. **Main Functions**:
   - `addStudent(name, ID, grades)`: Adds a new student to the system.
   - `viewStudent(ID)`: Retrieves and displays details of a student by their ID.

---

## Future Enhancements

Here are a few ideas to extend the functionality:

- Allow updating a student's grades or details.
- Add a feature to delete students.
- Implement a user-friendly interface using HTML and CSS.
- Store student data persistently using localStorage or a database.

---

## Contributing

Contributions are welcome! If you'd like to improve the system, feel free to fork the repository and submit a pull request.

---

## License

This project is licensed under the **MIT License**. Feel free to use and modify it as needed.

---
