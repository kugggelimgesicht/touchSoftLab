const describeElements = (array) => {

    const elements = array.map((item, index) => ({
        elementValue: item,
        elementType: typeof item,
        elementIndex: index
    }))
    return elements
}