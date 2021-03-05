const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');

function processTeam(team){
    let employees = [];
    team.forEach(member => {
        if(member.hasOwnProperty('officeNumber')){
            var manager = new Manager(member.name, member.id, member.email, member.officeNumber)
            employees.push(manager)
        } else if( member.hasOwnProperty('github') ){
            var engineer = new Engineer(member.name, member.id, member.email, member.github)
            employees.push(engineer)
        } else if( member.hasOwnProperty('school')){
            var intern = new Intern(member.name, member.id, member.email, member.school)
            employees.push(intern)
        }
    })
    return employees;
}
function generateTeamCards(employees){
    var cards = '';
    employees.forEach(employee => {
        if(employee.getRole() === 'Manager'){
            cards+= `
            <div class="card">
                <div class="card-title">
                    <span class="titles" id="name">${employee.name}</span><br>
                    <span class="titles" id="position"><i class="fas fa-mug-hot"></i> ${employee.getRole()}</span>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>ID: </strong> ${employee.id}</li>
                        <li class="list-group-item"><strong>Email: </strong> <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item"><strong>Office Number: </strong> ${employee.officeNumber}</li>
                    </ul>
                </div>
            </div>
            `
        } else if(employee.getRole() === 'Engineer'){
            cards+= `
            <div class="card">
                <div class="card-title">
                    <span class="titles" id="name">${employee.name}</span><br>
                    <span class="titles" id="position"><i class="fas fa-glasses"></i> ${employee.getRole()}</span>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>ID: </strong> ${employee.id}</li>
                        <li class="list-group-item"><strong>Email: </strong> <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item"><strong>Github: </strong> <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>
                    </ul>
                </div>
            </div>
            `
        } else if(employee.getRole() === 'Intern'){
            cards+= `
            <div class="card">
                <div class="card-title">
                    <span class="titles" id="name">${employee.name}</span><br>
                    <span class="titles" id="position"><i class="fas fa-graduation-cap"></i> ${employee.getRole()}</span>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item"><strong>ID: </strong> ${employee.id}</li>
                        <li class="list-group-item"><strong>Email: </strong> <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item"><strong>School: </strong> ${employee.getSchool()}</li>
                    </ul>
                </div>
            </div>
            `
        }
        
    })
    return cards;
}


function generateHtml(team){
    var people = processTeam(team);
    var htmlObj =  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==" crossorigin="anonymous" />
        <link rel="stylesheet" href="../dist/style.css">
        <title>Your Team</title>
    </head>
    <body>
        <div class="row" id='top'>
           Your Assembled Team
        </div>
        <div class="row" id='main'>
            ${generateTeamCards(people)}
        </div>
    </body>
    </html>
    `

    return htmlObj;
}

module.exports = generateHtml;
