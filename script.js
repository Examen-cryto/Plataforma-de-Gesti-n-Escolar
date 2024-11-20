// script.js
const studentForm = document.getElementById("studentForm");
const studentTableBody = document.getElementById("studentTableBody");

studentForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener datos del formulario
  const studentName = document.getElementById("studentName").value.trim();
  const studentCourse = document.getElementById("studentCourse").value.trim();
  const studentGrade = document.getElementById("studentGrade").value.trim();

  if (!studentName || !studentCourse || !studentGrade) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear una nueva fila en la tabla
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${studentName}</td>
    <td>${studentCourse}</td>
    <td>${studentGrade}</td>
    <td class="actions">
      <button class="delete-button">Eliminar</button>
    </td>
  `;

  // Agregar la funcionalidad para eliminar la fila
  const deleteButton = newRow.querySelector(".delete-button");
  deleteButton.addEventListener("click", function () {
    if (confirm(`¿Estás seguro de que deseas eliminar a ${studentName}?`)) {
      newRow.remove();
    }
  });

  // Agregar la fila a la tabla
  studentTableBody.appendChild(newRow);

  // Limpiar el formulario
  studentForm.reset();
});
