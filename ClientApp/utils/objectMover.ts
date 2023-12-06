import Constants from "~/Constants";
import { GameObject } from "~/classes/gameObject";

const moveObject = (object: GameObject) => {
    object.position.x = applyVelocity(object.position.x, object.velocity.x / Constants.divisionRate);
    object.position.y = applyVelocity(object.position.y, object.velocity.y / Constants.divisionRate);

    object.velocity.x = applyAcceleration(object.velocity.x, object.acceleration.x / Constants.divisionRate, object.maxVelocity);
    object.velocity.y = applyAcceleration(object.velocity.y, object.acceleration.y / Constants.divisionRate, object.maxVelocity);
}

export { moveObject }
