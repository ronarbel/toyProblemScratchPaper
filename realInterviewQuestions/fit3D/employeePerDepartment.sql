SELECT department.name, SUM(COUNT_OF_EMPLOYEES_IN_THE_DEPARTMENT), employee.name 
FROM department
INNER JOIN employee, SUM(COUNT_OF_EMPLOYEES_IN_THE_DEPARTMENT), 


SELECT (DISTINCT?) department.name, sum_of_emp
FROM department
	LEFT JOIN employee
		ON id=dept_id
ORDER BY sum_of_emp DESC

https://sqlbolt.com/lesson/select_queries_with_aggregates

SELECT name, count(*) AS count_of_employees_in_the_department
FROM department
	LEFT JOIN employee
		ON id=dept_id
ORDER BY count_of_employees_in_the_department DESC