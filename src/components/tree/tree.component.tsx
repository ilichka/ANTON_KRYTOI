import { useState } from "react";
import { SubTree } from "../subTree/subTree.component";
import { BaseTree } from "../../utility/trees/types";

const Tree = ({ binaryTree }: { binaryTree: BaseTree<number> }) => {
  console.log("RENDER");
  const [number, setNumber] = useState(0);
  const [radioValue, setRadioValue] = useState("in");

  const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value));
  };

  const addNumber = () => {
    binaryTree.insert(number);
  };

  const removeNumber = () => {
    binaryTree.remove(number);
  };

  const handleIterate = () => {
    // const res: number[] = [];
    // iterator.iterate(bst.root, (value) => {
    //   res.push(value);
    // });
    // alert(JSON.stringify(res));
  };

  const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setRadioValue(val);
    // iterator.setStrategy(
    //   val === "in" ? inOrderTraverseStrategy : postOrderTraverseStrategy
    // );
  };

  return (
    <div className="container">
      <input
        type="number"
        min="1"
        name="add"
        onChange={changeNumber}
        required
      />
      <button onClick={addNumber} className="input-button">
        Add
      </button>
      <input
        type="number"
        min="1"
        name="add"
        onChange={changeNumber}
        required
      />
      <button onClick={removeNumber} className="input-button">
        Remove
      </button>
      <button onClick={handleIterate} className="input-button">
        Itarete
      </button>
      <div>
        <input
          type="radio"
          id="post"
          name="strategy"
          value="post"
          checked={radioValue === "post"}
          onChange={handleRadio}
        />
        <label htmlFor="post">Post order</label>
        <input
          type="radio"
          id="in"
          name="strategy"
          value="in"
          checked={radioValue === "in"}
          onChange={handleRadio}
        />
        <label htmlFor="in">In order</label>
      </div>
      <div className="tf-tree tf-custom">
        <ul>
          <li>
            <SubTree node={binaryTree.root} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tree;
