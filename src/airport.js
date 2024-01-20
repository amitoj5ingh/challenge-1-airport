class Airport {
    #capacity = 0;
    airplanes = [];

    addPlane(airplane) {

        if (airplane.getId() === null || airplane.getId() === undefined) {
            return;
        }

        for (let i = 0; i < this.airplanes.length; i++) {
            if (airplane.getId() === this.airplanes[i].getId()) {
                return;
            }
        }

        if (this.#capacity > this.airplanes.length) {
            this.airplanes.push(airplane);
        }

    }

    // Getters
    getCapacity() {
        return this.#capacity;
    }

    // Setters
    setCapacity(newCapacity) {
        if (newCapacity === this.#capacity) {
            return ("New capacity cannot match old capacity.");
        }
        else if (newCapacity >= 0) {
            this.#capacity = newCapacity;
        } else {
            return false;
        }
    }
}

export default Airport;