import { GameObject } from "~/classes/gameObject";
import { getRandomImageUrl } from "~/utils/randomImageProvider";
import Constants from "~/Constants";
import { Vector } from "~/classes/vector";

const generateRandomObject = (areaWidth: number, areaHeight: number): GameObject => {
    const img = getRandomImageUrl();
    const width = Constants.width;
    const height = Constants.height;
    const widthOffset = width * Constants.randomPositionGenerationOffsetRate;
    const heightOffset = height * Constants.randomPositionGenerationOffsetRate;
    const initialX = random(widthOffset, areaWidth - widthOffset);
    const initialY = random(heightOffset, heightOffset);
    const accelerationX = random(Constants.minAcceleration, Constants.maxAcceleration);
    const accelerationY = random(Constants.minAcceleration, Constants.maxAcceleration);

    return new GameObject(
        img, width, height, new Vector(initialX, initialY), new Vector(accelerationX, accelerationY)
    );
}

export { generateRandomObject }
