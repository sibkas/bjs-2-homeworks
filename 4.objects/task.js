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
Student.prototype.addMarks = function(...marksToAdd) {
  if (!this.marks) return;
  this.marks.push(...marksToAdd);
};

// Получение среднего балла
Student.prototype.getAverage = function() {
  if (!this.marks || this.marks.length === 0) return 0;
  return this.marks.reduce((acc, mark) => acc + mark, 0) / this.marks.length;
};

// Исключение студента
Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
};
