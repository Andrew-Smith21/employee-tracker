INSERT INTO department (name)
VALUES
    ('IT'),
    ('Foreclosure'),
    ('Bankruptcy'),
    ('Marketing'),
    ('Finance'),
    ('Human Resources');

INSERT INTO role (title, salary, department_id)
VALUES  
    ('IT Team Lead', '95000', 1),
    ('Computer Support Staff', '70000', 1),
    ('Computer Support Intern', '35000', 1),
    ('FC Attorney', '150000', 2),
    ('FC Legal Assistant', '45000', 2),
    ('BK Attorney', '150000', 3),
    ('BK Legal Assistant', '45000', 3),
    ('Marketing Manager', '60000', 4),
    ('Marketing Team Member', '50000', 4),
    ('Finance Manger', '85000', 5),
    ('Financial Analyst', '65000', 5),
    ('HR Manager', '70000', 6),
    ('HR Team Member', '50000', 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  
    ('Andrew', 'Smith', 1, 1),
    ('Davey', 'Johnson', 2, 1),
    ('Michael', 'Pittman', 3, 1),
    ('Aldous', 'Huxley', 4, 4),
    ('Scout', 'Finch', 5, 4),
    ('Simon', 'Powell', 6, 6),
    ('Jenny', 'Gillis', 7, 6),
    ('David', 'Beckham', 8, 8),
    ('Josef', 'Martinez', 9, 8),
    ('Tom', 'Brady', 10, 10),
    ('Peyton', 'Manning', 11, 10),
    ('Gary', 'Payton', 12, 12),
    ('Rafael', 'Nadal', 13, 12);