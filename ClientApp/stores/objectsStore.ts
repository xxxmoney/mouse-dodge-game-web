import { defineStore } from "pinia";
import { GameObject } from "@/classes/gameObject";
import { generateRandomObject } from "~/utils/randomObjectGenerator";
import Constants from "~/Constants";
import { bounceObjects } from "~/utils/objectMovement";

export const useObjectsStore = defineStore({
    id: 'objects-store',
    state: () => ({
        objects: <GameObject[]> [],
        areaWidth: 0,
        areaHeight: 0,
        interval: <NodeJS.Timeout | null> null,
        isMouseOutside: true,
        lastRandomObjectDate: <Date | null> null
    }),
    actions: {

        addObject(object: GameObject) {
            this.objects.push(object);
        },
        addRandomObject() {
            this.addObject(generateRandomObject(this.areaWidth, this.areaHeight));
        },

        removeObject(object: GameObject) {
            this.objects = this.objects.filter(obj => obj !== object);
        },
        removeAllObjects() {
            this.objects = [];
        },

        handleRandomSpawn() {
            if(this.lastRandomObjectDate === null || new Date().getTime() - this.lastRandomObjectDate.getTime() > Constants.randomObjectRate) {
                if(this.objects.length >= Constants.maxObjectCount) {
                    this.removeObject(this.objects[0] as GameObject);
                }

                this.addRandomObject();
                this.lastRandomObjectDate = new Date();
            }
        },

        handleObject(object: GameObject) {
            moveObject(object as GameObject);
            bounceOnBorderCollision(object as GameObject, this.areaWidth, this.areaHeight);

            const collisionObject = this.objects.find(otherObject => otherObject !== object && object.collidesWith(otherObject as GameObject));
            if(collisionObject) {
                bounceObjects(object as GameObject, collisionObject as GameObject);
            }
        },

        start() {
            this.interval = setInterval(() => {
                if(this.isMouseOutside) return;

                this.objects.forEach(object => this.handleObject(object as GameObject));

                this.handleRandomSpawn();

            }, Constants.tickRate);
        },

        stop() {
            if (this.interval) {
                clearInterval(this.interval);
                this.interval = null;
            }
        },

        reset() {
            this.stop();
            this.removeAllObjects();
        }

    },
    getters: {
        isRunning (): boolean {
            return this.interval !== null;
        }
    },
})