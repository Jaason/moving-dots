import React, { useRef, useLayoutEffect } from 'react'
import { Dots, MovingDotsProps } from './types'
import { generateDotsList } from './utils/dotsGenerator'
import { drawDots } from './utils/drawingOperations'

const MovingDots = (props: MovingDotsProps) => {
    const {
        width = 500,
        height = 500,
        cuantity = 250,
        background = '#000',
    } = props
    const canvas = useRef<HTMLCanvasElement>(null)

    let dotsList: Dots = {
        cuantity: props.cuantity,
        distance: 100,
        radius: 150,
        array: [],
    }

    //generate dots
    const dots = {
        ...dotsList,
        array: [...generateDotsList(width, height, cuantity)],
    }

    useLayoutEffect(() => {
        const context = canvas.current?.getContext('2d')
        if (context) {
            // set background color
            context.fillStyle = background
            context.fillRect(0, 0, width, height)
            // draw dots
            drawDots(dots, context)
        }
    })

    return <canvas ref={canvas} width={width} height={height} />
}

export default MovingDots
