import { BaseTree } from "./baseTree";
import { Node } from "../trees/BST";

export class Tree2 extends BaseTree<Node> {
  constructor() {
    super();
  }

  insert(value: number) {
    console.log(`Inserting ${value}...`);
  }

  iterate(node: Node, cb: any) {
    console.log("Iterating...");
  }

  removeNode(node: Node, value: number) {
    return null;
  }

  search(node: Node, value: number): any {
    console.log(`searching for ${value} in Tree2`);
  }
}
