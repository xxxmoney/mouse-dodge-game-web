import Constants from "~/Constants";
import { GameObject } from "~/classes/gameObject";
import { Vector } from "~/classes/vector";

const moveObject = (object: GameObject) => {
    object.position.x = applyVelocity(object.position.x, object.velocity.x / Constants.divisionRate);
    object.position.y = applyVelocity(object.position.y, object.velocity.y / Constants.divisionRate);

    object.velocity.x = applyAcceleration(object.velocity.x, object.acceleration.x / Constants.divisionRate, object.maxVelocity);
    object.velocity.y = applyAcceleration(object.velocity.y, object.acceleration.y / Constants.divisionRate, object.maxVelocity);
}

const bounceOnBorderCollision = (object: GameObject, areaWidth: number, areaHeight: number) => {
    if(object.leftTopPosition.x <= 0 || object.rightTopPosition.x >= areaWidth) {
        object.velocity.x = toOpositeVelocity(object.velocity.x);
        object.acceleration.x = toOpositeAcceleration(object.acceleration.x);
    }
    else if(object.leftTopPosition.y <= 0 || object.leftBottomPosition.y >= areaHeight) {
        object.velocity.y = toOpositeVelocity(object.velocity.y);
        object.acceleration.y = toOpositeAcceleration(object.acceleration.y);
    }
}
const bounceObjects = (object: GameObject, other: GameObject) => {
    // Cheeki breeki math stuff that works somehow >]
    const v1fx = ((object.width - other.width) * object.velocity.x + 2 * other.width * other.velocity.x) / (object.width + other.width);
    const v2fx = ((other.width - object.width) * other.velocity.x + 2 * object.width * object.velocity.x) / (object.width + other.width);
    const v1fy = ((object.height - other.height) * object.velocity.y + 2 * other.height * other.velocity.y) / (object.height + other.height);
    const v2fy = ((other.height - object.height) * other.velocity.y + 2 * object.height * object.velocity.y) / (object.height + other.height);

    object.velocity.x = v1fx;
    object.velocity.y = v1fy;
    other.velocity.x = v2fx;
    other.velocity.y = v2fy;
}

export { moveObject, bounceOnBorderCollision, bounceObjects }
