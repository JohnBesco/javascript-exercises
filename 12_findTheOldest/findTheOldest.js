function getAge(person) {
    const currentYear = new Date().getFullYear();
    const age = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
    return age;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        const oldestAge = getAge(oldestPerson);
        const currentAge = getAge(currentPerson);
        return currentAge > oldestAge ? currentPerson : oldestPerson;
    });
};




// Do not edit below this line
module.exports = findTheOldest;
