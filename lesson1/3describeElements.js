const getItemsDescription = (mixedDataList) => {
    return mixedDataList.map((item, index) => ({
        elementValue: item,
        elementType: typeof item,
        index
    }))
}