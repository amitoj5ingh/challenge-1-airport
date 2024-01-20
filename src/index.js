// Imports
import Airport from './airport.js';
import Plane from './plane.js';

// Create an airport
// Set airport capacity
// Change airport capacity
// Show capacity cannot be negative
// Create a plane
// Land planes at airport
// Attempt to exceed airport capacity with another plane
// Instruct planes to take off
// Show duplicate id cannot be added to airport
// Show null or undefined id cannot be added to airport

console.log("- Create an airport")
let airport = new Airport();
console.log(`An empty airport: ${airport.airplanes}`);

console.log("- Set airport capacity to 5")
airport.setCapacity(5);
console.log(`The airport capacity has been set to 5. Current capacity: ${airport.getCapacity()}`);

console.log("- Change airport capacity to 3")
airport.setCapacity(3);
console.log(`The airport capacity has been changed to 3. Current capacity: ${airport.getCapacity()}`);

console.log("- Show capacity cannot be negative, attempting to change capacity to -1")
airport.setCapacity(-1);
console.log(`The airport capacity has not changed. Current capacity: ${airport.getCapacity()}`);

console.log("- Create a plane")
let plane1 = new Plane("Plane 1");
console.log(`A plane has been created. ID: ${plane1.getId()}`);

console.log("Created more planes to land at airport")
let plane2 = new Plane("Plane 2");
let plane3 = new Plane("Plane 3");

console.log("- Land the 3 planes at the airport")
airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);
console.log(`Planes currently at the airport: ${airport.airplanes}`);

console.log("- Attempt to exceed airport capacity with a fourth plane")
let plane4 = new Plane("Plane 4");
airport.addPlane(plane4);
console.log(`Number of planes currently at the airport: ${airport.airplanes.length}`);

console.log("- Instruct planes to take off")
airport.removePlane(plane3);
airport.removePlane(plane2);
console.log(`Planes remaining at the airport: ${airport.airplanes}`);

console.log("- Show duplicate id cannot be added to airport")
let duplicatePlane = new Plane("Plane 1");
airport.addPlane(duplicatePlane);
console.log(`Number of planes currently at the airport: ${airport.airplanes.length}`);

console.log("- Show planes with null or undefined id cannot be added to airport")
let nullPlane = new Plane(null);
let undefinedPlane = new Plane(undefined);
airport.addPlane(nullPlane);
airport.addPlane(undefinedPlane);
console.log(`Number of planes currently at the airport: ${airport.airplanes.length}`);