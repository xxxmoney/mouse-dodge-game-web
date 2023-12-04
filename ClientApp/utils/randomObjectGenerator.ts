import { GameObject } from "~/classes/gameObject";
import { getRandomImageUrl } from "~/utils/randomImageProvider";
import Constants from "~/Constants";

const generateRandomObject = (areaWidth: number, areaHeight: number): GameObject => {
    const img = getRandomImageUrl();
    const initialX = random(0, areaWidth);
    const initialY = random(0, areaHeight);
    const width = Constants.width;
    const height = Constants.height;
    const accelerationX = random(Constants.minAcceleration, Constants.maxAcceleration);
    const accelerationY = random(Constants.minAcceleration, Constants.maxAcceleration);

    return new GameObject(
       img, width, height, initialX, initialY, accelerationX, accelerationY
    );
}

export { generateRandomObject }
