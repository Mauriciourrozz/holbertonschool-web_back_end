export default function getListStudents() {
  class student {
    constructor(id, firstName, location) {
      this.id = id;
      this.firstName = firstName;
      this.location = location
    }
  }
  return [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
  ];
}
