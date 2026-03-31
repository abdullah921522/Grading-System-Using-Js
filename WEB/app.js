

var english = +prompt('Enter your english marks')
var urdu = +prompt('Enter your urdu marks')
var math = +prompt('Enter your math marks')
var phy = +prompt('Enter your phy marks')
var bio = +prompt('Enter your bio marks')
var obtainedMarks = english + urdu + math + phy + bio
var total = 500;
var percentage = (obtainedMarks / total) * 100;

var grade;
if (percentage >= 90) { grade = 'A+' }
else if (percentage >= 80) { grade = 'A' }
else if (percentage >= 70) { grade = 'B' }
else if (percentage >= 60) { grade = 'C' }
else if (percentage >= 50) { grade = 'D' }
else if (percentage >= 40) { grade = 'E' }
else if (percentage < 40) { grade = 'Fail' }




document.writeln(
    `<table border='1' style='text-align:center' padding='2';
        <tr>
            <th>ENGLISH</th>
            <th>URDU</th>
            <th>MATH</th>
            <th>PHYS</th>
            <th>BIO</th>
            <th>OBTAINED MARKS</th>
            <th>GRADE</th>
</tr>
        <tr>
            <td>${english}</td>
            <td>${urdu}</td>
            <td>${math}</td>
            <td>${phy}</td>
            <td>${bio}</td>
            <td>${obtainedMarks}</td>
            <td>${grade}</td>
        </tr>
    </table>`
)

