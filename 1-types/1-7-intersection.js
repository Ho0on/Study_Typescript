"use strict";
{
    function internWork(person) {
        console.log(person.name, person.employeeId, person.work());
    }
    internWork({ name: 'hoon', score: 1, employeeId: 123, work: () => { } });
}
