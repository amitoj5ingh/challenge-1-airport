// Generative AI has been used to implement the following
// Imports
import Airport from "../src/airport.js";
import Plane from "../src/plane.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

// User Story 6
// Test 1
let testName = "Test 6.1: A plane cannot land if the weather is stormy.";

// Arrange
let airport = new Airport();
airport.setCapacity(3);
let plane1 = new Plane("Plane 1");
let expectedOutput = 0;
let actualOutput, testResult;

// Act
airport.setWeather("Stormy");
airport.addPlane(plane1); // Should not be added
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