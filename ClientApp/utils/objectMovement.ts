import Constants from "~/Constants";
import { GameObject } from "~/classes/gameObject";

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
    if(object.leftTopPosition.y <= 0 || object.leftBottomPosition.y >= areaHeight) {
        object.velocity.y = toOpositeVelocity(object.velocity.y);
        object.acceleration.y = toOpositeAcceleration(object.acceleration.y);
    }
}

export { moveObject, bounceOnBorderCollision }
