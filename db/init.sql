create table employees (
    id serial primary key,
    first varchar (150),
    last varchar (150), 
    email varchar(1000),
    gender varchar (50)
);

select * from employees;