/**
 * Created by user on 6/23/2016.
 */

var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 4500
    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '0133456789',
        salary: 4501
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '0123456189',
        salary: 4502
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '0123456189',
        salary: 4502
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '0123456189',
        salary: 4502
    }
];
//<div style="http://getbootstrap.com/css/#tables"
function showList() {
    var myTable = '<table border="1"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary</th></tr>';
    for (var i in employeesList) {
        myTable += '<tr><td>'+employeesList[i].firstName+'</td><td>'+employeesList[i].lastName+'</td><td>'+employeesList[i].phone+'</td><td>'+employeesList[i].salary+'</td></tr>';
    }

    myTable += '</table>';
    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
}

var Employee = function (firstName, lastName, phone, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = parseInt(document.getElementById("salary").value);
    employeesList.push(new Employee(firstName, lastName, phone, salary));

    if (document.getElementById("totSal") != null) {
        totalSalary();
    }
}

function totalSalary() {
    var totalSal = 0;
    for (var i in employeesList) {
        totalSal += employeesList[i].salary;
    }
    var toDysplay = '<table border="1" id = "totSal"><tr><th>Total Salary = </th><th>'+totalSal+'</th></tr></table>';
    var container = document.getElementById('list_cont');
    container.innerHTML = toDysplay;
}

function deleteLast() {
    employeesList.pop();
    if (document.getElementById("totSal") != null) {
        totalSalary();
    }
}