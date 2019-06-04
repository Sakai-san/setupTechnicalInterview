const employees = [
  {
    id: 1,
    fist: "Michelle",
    last: "Vez",
    gender: "f",
    bossId: 3,
    salary: 50000
  },
  {
    id: 2,
    fist: "Big",
    last: "Boss",
    gender: "f",
    bossId: 2,
    salary: 200000
  },
  {
    id: 3,
    fist: "Sub",
    last: "Boss",
    gender: "m",
    bossId: 2,
    salary: 140000
  },
  {
    id: 5,
    fist: "Simon",
    last: "Littrel",
    gender: "m",
    bossId: 3,
    salary: 140000
  }
];

/**
 * Assignment 1
 * isEmployeeMan : Employee => Boolean
 */

const isEmployeeMan = ({ gender }) => gender === "m";

/**
 * Assignment 2
 * employeesWorkingFor : number [Employees] => [Employees]
 */

const employeesWorkingFor = (bossId, employees) =>
  employees.filter(
    employee => employee.bossId === bossId && employee.id !== employee.bossId
  );

console.log(employeesWorkingFor(2, employees));

/**
 * Assignment 3
 * salarySumByGender : predicate [Employees] => number
 */
const not = f => a => !f(a);

const salarySumByGender = (isMan, employees) =>
  employees.reduce((acc, item) => (isMan(item) ? acc : acc + item.salary), 0);

console.log(salarySumByGender(not(isEmployeeMan), employees));

/**
 * Assignment 3
 * salarySumByGender : predicate [Employees] => number


{ 
    id: 2,
    sub: [{
        id: 3,
        sub: [{
            id:5,
            sub:[],

        },{
            id: 1,
            sub:[]
        }]
    }]
}
 */
