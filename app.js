let score = prompt('Enter your score');
let grade = (100 >= score && score >= 80) ? 'A' : (80 > score && score >= 70) ? 'B' : (70 > score && score >= 60) ? 'C' : (60 > score && score >= 50) ? 'D' :
            (50 > score && score >= 0) ? 'F' : 'invalid score'
console.log(`score = ${score}`)
console.log(`grade = ${grade}`)
alert(`Score ${score}\nGrade ${grade}`)
