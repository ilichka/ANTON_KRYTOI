import {BaseTree} from "./baseTree";
import {Node} from "../BST/BST";

export class Tree1 extends BaseTree<Node>  {
    constructor() {
        super();
    }

    insert(value: number) {
        console.log(`Inserting ${value}...`)
    }

    iterate(node: Node,cb:any) {
        console.log('Iterating...')
    }

    removeNode(node:Node, value:number) {
        return null
    }

    search(node:Node, value:number): any {
        console.log(`searching for ${value} in Tree1`)
    }
}