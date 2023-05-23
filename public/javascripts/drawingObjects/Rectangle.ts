import { DrawingObject } from './DrawingObject'
import { type Point } from '../helperTypes'

export class Rectangle extends DrawingObject {
  private readonly points: [{ x: number, y: number }] = []
  public color: string
  private _isDragging: boolean // Q: TODO change to isSelected?
  private readonly _isSelected: boolean

  constructor () {
    super()
    this.id = Date.now()
    this.color = 'Black'
    this._isDragging = false
  }

  create (startingPoint: Point, endingPoint: Point): void {
    this.position = startingPoint
    this.points.push(endingPoint)
  }

  draw (context: CanvasRenderingContext2D): void {
    const { x: startX, y: startY } = this.position
    context.beginPath()
    const { x: endingX, y: endingY } = this.points[0]
    const width = endingX - startX
    const height = endingY - startY
    context.rect(startX, startY, width, height)
    context.strokeStyle = this.color
    context.stroke()
  }

  isColliding (px: number, py: number): boolean {
    const { x: rx, y: ry } = this.position
    const { x: endingX, y: endingY } = this.points[0]
    return px >= rx && // right of the left edge AND
            px <= endingX && // left of the right edge AND
            py >= ry && // below the top AND
            py <= endingY
  }

  move (dx: number, dy: number): void {
    // console.log('mov')
    // this._isDragging = true // Q: How to make this change in this class and not in the canvas module
    this.color = 'Red'
    this.position.y += dy
    this.position.x += dx
    this.points[0].x += dx
    this.points[0].y += dy
    // this.draw(context)
  }

  endMovement (): void {
    this.color = 'Black'
    this._isDragging = false
  }

  remove () {
  }

  select (): void {
    this.color = 'Red'
  }

  get isDragging (): boolean {
    return this._isDragging
  }

  liftUp (): void {
    console.log('lol1')
    this._isDragging = true
  }

  layDown (): void {
    this._isDragging = false
  }
}
