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
 * Assignment 2 : Do implement not
 * not :: (any → bool) → any → bool
 * isEmployeeMan :: (Employee) → bool
 */

const not = f => a => !f(a);
const isEmployeeWoman = not(isEmployeeMan);

/**
 * Assignment 2b : Do implement haveBoss
 * haveBoss :: Employee → bool
 */

const hasBoss = employee => employee.bossId !== employee.id;

/**
 * Assignment 3
 * subordinatesOf :: (number, [Employee]) → [Employee]
 */

const subordinatesOf = (bossId, employees) =>
  employees.filter(
    employee => employee.bossId === bossId && employee.id !== employee.bossId
  );

console.log(subordinatesOf(2, employees));

/**
 * Assignment 4
 * salarySumByGender :: ((Employee → boolen) , [Employees]) → number
 */

const salarySumByGender = (isOfGender, employees) =>
  employees.reduce(
    (acc, item) => (isOfGender(item) ? acc + item.salary : acc),
    0
  );

console.log(salarySumByGender(isEmployeeWoman, employees));

const salarySumByGender2 = (isOfGender, employees) =>
  employees.filter(isOfGender).reduce((acc, item) => acc + item.salary, 0);
console.log(salarySumByGender2(isEmployeeWoman, employees));

/**
 * Assignment 5
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
*/

const lookup = (id, organigramm) => {
  if (orgranigramm.id === undefined) {
    return null;
  } else if (id === organigramm.id) {
    return organigramm;
  } else {
    return lookup(id, orgrgramm.sub);
  }
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
      lookup(orgranigram).sub.push = currentEmployee;
    }
  }
};
