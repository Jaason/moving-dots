export const colorValue = (min: number = 0) => {
    return Math.floor(Math.random() * 255 + min)
}

export const color = (min: number = 0) => {
    const r = colorValue(min)
    const g = colorValue(min)
    const b = colorValue(min)
    const style = createColorStyle(r, g, b)
}

export const createColorStyle = (r: number, g: number, b: number) => {
    return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)'
}
