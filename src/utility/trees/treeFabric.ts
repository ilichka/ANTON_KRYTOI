import { BST } from "../trees/BST";
import { Tree1 } from "./tree1";
import { Tree2 } from "./tree2";

export class TreeFactory {
  create(type: string) {
    if (type === "bst") {
      return new BST();
    }
    if (type === "tree1") {
      return new Tree1();
    }
    if (type === "tree2") {
      return new Tree2();
    }
    return new BST();
  }
}
