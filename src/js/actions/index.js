import { HELLO_WORLD } from "../constants/action-types";

export const helloWorld = () => {
    return { 
        type: HELLO_WORLD
    }
}