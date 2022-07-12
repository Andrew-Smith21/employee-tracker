const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db/connection');

const displayMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menuSelection',
            message: 'What would you like to do?',
            choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add a Department', 'Add a Role', 'Add an Employee', 'Update an Employee Role'],
            validate: menu => {
                if (menu) {
                    return true;
                } else {
                    console.log('Please choose an option!');
                }
            }
    
        }
    ])

    .then(menu => {
        if (menu.menuSelection === 'View All Departments') {
            const sql = `SELECT * FROM department`
            
            const json = db.query(sql, (err, rows) => {
                            if (err) {
                                res.status(500).json({ error: err.message });
                                return;
                            }
                            res.json({
                                message: 'success',
                                data: rows
                            });
                        })

            console.table(json)
        }
    })
};


const viewDepartments = 

displayMenu();