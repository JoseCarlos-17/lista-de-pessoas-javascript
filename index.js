let add_student_button = document.querySelector(".add-student-button");
let students_list = document.querySelector(".students-list");
let input = document.querySelector("#input-name")
let id = ''

let students = [
  { id: 0, name: "John Bender" },
  { id: 1, name: "Allison Reynolds" },
  { id: 2, name: "Brian Johnson" }
];

const load_students_list = (students) => {
  if (students.length > 0) {
    students_list.innerHTML = students.map((item, id) => {
      return (
        `<li style="${li_style}">
          ${item.name}
          <button style="${button_style}" class="remove-btn" data-remove="${id}">
            X
          </button>
        </li>`
      )}
    ).join('')
  } else {
    students_list.innerHTML = 'Not have students'
  }
};
load_students_list(students);

const add_student = () => {
  id = +students.length + 0

  students.push({ id: id, name: input.value });
  students_list.innerHTML +=
  `<li style="${li_style}">
    ${input.value}
    <button style="${button_style}" class="remove-btn" data-remove="${students.at(-1).id}">
      X
    </button>
  </li>`;

  document.querySelector("#input-name").value = ''
  load_students_list(students)
}

const HTML_of_filtered_students = (students_filtered_array) => {
  if (students_filtered_array.length > 0) {
    return students_filtered_array.map((item, id) =>
      `<li style="${li_style}">
        ${item.name}
        <button style="${button_style}" class="remove-btn" data-remove="${id}">
          X
        </button>
      </li>`
    )
  } else {
    return 'finding...'
  }
}

const filter_students = () => {
  let students_filtered_array = students.filter(person => person.name == input.value)

  if (input.value.length !== 0) {
    students_list.innerHTML = HTML_of_filtered_students(students_filtered_array)
  } else { 
    load_students_list(students);
  }
}

const remove_student = (studentId) => {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id == studentId) {
      students.splice(i, 1)
      load_students_list(students)
    }
  }
}

document.body.addEventListener('click', (event) => {
  let studentID = event.target.getAttribute("data-remove")

  if (studentID) {
    remove_student(studentID)
  }
})