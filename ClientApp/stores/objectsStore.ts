import { defineStore } from "pinia";
import { GameObject } from "@/classes/gameObject";
import { moveObject } from "~/utils/objectMover";
import { generateRandomObject } from "~/utils/randomObjectGenerator";
import Constants from "~/Constants";

export const useObjectsStore = defineStore({
    id: 'objects-store',
    state: () => ({
        objects: <GameObject[]>[],
        areaWidth: 0,
        areaHeight: 0,
        interval: null as NodeJS.Timeout | null
    }),
    actions: {
        moveObjects() {
            this.objects.forEach(object => {
                moveObject(object);
            });
        },

        addObject(object: GameObject) {
            this.objects.push(object);
        },
        addRandomObject() {
            this.addObject(generateRandomObject(this.areaWidth, this.areaHeight));
        },

        removeObject(object: GameObject) {
            this.objects = this.objects.filter(obj => obj.id !== object.id);
        },
        removeAllObjects() {
            this.objects = [];
        },

        start() {
            this.interval = setInterval(() => {
                this.moveObjects();
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