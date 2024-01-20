// Imports
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";


// User Story 1
// Test 1
let testName = "Test 1.1: The capacity integer is set to match the user input.";

// Arrange
let airport = new Airport();
let expectedOutput = 20;
let actualOutput, testResult;

// Act
airport.setCapacity(20);
actualOutput = airport.getCapacity();

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report 
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport = null;
expectedOutput = null;
actualOutput = null;
testResult = null;

// Test 2
testName = "Test 1.2: The integer input by the user is a positive number (>= 0).";

// Arrange
airport = new Airport();
expectedOutput = undefined;

// Act
actualOutput = airport.setCapacity(20);

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport = null;
expectedOutput = null;
actualOutput = null;
testResult = null;

// User Story 2
// Test 1
testName = "Test 2.1: The capacity integer is set to match the user input.";

// Arrange
airport = new Airport();
airport.setCapacity(20); // Capacity is set to 20
expectedOutput = 19;

// Act
airport.setCapacity(19); // Capacity is changed to 19
actualOutput = airport.getCapacity();

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport = null;
expectedOutput = null;
actualOutput = null;
testResult = null;

// Test 2
testName = "Test 2.2: The integer input by the user is different to the current capacity.";

// Arrange
airport = new Airport();
airport.setCapacity(20); // Capacity is set to 20
expectedOutput = 25;

// Act
airport.setCapacity(25); // Capacity is changed to 25
actualOutput = airport.getCapacity();

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport = null;
expectedOutput = null;
actualOutput = null;
testResult = null;

// User Story 3
// Test 1
testName = "Test 3.1: The array of planes does not exceed the capacity.";

// Arrange
airport = new Airport();
airport.setCapacity(3);
let plane1 = new Plane("Plane 1");
let plane2 = new Plane("Plane 2");
let plane3 = new Plane("Plane 3");
let plane4 = new Plane("Plane 4");
expectedOutput = 3;

// Act
airport.addPlane(plane1);
airport.addPlane(plane2);
airport.addPlane(plane3);
airport.addPlane(plane4); // Should not be added
actualOutput = airport.airplanes.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

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