import React, { useEffect } from 'react'

type Dots = {
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

const MovingDots = () => {
    let canvas: HTMLCanvasElement

    let dotsList: Dots = {
        cuantity: 8,
        distance: 100,
        radius: 150,
        array: [],
    }

    const generateDotsList = () => {
        var arr = []
        var cuantity = dotsList.cuantity
        for (var i = 0; i < cuantity; i++) {
            arr.push({
                coordinates: [
                    {
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        radius: Math.random() * 2,
                    },
                ],
                color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            })
        }

        return arr
    }

    const dot = (ctx: CanvasRenderingContext2D, coordinates: Coordinates) => {
        ctx.beginPath()
        ctx.fillStyle = 'red'
        ctx.arc(
            coordinates.x,
            coordinates.y,
            coordinates.radius,
            0,
            Math.PI * 2,
            false
        )
        ctx.fill()
    }

    const createBoard = () => {
        canvas = document.getElementById('stage') as HTMLCanvasElement
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.fillStyle = '#3e253c'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    useEffect(() => {
        createBoard()

        const dots = {
            ...dotsList,
            array: [...generateDotsList()],
        }
        console.log(dots)
        // drawDots()
    }, [])

    return null
}

export default MovingDots
