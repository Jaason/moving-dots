import React, {
    useRef,
    useLayoutEffect,
    useState,
    useEffect,
    useCallback,
} from 'react'
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
    const canvasRef = useRef<HTMLCanvasElement>(null)
    let context: CanvasRenderingContext2D | undefined | null = null

    let currentWidth = useCurrentWitdh()

    type Coordinate = {
        x: number
        y: number
    }

    let dotsList: Dots = {
        cuantity: props.cuantity,
        distance: 100,
        radius: 150,
        array: [],
    }

    const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
        undefined
    )

    const [dots, setDots] = useState(dotsList)

    //generate dots
    const generate = generateDotsList(width, height, cuantity)

    const mouseMove = useCallback((event: MouseEvent) => {
        const coordinates = getCoordinates(event)
        if (coordinates) {
            setMousePosition(coordinates)
        }
    }, [])

    useEffect(() => {
        if (!canvasRef.current) {
            return
        }
        const canvas: HTMLCanvasElement = canvasRef.current
        canvas.addEventListener('mousemove', mouseMove)
        return () => {
            canvas.removeEventListener('mousemove', mouseMove)
        }
    }, [mousePosition])

    const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
        if (!canvasRef.current) {
            return
        }

        const canvas: HTMLCanvasElement = canvasRef.current
        return {
            x: event.pageX - canvas.offsetLeft,
            y: event.pageY - canvas.offsetTop,
        }
    }

    useEffect(() => {
        setDots({
            ...dotsList,
            array: [...generate],
        })
    }, [])

    console.log(dots)

    useLayoutEffect(() => {
        context = canvasRef.current?.getContext('2d')

        if (context) {
            // draw dots

            const animateDots = () => {
                context!.clearRect(0, 0, width, height)
                // set background color
                context!.fillStyle = background
                context!.fillRect(0, 0, width, height)
                moveDots(dots, width, height)
                // connectDots()
                drawDots(dots, context!)
                requestAnimationFrame(animateDots)
            }

            requestAnimationFrame(animateDots)
        }
    })

    return <canvas ref={canvasRef} width={width} height={height} />
}

export default MovingDots
