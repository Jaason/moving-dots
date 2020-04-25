export type Dots = {
    cuantity: number
    distance: number
    radius: number
    array: Dot[]
}

type Dot = {
    coordinates: Coordinates
    color: string
    radius: number
}

type Coordinates = {
    x: number
    y: number
    vx: number
    vy: number
}

export type MovingDotsProps = {
    width: number
    height: number
    cuantity: number
    background: string
}
