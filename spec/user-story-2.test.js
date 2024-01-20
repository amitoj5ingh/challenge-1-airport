// Imports
import Airport from "../src/airport.js";
import { assertEquals } from "../spec/test-framework/test-framework.js";

// User Story 2
// Test 1
let testName = "Test 2.1: The capacity integer is set to match the user input.";

// Arrange
let airport = new Airport();
airport.setCapacity(20); // Capacity is set to 20
let expectedOutput = 19;

// Act
airport.setCapacity(19); // Capacity is changed to 19
let actualOutput = airport.getCapacity();

// Assert
let testResult = assertEquals(expectedOutput, actualOutput);

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