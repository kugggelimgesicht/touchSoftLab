Array.prototype.customFilter = function customFilter(filter) {
    const filteredArray = []
    for (let i = 0; i < this.length; i++) {
        if (filter(this[i]), i, this) {
            filteredArray.push(this[i])
        }
    }
    return filteredArray
}