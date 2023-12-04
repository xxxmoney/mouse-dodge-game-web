import { GameObject } from "~/classes/gameObject";
import { getRandomImageUrl } from "~/utils/randomImageProvider";

const generateRandomObject = (areaWidth: number, areaHeight: number): GameObject => {
    const img = getRandomImageUrl();
    const initialX = random(0, areaWidth);
    const initialY = random(0, areaHeight);
    const width = 50;
    const height = 50;
    const accelerationX = 0;
    const accelerationY = 0;

    return new GameObject(
       img, width, height, initialX, initialY, accelerationX, accelerationY
    );
}

export { generateRandomObject }
