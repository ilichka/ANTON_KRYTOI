import { Node } from "../../utility/trees/types";

export const SubTree: React.FC<{ node: Node<number> | null }> = ({ node }) => {
  const createSubTree = (node: Node<number>) => {
    return Object.keys(node).map((key, index: number) => {
      if (key === "left" || key === "right") {
        return node[key] !== null ? (
          <li key={`${node.value}-${index}`}>
            <SubTree node={node[key]} />
          </li>
        ) : null;
      }
      return null;
    });
  };
  return (
    node && (
      <>
        <span className="tf-nc">{node.value}</span>
        <ul>{createSubTree(node)}</ul>
      </>
    )
  );
};
