const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


 const getSubjects = (students) => {
   let subjects = Object.keys(students.subjects)
   subjects = subjects.map((item) => (item[0].toUpperCase() + item.slice(1).toLowerCase()).split('_').join(' '))
   return subjects;
 } 

 console.log(getSubjects(students[1]));




 const getAverage = (item) => {
   let count = item.reduce((count, mark) => count + mark, 0);
   return +(count / item.length).toFixed(2);
 }

const getAverageMark = (students) => {
  let subjects = Object.values(students.subjects);
  let mark= subjects[0].concat(subjects[1], subjects[2]);
  return getAverage(mark);
}

console.log(getAverageMark(students[1]));



const getStudentsInfo = (students) => {
  return {
    course: students.course,
    name: students.name,
    averageMark: getAverageMark(students)
  }
}

console.log(getStudentsInfo(students[2]));



const getStudentsNames = (students) => 
              (students.map(({name}) => name)).sort();

console.log(getStudentsNames(students));


const getBestStudent = (students) => {
  const sortByAverageMark = (array) => array.sort((a, b) => b.averageMark - a.averageMark);
  const studentsArray = students.map(students => getStudentsInfo(students));
  const sortStudentsByAverageMark = sortByAverageMark(studentsArray);
  return sortStudentsByAverageMark[0].name;
}

console.log(getBestStudent(students));

const calculateWordLetters = (word) => {
  const lettersArr = word.toLowerCase().split("");
  let calculete = {};
  lettersArr.map(letter => calculete.hasOwnProperty(letter) ? calculete[letter] += 1 : calculete[letter] = 1);
  return calculete;
}

console.log(calculateWordLetters('лайкра'));