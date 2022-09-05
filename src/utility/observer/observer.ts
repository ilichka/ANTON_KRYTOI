import {BaseTree} from "../trees/baseTree";

export class Observer {
    lastValueChanged: number;
    trees: Array<BaseTree<unknown>>;
    constructor() {
        this.lastValueChanged = 0;
        this.trees = [];
    }

    setValue(value: number) {
        this.lastValueChanged = value;
        this.notifyAll();
    }

    notifyAll() {
        return this.trees.forEach(subs => subs.inform(this.lastValueChanged));
    }

    register(observer: BaseTree<unknown>) {
        this.trees.push(observer);
    }

    unregister(observer: BaseTree<unknown>) {
        // @ts-ignore
        this.trees = this.trees.filter(el => !(el instanceof observer));
    }
}

export const makeObservable = (instance: BaseTree<unknown>) => {
    observer.register(instance)
}

export const observer = new Observer();