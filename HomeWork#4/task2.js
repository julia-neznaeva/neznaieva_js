class Student {
  get direction() {
    return this._direction;
  }

  set direction(value) {}

  constructor(fullName, direction) {
    this._fullName = fullName;
    this._direction = direction;
  }

  showFullName() {
    return this._fullName;
  }

  isNameIncludes(data) {
    return this._fullName.includes(data);
  }

  static studentBuilder() {
    return new Student("Ihor Kohu", "qc");
  }
}

const stud1 = new Student('Ivan Petrenko', 'web');
let other = new Student("Tom Soyer", "C#");

console.log(stud1.isNameIncludes('Ivan'));
console.log(stud1.isNameIncludes('Denysenko'));

let stud2 = new Student("Ivan Petrenk", "web");
console.log(stud2);
let stud3 = new Student("Sergiy Koval", "python");
console.log(stud3);
let stud4 = Student.studentBuilder();
console.log(stud4);
