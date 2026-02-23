const express = require("express");
const app = express();

app.use(express.json());

// In-memory students array (static storage)
let students = [
  { id: 1, name: "Alice", age: 20, course: "Mathematics" },
  { id: 2, name: "Bob", age: 21, course: "Physics" }
];

let nextId = 3;

app.post("/students", (req, res) => {
  const { name, age, course } = req.body;

  if (!name || !age || !course) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = {
    id: nextId++,
    name,
    age,
    course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});


app.get("/students", (req, res) => {
  res.json(students);
});


app.get("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});


app.put("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, age, course } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  if (!name || !age || !course) {
    return res.status(400).json({ message: "All fields are required" });
  }

  student.name = name;
  student.age = age;
  student.course = course;

  res.json(student);
});


app.delete("/students/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  const deletedStudent = students.splice(index, 1);
  res.json({
    message: "Student deleted successfully",
    student: deletedStudent[0]
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});