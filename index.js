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
 * isEmployeeMan :: (Employee) → bool
 */

const isEmployeeMan = ({ gender }) => gender === "m";

/**
 * Assignment 2
 * getEmployee :: (number, [Employee]) → Employee|undefined
 */

const getEmployee = (id, employees) => employees.find(e => id === e.id);
console.log(getEmployee(19, employees));

/**
 * Assignment 3
 * hasBoss :: Employee → bool
 */

const hasBoss = employee => employee.id !== employee.bossId;
console.log(hasBoss(employees[1]));

/**
 * Assignment 3 : Do implement not
 * not :: (any → bool) → any → bool
 * isEmployeeWoman :: (Employee) → bool
 */

const not = f => a => !f(a);
const isEmployeeWoman = not(isEmployeeMan);

/**
 * Assignment 4
 * filterEmployees :: ((Employee → bool), [Employee]) → [Employee]
 */

const filterEmployees = (criteria, employees) => employees.filter(criteria);
console.log("filterEmployees", filterEmployees(isEmployeeMan, employees));

/**
 * Assignment 4: increase salaries
 * hasBoss :: Employee → bool
 */

const increasedSalary = (percent, salary) => salary * (1 + percent);
const doIncreaseSalary = criteria => employee =>
  criteria(employee) ? increasedSalary(0.03, employee.salary) : employee.salary;

const doIncreaseSalaries = criteria => employees =>
  employees.map(e => ({
    ...e,
    salary: doIncreaseSalary(criteria)(e)
  }));
console.log("newEmployee", doIncreaseSalaries(isEmployeeWoman)(employees));

/**
 * Assignment 4
 * subordinatesOf :: (number, [Employee]) → [Employee]
 */

const subordinatesOf = (bossId, employees) =>
  employees.filter(
    employee => employee.bossId === bossId && employee.id !== employee.bossId
  );

console.log(subordinatesOf(2, employees));

/**
 * Assignment 5
 * salarySumByGender :: ((Employee → boolen) , [Employees]) → number
 */

const salarySumByGender = (isOfGender, employees) =>
  employees.reduce(
    (acc, item) => (isOfGender(item) ? acc + item.salary : acc),
    0
  );

console.log(salarySumByGender(isEmployeeWoman, employees));

/**
 * Assignment 6
 * generateOrganigram :: [Employee] => object
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

const lookup = (id, organigramm) => {
  for (let i = 0; i < organigramm.sub.length; i++) {
    if (organigramm.sub[i].id === id) {
      return organigramm.sub[i];
    }
  }
  return false;
};

const generateOrganigram = employees => {
  let organigram = {};
  for (let i = 0; i < employees.length; i++) {
    const currentEmployee = employees[i];
    if (isBoss(currentEmployee)) {
      orgranigram = {
        id: currentEmployee.id,
        sub: [...orgranigram]
      };
    } else if (hasBoss(currentEmployee)) {
      const node = lookup(currentEmployee.bossId, orgranigram);
      if (node) node.sub.push = currentEmployee;
    }
  }
};

*/

const organigramLeft = {
  id: 4,
  sub: [
    {
      id: 2,
      sub: []
    },
    {
      id: 5,
      sub: [
        {
          id: 8,
          sub: []
        }
      ]
    }
  ]
};

const organigramRight = {
  id: 7,
  sub: [
    {
      id: 9,
      sub: [
        {
          id: 3,
          sub: []
        }
      ]
    },
    {
      id: 1,
      sub: []
    }
  ]
};

const organigram = {
  id: 10,
  sub: [organigramLeft, organigramRight]
};

const lookup = (id, organigram) => {
  if (organigram.id === id) {
    return organigram;
  } else {
    let node = null;
    for (let i = 0; i < organigram.sub.length; i++) {
      if (node === null) {
        node = lookup(id, organigram.sub[i]);
      }
    }
    return node;
  }
};

console.log(lookup(4, organigram));
