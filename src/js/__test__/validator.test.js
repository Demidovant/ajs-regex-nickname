import Validator from '../validator';

test('Проверка на совпадение шаблона - success', () => {
  const name = 'a123_adc-b';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeTruthy();
});

test('Проверка на число в начале строки - fail', () => {
  const name = '1abc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('Проверка на число в конце строки - fail', () => {
  const name = 'abc1';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '_' в начале строки - fail", () => {
  const name = '_abc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '_' в конце строки - fail", () => {
  const name = 'abc_';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '-' в начале строки - fail", () => {
  const name = '-abc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на '-' в конце строки - fail", () => {
  const name = 'abc-';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('Проверка на четыре цифры в строке - fail', () => {
  const name = 'a1234c';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на недопустимый символ '!' в строке - fail", () => {
  const name = 'a134jk!jc';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test("Проверка на недопустимый символ 'ц' в строке - fail", () => {
  const name = 'a12ц34c';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});

test('Проверка на ник из двух букв - success', () => {
  const name = 'aZ';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeTruthy();
});

test('Проверка на ник из Uppercase букв - success', () => {
  const name = 'ABCXYZ';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeTruthy();
});

test('Проверка на ник email (содержит @) - fail', () => {
  const name = 'test@email.com';
  const validator = new Validator();
  const validateNameStatus = validator.validateUsername(name);

  expect(validateNameStatus).toBeFalsy();
});
