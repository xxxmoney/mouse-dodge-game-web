import { defineStore } from "pinia";
import { GameObject } from "@/classes/gameObject";
import { generateRandomObject } from "~/utils/randomObjectGenerator";
import Constants from "~/Constants";
import { bounceObjects } from "~/utils/objectMovement";
import { Vector } from "~/classes/vector";

export const useObjectsStore = defineStore({
    id: 'objects-store',
    state: () => ({
        objects: <GameObject[]> [],
        areaWidth: 0,
        areaHeight: 0,
        mouseX: 0,
        mouseY: 0,
        interval: <NodeJS.Timeout | null> null,
        isMouseOutside: true,
        lastRandomObjectDate: <Date | null> null,
        failDialog: false,
    }),
    actions: {

        addObject(object: GameObject) {
            this.objects.push(object);
        },
        addRandomObject() {
            this.addObject(generateRandomObject(this.areaWidth, this.areaHeight, this.mouseX, this.mouseY, this.objects as GameObject[]));
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

        checkMouseCollision(object: GameObject) {
            if(object.isInside(new Vector(this.mouseX, this.mouseY))) {
                this.fail();
            }
        },

        handleObject(object: GameObject) {
            moveObject(object as GameObject);
            bounceOnBorderCollision(object as GameObject, this.areaWidth, this.areaHeight);

            this.checkMouseCollision(object as GameObject);

            this.objects.forEach(otherObject => {
                // Check if object is inside other object
                if(otherObject !== object && object.collidesWith(otherObject as GameObject)) {
                    bounceObjects(object as GameObject, otherObject as GameObject);
                }
            });

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

        fail() {
            this.failDialog = true;
            this.reset();
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