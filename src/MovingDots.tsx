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

type Coordinate = {
    x: number
    y: number
}

// x,y is the point to test
// cx, cy is circle center, and radius is circle radius
function insideCircle(
    x: number,
    y: number,
    cx: number,
    cy: number,
    radius: number
) {
    var distancesquared = (x - cx) * (x - cx) + (y - cy) * (y - cy)
    return distancesquared <= radius * radius
}

const MovingDots = (props: MovingDotsProps) => {
    const {
        width = 500,
        height = 500,
        cuantity = 5,
        background = '#000',
    } = props

    const canvasRef = useRef<HTMLCanvasElement>(null)
    let context: CanvasRenderingContext2D | undefined | null = null
    let currentWidth = useCurrentWitdh()

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

    useEffect(() => {
        // generate dots at start
        setDots({
            ...dotsList,
            array: [...generateDotsList(width, height, cuantity)],
        })
    }, [])

    useEffect(() => {
        if (!canvasRef.current) {
            return
        }
        const canvas: HTMLCanvasElement = canvasRef.current

        const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
            return {
                x: event.pageX - canvas.offsetLeft,
                y: event.pageY - canvas.offsetTop,
            }
        }

        // bind mouse event to canvas
        const mouseMove = (event: MouseEvent) => {
            const coordinates = getCoordinates(event)
            // console.log('coord', coordinates)

            //check if dots are near mouse pointer
            // iterate over
            const arr = dots.array

            arr.map((single, index) => {
                let dot = single.coordinates
                let test = insideCircle(
                    dot.x,
                    dot.y,
                    coordinates!.x,
                    coordinates!.y,
                    50
                )

                // move out of a circle

                // update the state for a tested positively dot

                if (test) {
                    arr[index].coordinates.x = dot.x + 50

                    // setDots({
                    //     ...dots,
                    //     array: [
                    //         ...arr,
                    //         (arr[index].coordinates.x = dot.x + 50),
                    //     ],
                    // })
                }

                // console.log('inside circle', index, test)
            })
        }
        canvas.addEventListener('mousemove', mouseMove)
        return () => {
            canvas.removeEventListener('mousemove', mouseMove)
        }
    }, [dots])

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
