import Constants from "~/Constants";
import { v4 as uuidv4 } from 'uuid';
import { Vector } from "~/classes/vector";

export class GameObject {
    private readonly _id: string;
    public readonly img: string;
    public readonly width: number;
    public readonly height: number;
    public readonly position: Vector
    public readonly initialPosition: Vector
    private readonly initialVelocity: Vector;
    public readonly velocity: Vector;
    public readonly acceleration: Vector;
    public maxVelocity: number;

    constructor(img: string, width: number, height: number, initialPosition: Vector, acceleration: Vector = new Vector(0, 0), initialVelocity: Vector = new Vector(0, 0), maxVelocity: number = Constants.maxVelocity) {
        this._id = uuidv4();

        this.img = img;
        this.width = width;
        this.height = height;
        this.initialPosition = initialPosition;
        this.position = initialPosition;
        this.initialVelocity = initialVelocity;
        this.velocity = initialVelocity;
        this.acceleration = acceleration;
        this.maxVelocity = maxVelocity;
    }


    public get id(): string {
        return this._id;
    }



}
