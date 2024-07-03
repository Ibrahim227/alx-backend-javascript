interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentOne: Student = {
  firstName: 'John';
  lastName: 'Doe';
  age: 34;
  location: 'NYC';
}

const studentTwo: Student = {
  firstName: 'Larry';
  lastName: 'Page';
  age: 24;
  location: 'WDC';
}

const studentsList: Student[] = [studentOne, studentTwo];

const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell_1 = row.insertCell(0);
  const cell_2 = row.insertCell(1);

  cell_1.textContent = student.firstName;
  cell_2.textContent = student.location;
});

document.body.appendChild(table);
