import Constants from "~/Constants";
import { v4 as uuidv4 } from 'uuid';
import { Vector } from "~/classes/vector";
import { getDistance } from "~/utils/movement";

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

    public get leftTopPosition(): Vector {
        return new Vector(this.position.x - this.width / 2, this.position.y - this.height / 2);
    }
    public get rightTopPosition(): Vector {
        return new Vector(this.position.x + this.width / 2, this.position.y - this.height / 2);
    }
    public get leftBottomPosition(): Vector {
        return new Vector(this.position.x - this.width / 2, this.position.y + this.height / 2);
    }
    public get rightBottomPosition(): Vector {
        return new Vector(this.position.x + this.width / 2, this.position.y + this.height / 2);
    }

    public collidesWith(other: GameObject): boolean {
        const distance = getDistance(this.position, other.position);

        const sumWidths = (this.width + other.width) / 2;
        const sumHeights = (this.height + other.height) / 2;
        
        return distance <= sumWidths && distance <= sumHeights;
    }

}
