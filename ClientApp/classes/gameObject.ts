import Constants from "~/Constants";
import { v4 as uuidv4 } from 'uuid';

export class GameObject {
    private _id: string;
    public img: string;
    public width: number;
    public height: number;
    public x: number;
    public y: number;
    private readonly _initialX: number;
    private readonly _initialY: number;
    private readonly _initialVelocityX: number;
    private readonly _initialVelocityY: number;
    public velocityX: number;
    public velocityY: number;
    public accelerationX: number;
    public accelerationY: number;
    public maxVelocity: number;

    constructor(img: string, width: number, height: number, initialX: number, initialY: number, accelerationX: number = 0, accelerationY: number = 0, initialVelocityX: number = 0, initialVelocityY: number = 0, maxVelocity: number = Constants.maxVelocity) {
        this._id = uuidv4();

        this.img = img;
        this.width = width;
        this.height = height;
        this._initialX = initialX;
        this._initialY = initialY;
        this.x = initialX;
        this.y = initialY;
        this._initialVelocityX = initialVelocityX;
        this._initialVelocityY = initialVelocityY;
        this.velocityX = initialVelocityX;
        this.velocityY = initialVelocityY;
        this.accelerationX = accelerationX;
        this.accelerationY = accelerationY;
        this.maxVelocity = maxVelocity;
    }

    public get id(): string {
        return this._id;
    }
    public get initialX(): number {
        return this._initialX;
    }
    public get initialY(): number {
        return this._initialY;
    }
    public get initialVelocityX(): number {
        return this._initialVelocityX;
    }
    public get initialVelocityY(): number {
        return this._initialVelocityY;
    }

}
