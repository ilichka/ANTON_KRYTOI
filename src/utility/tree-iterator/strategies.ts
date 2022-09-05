import { Node } from "../trees/BST";

export const inOrderTraverseStrategy = (
  node: Node | null,
  cb: (value: number) => void
): void => {
  if (node != null) {
    inOrderTraverseStrategy(node.left, cb);
    cb(node.value);
    inOrderTraverseStrategy(node.right, cb);
  }
};

export const postOrderTraverseStrategy = (
  node: Node | null,
  cb: (value: number) => void
): void => {
  if (node != null) {
    postOrderTraverseStrategy(node.left, cb);
    postOrderTraverseStrategy(node.right, cb);
    cb(node.value);
  }
};
