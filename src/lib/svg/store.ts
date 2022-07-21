import { type Item, type ItemConnection, em2Px } from "$lib/svg";
import { writable, type Writable } from "svelte/store";

function create():  Writable<Map<string, Item>> {
    const {subscribe, update} = writable<Map<string, Item>>()

    return {
        subscribe,
        
    }
}

export const items = create()


