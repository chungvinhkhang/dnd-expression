import { DragEvent } from "react";
import { Operand } from "../Base";
import ParamTreeNode from "./ParamTreeNode";
import './style.css';

export type Param = {
    node: Operand,
    items?: Param[]
};

export interface ParamTreeProp {
    items: Param[]
    onDragStart: (e: DragEvent<HTMLSpanElement>, operand: Operand) => void;
}

const ParamTree = ({ items, onDragStart }: ParamTreeProp) => <ul className="param-tree">
    {items && items.map((p) => <li key={p.node.name} ><ParamTreeNode operand={p.node} onDragStart={onDragStart}>
        {p.items && <ParamTree onDragStart={onDragStart} items={p.items} />}
    </ParamTreeNode></li>)}
</ul>;

const RootParamTree = (props: ParamTreeProp) => <div className="param-panel"><ParamTree {...props}/></div>;

export default RootParamTree;

/*

<li>
    <ParamTreeNode name="p-1" onDragStart={onDragStart}>
        <ul>
            <li>
                <ParamTreeNode name="p-1-1" onDragStart={onDragStart}/>
            </li>
            <li>
                <ParamTreeNode name="p-1-2" onDragStart={onDragStart}/>
            </li>
        </ul>
    </ParamTreeNode>
</li>
<li>
    <ParamTreeNode name="p-2">
        <ul>
            <li>
                <ParamTreeNode name="p-2-1" onDragStart={onDragStart}/>
            </li>
            <li>
                <ParamTreeNode name="p-2-2" onDragStart={onDragStart}/>
            </li>
        </ul>
    </ParamTreeNode>
</li>*/