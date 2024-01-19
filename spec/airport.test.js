// Imports
import Airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";


// User Story 1
// Test 1
let testName = "Test 1: The capacity integer is set to match the user input.";

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
testName = "Test 2: The integer input by the user is a positive number (>= 0).";

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