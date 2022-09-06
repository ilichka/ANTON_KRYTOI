import { useEffect, useRef, useState } from "react";
import Tree from "./components/tree/tree.component";
import { Iterator } from "./utility/tree-iterator/iterator";
import { inOrderTraverseStrategy } from "./utility/tree-iterator/strategies";
import {
  makeTreeObservable,
  ObservableBinaryTree,
} from "./utility/trees/observableBinaryTree";
import { TreeFactory } from "./utility/trees/treeFabric";
import { SearchableBaseTree } from "./utility/trees/types";

function App() {
  const observableBinaryTreeRef = useRef<ObservableBinaryTree<number>>(
    makeTreeObservable(new TreeFactory().create("bst"))
  );
  const iteratorRef = useRef<Iterator<number>>(
    new Iterator(inOrderTraverseStrategy)
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
