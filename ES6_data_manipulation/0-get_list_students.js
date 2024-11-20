export default function getListStudents() {
  const arr = [];
  const x = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  const y = {
    id: 2,
    firstName: 'Jame',
    location: 'Columbia',
  };

  const a = {
    id: 3,
    firstName: 'Serena',
    location: 'San Francisco',
  };

  arr.push((x), (y), (a));
  return arr;
}
