# Domain Models and Test Plan

---

## User Story 1

As an air traffic controller, I want to set the capacity of the airport, so that the airport isn't overcrowded.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | capacity@Integer | setCapacity(@Integer) | @Void |

## User Story 2

As an air traffic controller, I want to override the capacity of the airport, so that I can ensure the airport only allows as many planes as it can handle.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | capacity@Integer | changeCapacity(@Integer) | @Void |

## User Story 3

As an air traffic controller, I want to instruct a plane to land at the airport, so that it can land safely.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | capacity@Integer | getCapacity() | @Integer |
|  | airplanes@Array[@Planes] | addPlane() | @Void |
| Plane | id@String |  |  |

## User Story 1

As an air traffic controller, I want to instruct a plane to take off from the airport, so that it can leave safely.

### Domain Model

| Objects | Properties | Messages | Outputs |
| --- | --- | --- | --- |
| Airport | airplanes@Array[@Planes] | removePlane() | @Void |
| Plane | id@String |  |  |