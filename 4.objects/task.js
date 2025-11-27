function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

// Установка предмета
Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
};


// Добавление оценок
Student.prototype.addMarks = function(...marks) {
  if (!this.marks) {
    // студент исключён, marks удалены
    return;
  }
  this.marks.push(...marks);
};

// Получение среднего балла
Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) {
    return 0;
  }
  const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
  return sum / this.marks.length;
};

// Исключение студента
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
