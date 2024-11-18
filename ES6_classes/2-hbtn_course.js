export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof (name) === 'string') { //verifico si el tipo de name es un string
      this._name = name;
    }
    if (typeof (lenght) === 'number') { //lo mismo lenght
      this._lenght = lenght;
    }
    if (Array.isArray(students)) { //lo mismo con students solo que se hace asi
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(value) {
    if (typeof value === 'number') {
      this._lenght = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(this.students)) {
      this._lenght = value;
    }
  }
}
