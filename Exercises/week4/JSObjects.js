// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections:[
        { 
        sectionNum: 1,
        roomNum: 'STC 353',
        enrolled: 26, days: 'TTh',
        instructor: 'Bro T'
        },
        {
        sectionNum: 2,
        roomNum: 'STC 347',
        enrolled: 28,
        days: 'TTh',
        instructor:'Sis A'
        }
    ],

    
  };

function setNameAndCode(course){
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.innerHTML = `<h1 id="courseName">${course.name}</h1>`;
    courseCode.innerHTML = `<h2 id="courseCode">${course.code}</h2>`;
}
function sectionTemplate(element){
return `<tr>
    <td>${element.sectionNum}</td>
    <td>${element.roomNum}</td>
    <td>${element.enrolled}</td>
    <td>${element.days}</td>
    <td>${element.instructor}</td></tr>`
}
setNameAndCode(aCourse);

function insertInfoToTable(course){
    const table = document.querySelector("#sections");
    table.innerHTML = "";
    const html = course.sections.map(sectionTemplate); 
    table.insertAdjacentHTML("afterbegin", html.join(""));
}

insertInfoToTable(aCourse);