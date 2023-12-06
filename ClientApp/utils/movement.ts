import Constants from "~/Constants";

const applyVelocity = (position: number, velocity: number): number => position + velocity;

const applyAcceleration = (velocity: number, acceleration: number, maxVelocity: number): number => (velocity + acceleration) > maxVelocity ? maxVelocity : velocity + acceleration;

const toOpositeVelocity = (velocity: number): number => velocity * -1 * Constants.velocityLossRate;

const toOpositeAcceleration = (acceleration: number): number => acceleration * -1;

export { applyVelocity, applyAcceleration, toOpositeVelocity, toOpositeAcceleration }