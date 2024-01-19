# Domain Models and Test Plan

---

## User Story 1

As an air traffic controller, I want to set the capacity of the airport, so that the airport isn't overcrowded.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | capacity@Integer | setCapacity(@Integer) | @Void |

### Tests
1. The capacity integer is set to match the user input.
2. The integer input by the user is a positive number (>= 0).

## User Story 2

As an air traffic controller, I want to override the capacity of the airport, so that I can ensure the airport only allows as many planes as it can handle.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | capacity@Integer | setCapacity(@Integer) | @Void |

### Tests
1. The capacity integer is set to match the user input.
2. The integer input by the user is different to the current capacity.

## User Story 3

As an air traffic controller, I want to instruct a plane to land at the airport, so that it can land safely.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | capacity@Integer | getCapacity() | @Integer |
|  | airplanes@Array[@Planes] | addPlane() | @Void |
| Plane | id@String |  |  |

### Tests
1. The array of planes does not exceed the capacity.
2. The plane id is not already in the array of planes.
3. The plane id is not null.
4. The array of planes length is increased by 1.
5. After adding the plane, the array of planes contains the plane id.

## User Story 4

As an air traffic controller, I want to instruct a plane to take off from the airport, so that it can leave safely.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | airplanes@Array[@Planes] | removePlane() | @Void |
| Plane | id@String |  |  |

### Tests
1. The plane id is in the array of planes.
2. The array of planes length is decreased by 1.
3. After removing the plane, the array of planes does not contain the plane id.