interface Customer {
    id: number;
    name: string;
    email: string;
}

let ethan: Customer = {id: 1, name: "Ethan", email: "nick@saban.org"};


export interface Employees extends Customer {
     yearsOfService: number;
}

let ben: Employees = {id: 2, name: "Ben", email: "red@team.com", yearsOfService: 2};


console.log(ethan.email);
console.log(ben.yearsOfService);

console.log(`The customer ${ethan.name} has an email address of ${ethan.email} and the employee ${ben.name} has been with the company for ${ben.yearsOfService} years.`);

