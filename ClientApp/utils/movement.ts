
const applyVelocity = (position: number, velocity: number): number => position + velocity;

const applyAcceleration = (velocity: number, acceleration: number, maxVelocity: number): number => (velocity + acceleration) > maxVelocity ? maxVelocity : velocity + acceleration;

export { applyVelocity, applyAcceleration }