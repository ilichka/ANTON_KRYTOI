import { Node } from "../trees/types";

export function inOrderTraverseStrategy<T>(
  node: Node<T> | null,
  cb: (value: T) => void
): void {
  if (node != null) {
    inOrderTraverseStrategy(node.left, cb);
    cb(node.value);
    inOrderTraverseStrategy(node.right, cb);
  }
}

export function postOrderTraverseStrategy<T>(
  node: Node<T> | null,
  cb: (value: T) => void
): void {
  if (node != null) {
    cb(node.value);
    postOrderTraverseStrategy(node.left, cb);
    postOrderTraverseStrategy(node.right, cb);
  }
}
