export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') { // verifico si el tipo de name es un string
      this._name = name;
    } else {
      throw new TypeError('name must be a string');
    }

    if (typeof length === 'number') { // lo mismo lenght
      this._length = length;
    } else {
      throw new TypeError('lenght must be a number');
    }

    if (Array.isArray(students) && students.every((students) => typeof students === 'string')) { // lo mismo con students solo que se hace asi
      this._students = students;
    } else {
      throw new TypeError('students must be an Array');
    }
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (Array.isArray(this.students) && students.every((students) => typeof students === 'string')) {
      this._students = value;
    } else {
      throw new TypeError('students must be an Array');
    }
  }
}
