const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur;
  let park;
  let trex1;
  let trex2;
  let trex3;
  let velociraptor1;
  let velociraptor2;
  let diplodocus;
  let gallimimus;

  beforeEach(function () {
    trex1 = new Dinosaur('t-rex', 'carnivore', 50);
    trex2 = new Dinosaur('t-rex', 'carnivore', 40);
    trex3 = new Dinosaur('t-rex', 'carnivore', 60);

    velociraptor1 = new Dinosaur('velociraptor', 'carnivore', 25);
    velociraptor2 = new Dinosaur('velociraptor', 'carnivore', 20);

    diplodocus = new Dinosaur('diplodocus', 'herbivore', 30);
    gallimimus = new Dinosaur('gallimimus', 'omnivore', 4);

    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    park = new Park("Davina", 20);
  })

  it('should have a name', function () {
  const actual = park.name;
  assert.strictEqual(actual, "Davina");
  });

  it('should have a ticket price', function () {
  const actual = park.ticket_price;
  assert.strictEqual(actual, 20);
  });

  it('should have a collection of dinosaurs', function () {
  const actual = park.dinosaurs;
  assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(velociraptor1);
    park.removeDinosaur(velociraptor1);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [trex1]);
  });

  it('should be able to find the highest attracts the most visitors value', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(velociraptor1);
    // park.findMostPopular();
    assert.deepStrictEqual(park.findMostPopular(), trex1.guestsAttractedPerDay);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor1);
    // park.findAllSpecies(dinosaur);
    assert.deepEqual(park.findAllSpecies(dinosaur), [trex1, trex2, trex3]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor1);
    park.removeAllSpecies("t-rex");
    assert.deepEqual(park.dinosaurs, [velociraptor1]);
  });

  it('should be able to calculate the total number of visits per dinosaur', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor1);
    assert.deepStrictEqual(park.totalVisits(), 175);

  });

  it('should be able to calculate the total number of visits per year', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor1);
    park.totalVisits();
    assert.deepStrictEqual(park.totalVisitsPerYear(), 45500);

  });

  it('should be able to calculate yearly revenue', function () {
    park.addDinosaur(trex1);
    park.addDinosaur(trex2);
    park.addDinosaur(trex3);
    park.addDinosaur(velociraptor1);
    assert.deepStrictEqual(park.annualRevenue(), 910000);
  });


});
