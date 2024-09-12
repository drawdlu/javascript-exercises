const findTheOldest = function(people) {
    return people.reduce( (oldest, person) => {
        let oldestDeathYear;
        let personDeathYear;
        
        if (!oldest.yearOfDeath) {
            oldestDeathYear = new Date().getFullYear();
        } else {
            oldestDeathYear = oldest.yearOfDeath;
        }

        if (!person.yearOfDeath) {
            personDeathYear = new Date().getFullYear();
        } else {
            personDeathYear = person.yearOfDeath;
        }

        let oldestAge = oldestDeathYear - oldest.yearOfBirth;
        let personAge = personDeathYear - person.yearOfBirth;

        if (personAge > oldestAge) {
            oldest = person;
        }

        return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
