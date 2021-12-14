Array.prototype.customMap = function customMap(operation) {
    const mappedArray = []
    for (let i = 0; i < this.length; i++) {
        mappedArray.push(operation(this[i], i, this))
    }
    return mappedArray
}