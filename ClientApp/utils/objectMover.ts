import Constants from "~/Constants";

const moveObject = (object: any) => {
    object.x = applyVelocity(object.x, object.velocityX / Constants.divisionRate);
    object.y = applyVelocity(object.y, object.velocityY / Constants.divisionRate);

    object.velocityX = applyAcceleration(object.velocityX, object.accelerationX / Constants.divisionRate, object.maxVelocity);
    object.velocityY = applyAcceleration(object.velocityY, object.accelerationY / Constants.divisionRate, object.maxVelocity);
}

export { moveObject }
