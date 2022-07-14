const inquirer = require('inquirer');
const consoleTable = require('console.table');
const db = require('./db/connection');

let roleOptions = '';

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
            
            db.query(sql, (err, rows) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                console.table(rows)
            })
            
        }
        else if (menu.menuSelection === 'View All Roles') {
            const sql = `SELECT role.*, department.name AS department_name
                FROM role
                LEFT JOIN department ON role.department_id = department.id;`
            
            db.query(sql, (err, rows) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                console.table(rows)
            })
        }

        else if (menu.menuSelection === 'View All Employees') {
            const sql = `SELECT employee.*, role.title AS role_title, role.salary AS role_salary, role.department_id AS department_id, employee.first_name AS manager_first_name, employee.last_name AS manager_last_name
                FROM employee AS employee
                LEFT JOIN role ON employee.role_id = role.id
                LEFT JOIN employee AS manager ON employee.manager_id = employee.id;`

            db.query(sql, (err, rows) => {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                console.table(rows)
            })
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
                    type: 'list',
                    name: 'roleDepartment',
                    message: 'Which department does the role belong to?',
                    choices: ['IT', 'Foreclosure', 'Bankruptcy', 'Marketing', 'Finance', 'Human Resources'],
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
                const sql = `INSERT INTO role (title, salary, department_id)
                    VALUES
                    ('${input.roleName}'),
                    ('${input.roleSalary}),
                    ('${input.roleDepartment})`
                db.query(sql, (err, rows) => {
                    return rows
                })
                console.log(`Added ${input.roleName} to the database.`)
            })
        }

        else if (menu.menuSelection === 'Add an Employee') {
            
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeeFirstName',
                    message: 'What is the first name of the employee?',
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
                    name: 'employeeLastName',
                    message: 'What is the last name of the employee?',
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                },
                {
                    type: 'list',
                    name: 'employeeRole',
                    message: 'Which is the role of the employee?',
                    choices: ['IT Team Lead', 'Computer Support Staff', 'Computer Support Intern', 'FC Attorney', 'FC Legal Assistant', 'BK Attorney', 'BK Legal Assistant', 'Marketing Manager', 'Marketing Team Member', 'Finance Manager', 'Financial Analyst', 'HR Manager', 'HR Team Member'],
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
                    name: 'managerFirsttName',
                    message: "What is the first name of the employee's manager?",
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
                    name: 'managerLastName',
                    message: "What is the last name of the employee's manager?",
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                },
            ])
            .then( input => {
                const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
                    VALUES
                    ('${input.employeeFirstName}'),
                    ('${input.employeeLastName}),
                    ('${input.employeeRole})
                    ('${input.managerFirstName})
                    ('${input.managerLastName})`
                db.query(sql, (err, rows) => {
                    return rows
                })
                console.log(`Added ${input.employeeFirstName} ${input.employeeLastName}to the database.`)
            })
        }

        else if (menu.menuSelection === 'Update an Employee Role') {
            return inquirer.prompt([
                {
                    type: 'number',
                    name: 'employeeToUpdate',
                    message: "Which employee's role do you want to update?",
                    validate: menu => {
                        if (menu) {
                            return true;
                        } else {
                            console.log('Please choose an option!');
                        }
                    }
                },
                {
                    type: 'number',
                    name: 'roleToUpdate',
                    message: "What is their new role?",
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
                const sql = `UPDATE employee SET role_id = ${input.roleToUpdate}
                    WHERE id = ${input.employeeToUpdate}`
                db.query(sql, (err, rows) => {
                    return rows
                })
                console.log(`Role has been updated.`)
            })
        }
    })
};


displayMenu();