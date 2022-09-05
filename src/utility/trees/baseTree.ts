import {observer} from "../observer/observer";

export abstract class BaseTree<T> {
    root: T | null = null;

    insert(value: number) {
        observer.setValue(value)
    }

    abstract iterate(node: T,cb:any):void;

    abstract removeNode(node:T | null, value:number): T | null;

    abstract search(node:T, value:number): T | null;

    inform(message: number) {
        console.log(`OBSERVED: ${message}`)
    }
}