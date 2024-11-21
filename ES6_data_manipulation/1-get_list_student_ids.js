export default function getListStudentIds(students) {
  if (!Array.isArray(students)) { // compruebo si la lista esta vacia
    return []; // si esta vacia retorno una lista vacia
  }
  // se reccorre cada estudiante y se extrae el id y se almacena en una nueva lista
  const studentIds = students.map((student) => student.id);
  return studentIds;
}
