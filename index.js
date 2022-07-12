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
            console.table(  
                db.query(sql, (err, rows) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    return rows
                })
            )
        }
        else if (menu.menuSelection === 'View All Roles') {
            const sql = `SELECT * FROM role`
            
            console.table(  
                db.query(sql, (err, rows) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    res.json({
                        message: 'success',
                        data: rows
                    });
                })
            )
        }

        else if (menu.menuSelection === 'View All Employees') {
            const sql = `SELECT * FROM employee`
            
            console.table(  
                db.query(sql, (err, rows) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    res.json({
                        message: 'success',
                        data: rows
                    });
                })
            )
        }

        else if (menu.menuSelection === 'Add a Department') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'What is the name of the department?',
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                }
            ])
            .then( input => {
                const sql = `INSERT INTO department (name)
                    VALUES
                    ('${input.departmentName}');`
                db.query(sql, (err, rows) => {
                    return rows
                })
                console.log(`Added ${input.departmentName} to the database.`)
            })
        }

        else if (menu.menuSelection === 'Add a Role') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'roleName',
                    message: 'What is the name of the role?',
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'roleSalary',
                    message: 'What is the salary of the role?',
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'roleDepartment',
                    message: 'Which department does the role belong to?',
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                }
            ])
            .then( input => {
                const sql = `INSERT INTO role (title, salary)
                    VALUES
                    ('${input.roleName}'),
                    ('${input.roleSalary}),`
                db.query(sql, (err, rows) => {
                    return rows
                })
                console.log(`Added ${input.roleName} to the database.`)
            })
        }

        else if (menu.menuSelection === 'Add an Employee') {
            const sql = ``
            
            console.table(  
                db.query(sql, (err, rows) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    res.json({
                        message: 'success',
                        data: rows
                    });
                })
            )
        }

        else if (menu.menuSelection === 'Update an Employee Role') {
            const sql = `SELECT * FROM department`
            
            console.table(  
                db.query(sql, (err, rows) => {
                    if (err) {
                        res.status(500).json({ error: err.message });
                        return;
                    }
                    res.json({
                        message: 'success',
                        data: rows
                    });
                })
            )
        }
    })
};


displayMenu();