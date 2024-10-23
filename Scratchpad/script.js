class employee {
    constructor(firstname, lastname, years){
        this.firstname = firstname;
        this.lastname = lastname;
        this.years = years;
    }

}

let emp1 = new employee ('Teresa', 'Meyers', 21);
let emp2 = new employee ('Jordan', 'Meyers', 21);
let emp3 = new employee ('Aleah', 'Meyers', 16);
let emp4 = new employee ('Raelyn', 'Meyers', 2);

let employee_array = [emp1, emp2, emp3, emp4];

console.log(employee_array);