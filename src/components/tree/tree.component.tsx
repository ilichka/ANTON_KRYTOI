import {useEffect, useState} from "react";
import {SubTree} from "../subTree/subTree.component";
import {makeObservable} from "../../utility/observer/observer";
import {inOrderTraverseStrategy, postOrderTraverseStrategy} from "../../utility/tree-iterator/strategies";
import {TreeFactory} from "../../utility/trees/treeFabric";
import {Iterator} from "../../utility/tree-iterator/iterator";
import {Node} from "../../utility/BST/BST";

const bst = new TreeFactory().create('bst');
export const iterator = new Iterator(inOrderTraverseStrategy)

const Tree = () =>{
    const [root, setRoot] = useState<Node | null>(bst.root);
    const [number, setNumber] = useState(0);
    const [radioValue, setRadioValue] = useState('in');


    useEffect(()=>{
        makeObservable(bst);
        bst.insert(60);
        bst.insert(53);
        bst.insert(67);
        bst.insert(61);
        bst.insert(54);
        bst.insert(51);
        bst.insert(44);
        bst.insert(48);
        bst.insert(69);
        bst.insert(31);
        bst.insert(90);
        bst.insert(42);
        bst.insert(58);
        setRoot(bst.root);
    },[])

    const changeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(Number(e.target.value));
    }

    const addNumber = () => {
        bst.insert(number);
        setRoot( { ...(bst.root as Node) });
    }

    const removeNumber = () => {
        bst.removeNode(bst.root as Node, number);
        setRoot( { ...(bst.root as Node) });
    }

    const handleIterate = () => {
        const res: number[] = [];
        iterator.iterate(bst.root, (value)=>{res.push(value)})
        alert(JSON.stringify(res))
    }

    const handleRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value
        setRadioValue(val);
        iterator.setStrategy(val==='in' ? inOrderTraverseStrategy : postOrderTraverseStrategy)
    }

    return (
        <div className="container">
            <input type="number" min="1" name="add" onChange={changeNumber} required />
            <button onClick={addNumber} className="input-button">
                Add
            </button>
            <input type="number" min="1" name="add" onChange={changeNumber} required />
            <button onClick={removeNumber} className="input-button">
                Remove
            </button>
            <button onClick={handleIterate} className="input-button">
                Itarete
            </button>
            <div>
            <input type='radio' id='post' name="strategy" value='post' checked={radioValue==='post'} onChange={handleRadio}/>
            <label htmlFor="post">Post order</label>
            <input type='radio' id='in' name="strategy" value='in' checked={radioValue==='in'} onChange={handleRadio}/>
            <label htmlFor="in">In order</label>
            </div>
            <div className="tf-tree tf-custom">
                <ul>
                    <li>
                        <SubTree node={root} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Tree;