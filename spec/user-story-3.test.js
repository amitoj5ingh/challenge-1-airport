// Imports
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

// User Story 3
// Test 1
let testName = "Test 3.1: The array of planes does not exceed the capacity.";

// Arrange
let airport = new Airport();
airport.setCapacity(3);
let plane1 = new Plane("Plane 1");
let plane2 = new Plane("Plane 2");
let plane3 = new Plane("Plane 3");
let plane4 = new Plane("Plane 4");
let expectedOutput = 3;

// Act
airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);
airport.addPlane(plane4); // Should not be added
let actualOutput = airport.airplanes.length;

// Assert
let testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport, plane1, plane2, plane3, plane4 = null;
expectedOutput, actualOutput = null;
testResult = null;


// Test 2
testName = "Test 3.2: The plane id is not already in the array of planes.";

// Arrange
airport = new Airport();
airport.setCapacity(3);
plane1 = new Plane("Plane 1");
plane2 = new Plane("Plane 2");
plane3 = new Plane("Plane 2"); // Same id as plane2
plane4 = new Plane("Plane 4");
expectedOutput = "Plane 4";

// Act
airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3); // Should not be added
airport.addPlane(plane4);
actualOutput = airport.airplanes[2].getId(); // Third item in array should be plane 4

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport, plane1, plane2, plane3, plane4 = null;
expectedOutput, actualOutput = null;
testResult = null;


// Test 3
testName = "Test 3.3: The plane id is not null.";

// Arrange
airport = new Airport();
airport.setCapacity(3);
plane1 = new Plane("Plane 1");
plane2 = new Plane(null);
expectedOutput = 1;

// Act
airport.addPlane(plane1);
airport.addPlane(plane2); // Should not be added
actualOutput = airport.airplanes.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

//Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

//Cleanup
airport, plane1, plane2 = null;
expectedOutput, actualOutput = null;
testResult = null;


// Test 4
testName = "Test 3.4: The plane id is not undefined.";

// Arrange
airport = new Airport();
airport.setCapacity(3);
plane1 = new Plane("Plane 1");
plane2 = new Plane();
expectedOutput = 1;

// Act
airport.addPlane(plane1);
airport.addPlane(plane2); // Should not be added
actualOutput = airport.airplanes.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

//Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

//Cleanup
airport, plane1, plane2 = null;
expectedOutput, actualOutput = null;
testResult = null;


// Test 5
testName = "Test 3.5: The array of planes length is increased by 1."; // Upon reflection this should have been test 3.1

// Arrange
airport = new Airport();
airport.setCapacity(3);
plane1 = new Plane("Plane 1");
expectedOutput = 1;

// Act
airport.addPlane(plane1);
actualOutput = airport.airplanes.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

//Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

//Cleanup
airport, plane1 = null;
expectedOutput, actualOutput = null;
testResult = null;


// Test 6
testName = "Test 3.6: After adding the plane, the array of planes contains the plane id."; // As above, this should have been test 3.2

// Arrange
airport = new Airport();
airport.setCapacity(3);
plane1 = new Plane("Plane 1");
expectedOutput = "Plane 1";

// Act
airport.addPlane(plane1);
actualOutput = airport.airplanes[0].getId();

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

//Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

//Cleanup
airport, plane1 = null;
expectedOutput, actualOutput = null;
testResult = null;