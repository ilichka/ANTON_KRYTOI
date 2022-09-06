import { useEffect, useRef, useState } from "react";
import Tree from "./components/tree/tree";
import { TreeIterator } from "./utility/tree-iterator/tree-iterator";
import { inOrderTraverseStrategy } from "./utility/tree-iterator/strategies";
import {
  makeTreeObservable,
  ObservableBinaryTree,
} from "./utility/trees/observable-binary-tree";
import { TreeFactory } from "./utility/trees/tree-fabric";
import { SearchableBaseTree } from "./utility/trees/types";

function App() {
  const observableBinaryTreeRef = useRef<ObservableBinaryTree<number>>(
    makeTreeObservable(new TreeFactory().create("bst"))
  );
  const iteratorRef = useRef<TreeIterator<number>>(
    new TreeIterator(inOrderTraverseStrategy)
  );
  const [tree, setTree] = useState<SearchableBaseTree<number>>(
    observableBinaryTreeRef.current
  );

  useEffect(() => {
    observableBinaryTreeRef.current.subscribe((data) => {
      console.log("subscribe data", data);
      setTree({...data});
    });

    return () => {
      observableBinaryTreeRef.current.unsubscribe(setTree);
    };
  }, []);

  return <Tree binaryTree={observableBinaryTreeRef.current} />;
}

export default App;
