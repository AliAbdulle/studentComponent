
const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}
const section = (...props) => {
    return `<section class="bordered dashed ${props[1]}">${props[0]}</section>`
}

const aside = (...props) => {
    return `<aside class="${props[1]}">${props[0]}</aside>`
}

const passingStudents = (...props) => {
    return `<div id="student">
        ${h1(props[0], "xx-large passing")}
        ${section(props[1], "section--padded")}
        ${aside(props[2], "pushRight")}
    </div>`
}

const failingStudents = (...props) => {
    return `<div id="student">
        ${h1(props[0], "xx-large failing")} 
        ${section(props[1], "section--padded")}
        ${aside(props[2], "pushRight")}
    </div>`
}
for (currentStudent of students) {
    let studentComponent = ""
    if (currentStudent.score >= 60) {
        studentComponent = passingStudents(currentStudent.name, currentStudent.class, currentStudent.info)
        document.querySelector("#container").innerHTML += studentComponent
    } else {
        studentComponent = failingStudents(currentStudent.name, currentStudent.class, currentStudent.info)
        document.querySelector("#container").innerHTML += studentComponent
    }

}
