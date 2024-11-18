export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(valor) {
    this._code = valor;
  }

  get name() {
    return this._name;
  }

  set name(valor) {
    this._name = valor;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
