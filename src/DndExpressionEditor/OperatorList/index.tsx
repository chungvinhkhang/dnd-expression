import { DragEvent } from "react";
import { Operator } from "../Base";
import "./style.css";

export interface FormulaEditorProp {
    operators: Operator[];
    onDragStart: (e: DragEvent<HTMLSpanElement>, operator: Operator) => void;
}

const OperatorList = ({operators, onDragStart}: FormulaEditorProp) => <ul className='operator-list'>
{operators && operators.map((op, index) => (
    <li key={`operator-${index}`}>
        <span onDragStart={(e) => onDragStart(e, op)} draggable>{op}</span>
    </li>
))}
</ul>;


export default OperatorList;