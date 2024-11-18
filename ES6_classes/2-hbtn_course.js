export default class HolbertonCourse {
  constructor(name, lenght, students) {
    if (typeof (name) === 'string') { // verifico si el tipo de name es un string
      this._name = name;
    } else {
      throw new TypeError('Name must be a string');
    }

    if (typeof (lenght) === 'number') { // lo mismo lenght
      this._lenght = lenght;
    } else {
      throw new TypeError('Lenght must be a number');
    }

    if (Array.isArray(students)) { // lo mismo con students solo que se hace asi
      this._students = students;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get lenght() {
    return this._lenght;
  }

  set lenght(value) {
    if (typeof value === 'number') {
      this._lenght = value;
    } else {
      throw new TypeError('Lenght must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(this.students)) {
      this._lenght = value;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }
}
