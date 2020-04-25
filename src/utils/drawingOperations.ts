import { Dots } from '../types'
export const drawDots = (dots: Dots, context: CanvasRenderingContext2D) => {
    const arr = dots.array
    arr.map((dot) => {
        context.beginPath()
        context.fillStyle = dot.color
        context.arc(
            dot.coordinates[0].x,
            dot.coordinates[0].y,
            dot.coordinates[0].radius,
            0,
            Math.PI * 2,
            false
        )
        context.fill()
        return null
    })
}
