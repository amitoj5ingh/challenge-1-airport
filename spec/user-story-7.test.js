// Generative AI has been used to implement the following
// Imports
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

// User Story 7
// Test 1
let testName = "Test 7.1: A plane cannot take off if the weather is stormy.";

// Arrange
let airport = new Airport();
airport.setCapacity(3);
let plane1 = new Plane("Plane 1");
airport.addPlane(plane1);
let expectedOutput = 1;
let actualOutput, testResult;

// Act
airport.setWeather("Stormy");
airport.removePlane(plane1); // Should not be removed
actualOutput = airport.airplanes.length;

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport = null;
plane1 = null;
expectedOutput = null;
actualOutput = null;
testResult = null;
