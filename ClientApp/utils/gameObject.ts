import Constants from "~/Constants";

export class GameObject {
    public img: string;
    public width: number;
    public height: number;
    public x: number;
    public y: number;
    public initialX: number;
    public initialY: number;
    public initialVelocityX: number;
    public initialVelocityY: number;
    public velocityX: number;
    public velocityY: number;
    public accelerationX: number;
    public accelerationY: number;
    public maxVelocity: number;

    constructor(img: string, width: number, height: number, initialX: number, initialY: number, accelerationX: number = 0, accelerationY: number = 0, initialVelocityX: number = 0, initialVelocityY: number = 0, maxVelocity: number = Constants.maxVelocity) {
        this.img = img;
        this.width = width;
        this.height = height;
        this.initialX = initialX;
        this.initialY = initialY;
        this.x = initialX;
        this.y = initialY;
        this.initialVelocityX = initialVelocityX;
        this.initialVelocityY = initialVelocityY;
        this.velocityX = initialVelocityX;
        this.velocityY = initialVelocityY;
        this.accelerationX = accelerationX;
        this.accelerationY = accelerationY;
        this.maxVelocity = maxVelocity;
    }


}
