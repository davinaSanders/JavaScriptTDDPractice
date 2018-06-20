const Park = function (name, ticket_price) {
this.name = name;
this.ticket_price = ticket_price;
this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
  const index = this.dinosaurs.indexOf(dinosaur);
  // finds index of a particular object in this case
  this.dinosaurs.splice(index, 1);
  // this allows you to remove at the index and including the index however many is decided by the next number.
}

Park.prototype.findMostPopular = function () {
  // let mostPopular = this.dinosaurs[0];

  // for (const dinosaur of this.dinosaurs) {
  //   if (dinosaur.guestsAttractedPerDay > mostPopular.guestsAttractedPerDay) {
  //     mostPopular = dinosaur;
  //   }
  // }
  let popularArray = [];

  for (const dinosaur of this.dinosaurs) {
    popularArray.push(dinosaur.guestsAttractedPerDay);
  }
  popularArray.sort();
  let mostPopular = popularArray[popularArray.length-1];
  return mostPopular;
};

Park.prototype.findAllSpecies = function (dinosaur) {
  const transformedArray = this.dinosaurs.filter((dino) => {
    return dinosaur.species === dino.species;
  });
  return transformedArray;
}


Park.prototype.removeAllSpecies = function (species) {
  const keepDinosaurs = [];

  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species !== species) {
      keepDinosaurs.push(dinosaur);
    }
  }

  this.dinosaurs = keepDinosaurs;
}

Park.prototype.totalVisits = function () {

  let totalVisits = 0;

  this.dinosaurs.forEach((dinosaur) => {
    totalVisits += dinosaur.guestsAttractedPerDay;
  });
  return totalVisits;
}

Park.prototype.totalVisitsPerYear = function () {
  let totalVisits = 0;
  let weekTotal = (this.totalVisits() * 5);
  return weekTotal * 52;

}

Park.prototype.annualRevenue = function () {
  return this.totalVisitsPerYear() * this.ticket_price;
}

module.exports = Park;
