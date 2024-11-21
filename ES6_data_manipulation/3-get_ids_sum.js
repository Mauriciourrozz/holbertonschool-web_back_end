export default function getStudentIdsSum(student) {
  // Itera sobre cada id y lo suma iniciando la cuenta en 0
  return student.reduce((accumulator, student) => accumulator + student.id, 0);
}
