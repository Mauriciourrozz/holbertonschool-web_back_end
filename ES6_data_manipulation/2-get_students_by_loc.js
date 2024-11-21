export default function getStudentsByLocation(student, location) {
  // funcion que filtra de la clase student, el atributo location
  // solo se toman los estudiantes que tengan la location que se pasa por parametro
  return student.filter((student) => student.location === location);
}
