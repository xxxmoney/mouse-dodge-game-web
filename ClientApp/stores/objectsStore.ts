import { defineStore } from "pinia";
import { GameObject } from "@/classes/gameObject";
import { moveObject } from "~/utils/objectMover";
import { generateRandomObject } from "~/utils/randomObjectGenerator";
import Constants from "~/Constants";

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
        moveObjects() {
            this.objects.forEach(object => {
                moveObject(object as GameObject);
            });
        },

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

        start() {
            this.interval = setInterval(() => {
                if(this.isMouseOutside) return;

                this.moveObjects();

                if(this.lastRandomObjectDate === null || new Date().getTime() - this.lastRandomObjectDate.getTime() > Constants.randomObjectRate) {
                    if(this.objects.length >= Constants.maxObjectCount) {
                        this.removeObject(this.objects[0] as GameObject);
                    }

                    this.addRandomObject();
                    this.lastRandomObjectDate = new Date();
                }

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