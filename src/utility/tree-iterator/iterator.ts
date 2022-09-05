import {Node} from "../BST/BST";

export class Iterator {
    strategy: (node: Node|null,cb:(value: number)=>void)=>void

    constructor(strategy: (node: Node | null,cb:(value: number)=>void)=>void) {
        this.strategy = strategy;
    }

    iterate(node: Node | null, cb: (value: number) => void) {
        console.log('starting iterate');
        this.strategy(node, cb);
    }

    setStrategy(strategy: (node: Node | null,cb:(value: number)=>void)=>void) {
        this.strategy = strategy;
    }
}

