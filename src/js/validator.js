export default class Validator {
  validateUsername(name) {
    this.name = name;
    return (/^[a-zA-Z][a-zA-Z0-9\-_]*[a-zA-Z]$/.test(this.name)) && (!/[0-9]{4}/.test(this.name));
  }
}
