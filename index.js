const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml')

var team = [];
function promptUser(position){
    inquirer.prompt([
        {
         type:'input',
         name:'name',
         message:'What is your name?'
        },
        {
         type:'input',
         name:'id',
         message:'What is your id?'
        },
        {
         type:'input',
         name:'email',
         message:'What is your email?'
        },
        {
         type:'input',
         name:'officeNumber',
         message:'What is your office number?',
         when: position === 'Manager'
        },
        {
         type:'input',
         name:'github',
         message:'What is your github profile?',
         when: position === 'Engineer'  
        },
        {
        type:'input',
         name:'school',
         message:'What is the school you went to?',
         when: position === 'Intern' 
        },
        {
         type: "list",
         name: "anotherMember",
         message: "Who else are you adding to your team?",
         choices: ["Engineer", "Intern", new inquirer.Separator(), 'Create new team']
        }
     ])
     .then((answers) => {
         team.push(answers)
         
         switch(answers.anotherMember){
             case 'Engineer':
                 promptUser('Engineer')
                 break
             case 'Intern':
                 promptUser('Intern')
                 break
             case 'Create new team':
                 console.log(team)
                 createTeam();
                 break;
         }
     })
}
function createTeam(){
    try{
        var html = generateHtml(team);
        fs.writeFile('./dist/team.html', html, (err) => {
            if(err) console.error('Error happened')
        })
    } catch(error){
        console.log(error)
    }
}

function init() {
    promptUser('Manager')
}

init();


