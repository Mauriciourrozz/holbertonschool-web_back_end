export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a satring');
    } else {
      this._name = name;
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a satring');
    } else {
      this._code = code;
    }
    return code;
  }
}
