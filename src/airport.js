class Airport {
    #capacity = 0;

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