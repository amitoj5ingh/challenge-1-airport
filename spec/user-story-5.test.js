// Generative AI has been used to implement the following
// Imports
import Airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

// User Story 5
// Test 1
let testName = "Test 5.1: The weather string is set to match the user input.";

// Arrange
let airport = new Airport();
let expectedOutput = "Clear";
let actualOutput, testResult;

// Act
airport.setWeather("Clear");
actualOutput = airport.getWeather();

// Assert
testResult = assertEquals(expectedOutput, actualOutput);

// Report
console.log(`${testName} passes: ${testResult}; expected: ${expectedOutput} actual: ${actualOutput}`);

// Cleanup
airport = null;
expectedOutput = null;
actualOutput = null;
testResult = null;

