export const generateDotsList = (
    width: number,
    height: number,
    cuantity: number
) => {
    let arr = []
    for (var i = 0; i < cuantity; i++) {
        arr.push({
            coordinates: {
                x: Math.random() * width,
                y: Math.random() * height,
                vx: -0.5 + Math.random(),
                vy: -0.5 + Math.random(),
            },
            radius: Math.random() * 2,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
        })
    }

    return arr
}
