const container = document.getElementById('container');
const studentList = document.createElement('ul');
const students = [
    { name: "Alice Johnson", marks: 85 },
    { name: "Bob Smith", marks: 92 },
    { name: "Charlie Davis", marks: 78 }
];
students.forEach(student => {
    const li = document.createElement('li');
    li.textContent = `${student.name} – ${student.marks}`;
    li.style.backgroundColor = '#f0f8ff'; 
    li.style.margin = '5px 0';          
    li.style.padding = '10px';           
 
    studentList.appendChild(li);
});
container.appendChild(studentList);