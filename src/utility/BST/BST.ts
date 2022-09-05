import {BaseTree} from "../trees/baseTree";
import {iterator} from "../../components/tree/tree.component";

export type Node = {
    value: number;
    left: Node | null;
    right: Node | null;
}

export class BSTNode {
    value: number;
    left: Node | null;
    right: Node | null;
    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BST extends BaseTree<Node> {
    constructor() {
        super();
        this.root = null;
    }

    insert(value: number) {
        super.insert(value)
        let newNode = new BSTNode(value);

        if(this.root === null ) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node: Node | null, newNode: Node) {
        if(node === null) {
            return null
        }
        if(newNode.value < node.value) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode)
            }
        } else if (newNode.value > node.value){
            if(node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    iterate(node: Node | null,cb:(value: number)=>void) {
        iterator.iterate(node, cb)
    }

    findMinNode(node: Node | null) {
        let currentNode = node;

        while (currentNode?.left !== null) {
            currentNode = currentNode?.left ?? null
        }
        return currentNode.value;
    }

    minNode(node: Node | null):any {
        if(node?.left === null) {
            return node
        } else {
            return this.minNode(node?.left ?? null)
        }
    }

    removeNode(node: Node | null, value:number): Node | null {
        if(node === null) {
            return null;
        } else if(value < node.value) {
            node.left = this.removeNode(node.left, value)
            return node;
        } else if(value > node.value) {
            node.right = this.removeNode(node.right, value)
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node=null;
                return node;
            }

            if(node.left === null) {
                node = node.right;
                return node
            } else if(node.right === null) {
                node = node.left;
                return node;
            }
            let minNode = this.minNode(node.right);
            node.value = minNode.value;
            node.right = this.removeNode(node.right, minNode.value)
            return node;
        }
    }

    search(node:Node|null, value:number): Node | null {
        if(node===null) {
            return null;
        } else if(value<node.value) {
            return this.search(node.left, value)
        }else if(value>node.value) {
            return this.search(node.right, value)
        }else  {
            return node
        }
    }
}