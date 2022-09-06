import { BinaryTree } from "./binaryTree";

export class TreeFactory {
  create(type: string) {
    if (type === "bst") {
      return new BinaryTree();
    }

    return new BinaryTree();
  }
}
