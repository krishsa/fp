let classroom = [
    { name: 'Peppa', type: 'student' },
    { name: 'Suzi', type: 'student' },
    { name: 'George', type: 'student' }
]
let addTeacher = function (studentlist) {
    let studTeacherLt =  []
    for(let i=0; i<studentlist.length;i++){
        studTeacherLt.push(studentlist[i])
    }
    studTeacherLt.push({ name: 'Gazell', type: 'teacher' })
    return studTeacherLt
}
let periodlt = addTeacher(classroom)

for (var i = 0; i < classroom.length; i++) {
    console.log(classroom[i])
}
console.log("----------------------------------")
for (var i = 0; i < periodlt.length; i++) {
    console.log(periodlt[i])
}

//////////////
console.log("----------- Enhanced Version --------------------")
const addTeacherEnhanced = students => {
    let withTeacher = Object.assign([], students);
    withTeacher.push({ name: 'Gazell', type: 'teacher' });
    return withTeacher;
}
periodlt = addTeacherEnhanced(classroom)

classroom.map(v => console.log(v));
console.log("----------Enhanced ------------------------")
periodlt.map(v => console.log(v));
console.log("--------------------------")

const addTeacherEnhanced2 = students => [...students, { name: 'Gazell', type: 'teacher' }];
let periodlt2 = addTeacherEnhanced2(classroom)
classroom.map(v => console.log(v));
console.log("----------Enhanced 2------------------------")
periodlt2.map(v => console.log(v));

