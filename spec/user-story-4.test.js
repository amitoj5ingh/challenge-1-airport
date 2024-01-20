// Imports
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

// User Story 4
// Test 1
let testName = "Test 4.1: The array of planes length is decreased by 1.";

// Arrange
let airport = new Airport();
airport.setCapacity(3);
let plane1 = new Plane("Plane 1");
let plane2 = new Plane("Plane 2");
airport.addPlane(plane1);
airport.addPlane(plane2);
let expectedOutput = 1;

// Act
airport.removePlane(plane1);
let actualOutput = airport.airplanes.length;

// Assert
let testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport, plane1, plane2 = null;
expectedOutput, actualOutput = null;
testResult = null;


// Test 2
testName = "Test 4.2: After removing the plane, the array of planes does not contain the plane id.";

// Arrange
airport = new Airport();
airport.setCapacity(3);
plane1 = new Plane("Plane 1");
plane2 = new Plane("Plane 2");
airport.addPlane(plane1);
airport.addPlane(plane2);
expectedOutput = "Plane 1";

// Act
airport.removePlane(plane2);
actualOutput = airport.airplanes[airport.airplanes.length - 1].getId(); // Check last item in array

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport, plane1, plane2 = null;
expectedOutput, actualOutput = null;
testResult = null;