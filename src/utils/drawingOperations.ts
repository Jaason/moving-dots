import { Dots } from '../types'
export const drawDots = (dots: Dots, context: CanvasRenderingContext2D) => {
    const arr = dots.array
    arr.map((dot) => {
        context.beginPath()
        context.fillStyle = dot.color
        context.arc(
            dot.coordinates.x,
            dot.coordinates.y,
            dot.radius,
            0,
            Math.PI * 2,
            false
        )
        context.fill()
        return null
    })
}

export const moveDots = (dots: Dots, width: number, height: number) => {
    const arr = dots.array
    arr.map((single) => {
        var dot = single.coordinates

        if (dot.y < 0 || dot.y > height) {
            dot.vx = dot.vx
            dot.vy = -dot.vy
        } else if (dot.x < 0 || dot.x > height) {
            dot.vx = -dot.vx
            dot.vy = dot.vy
        }
        dot.x += dot.vx
        dot.y += dot.vy

        return null
    })
}
