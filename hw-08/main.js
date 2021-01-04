class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [5, 4, 4, 5];
    }

    getInfo() {
        console.log(`Студент ${this.course}го курсу ${this.university}, ${this.fullName}.`);
    }

    get getMarks() {
        return this.marks;
    }
    
    set setMarks(mark) {
        this.marks === null ? null : this.marks.push(+mark);
    }

    getAverageMark () {
        return (this.marks.reduce((total , mark) => {
            return total + +mark;
        }, 0) / this.marks.length).toFixed(2);
    }

    dismiss() {
        this.marksBefore = this.marks;
        this.marks = null;
    }
    
    recover() {
        this.marks = this.marksBefore;
    }
}




const firstStudent = new Student ('Вища Школа Психотерапії м.Одеса', 1, 'Остап Бендер')

firstStudent.getInfo();
console.log(firstStudent.getMarks);
firstStudent.setMarks = 5;
console.log(firstStudent.getMarks);
console.log(firstStudent.getAverageMark());
firstStudent.dismiss();
console.log(firstStudent.getMarks);
firstStudent.recover();
console.log(firstStudent.getMarks);

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        this.Scholarship = 1400;
        this.getSholarship();
        setInterval(this.getSholarship.bind(this), 30000);
    }

    getSholarship = () => {
        (this.getAverageMark() >= 4) ? console.log(`${this.fullName} отримав ${this.Scholarship} грн. стипендії`) :  
    console.log(`вибачте, стипендії для ${this.fullName} немає`)
    }
}

const secondStudent = new BudgetStudent(`Хогвортс`, 7, `Гаррі Поттер`)

