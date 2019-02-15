const initialState = {
    products: [
        {
            id: 1,
            name: "Circle",
            price: 999
        },
        {
            id: 2,
            name: "Rectangle",
            price: 899
        },
        {
            id: 3,
            name: "Triangle",
            price: 1009
        }
    ]
}


const productReducer = (state = initialState) => {
    return state;
}

export default productReducer;