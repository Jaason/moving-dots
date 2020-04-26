import React, { useRef, useLayoutEffect, useState, useEffect } from 'react'
import { Dots, MovingDotsProps } from './types'
import { generateDotsList } from './utils/dotsGenerator'
import { drawDots, moveDots } from './utils/drawingOperations'
import { useCurrentWitdh } from './utils/useCurrentWidth'

const MovingDots = (props: MovingDotsProps) => {
    const {
        width = 500,
        height = 500,
        cuantity = 250,
        background = '#000',
    } = props
    const canvas = useRef<HTMLCanvasElement>(null)
    let currentWidth = useCurrentWitdh()

    let dotsList: Dots = {
        cuantity: props.cuantity,
        distance: 100,
        radius: 150,
        array: [],
    }

    const [dots, setDots] = useState(dotsList)

    //generate dots
    const generate = generateDotsList(width, height, cuantity)

    useEffect(() => {
        setDots({
            ...dotsList,
            array: [...generate],
        })
    }, [])

    console.log(dots)

    useLayoutEffect(() => {
        const context = canvas.current?.getContext('2d')

        if (context) {
            // draw dots

            const animateDots = () => {
                context.clearRect(0, 0, width, height)
                // set background color
                context.fillStyle = background
                context.fillRect(0, 0, width, height)
                moveDots(dots, width, height)
                // connectDots()
                drawDots(dots, context)
                requestAnimationFrame(animateDots)
            }

            requestAnimationFrame(animateDots)
        }
    })

    return <canvas ref={canvas} width={width} height={height} />
}

export default MovingDots
