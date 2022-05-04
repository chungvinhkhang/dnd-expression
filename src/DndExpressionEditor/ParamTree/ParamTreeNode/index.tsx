import { DragEvent } from "react";
import { Operand } from "../../Base";
import "./style.css";

export interface ParamTreeNodeProp {
    operand: Operand;
    onDragStart: (e: DragEvent<HTMLSpanElement>, operand: Operand) => void;
    children?: React.ReactNode;
}

const ParamTreeNode = ({ operand, onDragStart, children }: ParamTreeNodeProp) => <div>
    <span className="param-tree-node" onDragStart={(e) => onDragStart(e, operand)} draggable>{operand.name}</span>
    {children}
</div>;

export default ParamTreeNode;