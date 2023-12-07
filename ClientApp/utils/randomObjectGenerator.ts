import { GameObject } from "~/classes/gameObject";
import { getRandomImageUrl } from "~/utils/randomImageProvider";
import Constants from "~/Constants";
import { Vector } from "~/classes/vector";

const generateRandomObject = (areaWidth: number, areaHeight: number, objects: GameObject[]): GameObject => {
    const img = getRandomImageUrl();
    const width = Constants.width;
    const height = Constants.height;
    const widthOffset = width * Constants.randomPositionGenerationOffsetRate;
    const heightOffset = height * Constants.randomPositionGenerationOffsetRate;
    const accelerationX = random(Constants.minAcceleration, Constants.maxAcceleration);
    const accelerationY = random(Constants.minAcceleration, Constants.maxAcceleration);

    const newObject = new GameObject(
        img, width, height, new Vector(0, 0), new Vector(accelerationX, accelerationY)
    );

    while (true) {
        const randomX = random(widthOffset, areaWidth - widthOffset);
        const randomY = random(heightOffset, areaHeight - heightOffset);
        newObject.position.x = randomX;
        newObject.position.y = randomY;

        const isColliding = objects.some(existingObject => existingObject.collidesWith(newObject));

        if (!isColliding) {
            break;
        }
    }
    newObject.initialPosition.x = newObject.position.x;
    newObject.initialPosition.y = newObject.position.y;

    return newObject;
}

export { generateRandomObject }
