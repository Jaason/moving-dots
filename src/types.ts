export type Dots = {
    cuantity: number
    distance: number
    radius: number
    array: Dot[]
}

type Dot = {
    coordinates: Coordinates[]
    color: string
}

type Coordinates = {
    x: number
    y: number
    radius: number
}

export type MovingDotsProps = {
    width: number
    height: number
    cuantity: number
    background: string
}
