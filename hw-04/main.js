const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const pairs = function (students) {
    const pair = [[students.slice(4).join(' і ')], [students.slice(1,3).join(' і ')], [students[0],students[3]]];
    return pair;
}

console.log(pairs(students));

const group = pairs(students);
const projects = function (group, themes) {
    const project = [];
        for (i = 0; i < group.length && i < themes.length; i++) {
            project.push([group[i].join(' і '), themes[i]]);
        }
        return project;
}

console.log(projects(group, themes));

const appraisal = function(students, marks) {
    const result = [];
        for(i = 0; i < students.length && i < marks.length; i++) {
            result.push([students[i], marks[i]]);
        }
        return result;
}

console.log(appraisal(students, marks));



const groupAppraisal = projects(group,themes);
const appraisalForProject = function (groupAppraisal){
    const finishResult = [];
    
        for ( i = 0; i < groupAppraisal.length; i++){
            finishResult.push([groupAppraisal[i].join(' , '), Math.floor(Math.random() * 5) +1]);
        }
        return finishResult;
}

console.log(appraisalForProject(groupAppraisal));