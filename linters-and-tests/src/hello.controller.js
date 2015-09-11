export default class HelloController {
  constructor() {
    this._hello = 'World';
  }

  get hello() {
    return `Hello ${this._hello}!`;
  }

  set hello(hello) {
    if (typeof hello === 'string' && hello.length > 0) {
      this._hello = hello;
    }
  }
}
