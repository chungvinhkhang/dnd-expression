import React, { useState, DragEvent, MouseEvent } from 'react';
import { Operand, Operator, Operators } from './Base';
import DroppableExpression from './DroppableExpression';
import ExpressionDisplay from './ExpressionDisplay';
import './style.css';
import OperatorList from './OperatorList';
import ParamTree, { Param } from './ParamTree';
import { validateExpression } from './JsExpressionValidator/validator';

export interface DndExpressionEditorProp {
    value: (Operand | Operator)[];
    params: Param[];
    onSave: (expression: (Operand | Operator)[]) => void;
}

export interface ParamProp {
    name: string;
    items: ParamProp[];
}

const allOperators = Object.keys(Operators).map(p => Operators[p]);

const DndExpressionEditor = ({ value, params, onSave }: DndExpressionEditorProp) => {
    const [isEditing, setIsEditing] = useState(false);
    const [expression, setExpression] = useState<(Operand | Operator)[]>(value);

    const handleDrag = (e: DragEvent, item: Operand | Operator) => {
        if (e.dataTransfer) {
            e.dataTransfer.setData("text", JSON.stringify(item));
        }
    };
    const handleDrop = (e: DragEvent, index?: number) => {
        e.preventDefault();
        const opString = e.dataTransfer.getData("text");
        const op: Operand | Operator = JSON.parse(opString);
        setExpression(oldexpression => {
            if (index !== undefined) {
                return [
                    ...oldexpression.slice(0, index),
                    op,
                    ...oldexpression.slice(index)
                ];
            } else {
                return [...oldexpression, op];
            }
        });
    };
    const handleDragOver = (e: DragEvent) => {
        e.preventDefault();
    };
    const handleRemoveItemClick = (e: MouseEvent<HTMLSpanElement>, item: (Operand | Operator), index: number) => {
        setExpression(oldexpression => oldexpression.filter((_, i) => i !== index));
    };
    const handleSaveClick = () => {
        onSave(expression);
        setIsEditing(false);
    };
    const handleEditClick = () => {
        setIsEditing(true);
        setExpression(value);
    };
    const validateMessage = validateExpression(expression);
    const shading = <div className="expression-editor-shading"></div>;
    return <div style={{ width: 500, height: 0 }}>
        {!isEditing && <ExpressionDisplay expression={value} onClick={handleEditClick} />}
        {isEditing && <div>
            {shading}
            <div className="expression-editor-wrapper">
                <OperatorList operators={allOperators} onDragStart={handleDrag} />
                <DroppableExpression
                    items={expression}
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={handleDrop}
                    onRemoveItemClick={handleRemoveItemClick}
                />
                {validateMessage && <div className="validation-message">Expression is invalid (internal error: {validateMessage})</div>}
                <div className="expression-controls">
                    <button className="" disabled={!!validateMessage} onClick={handleSaveClick}>Save</button>
                    <button className="" onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
                <ParamTree onDragStart={handleDrag} items={params} />
            </div>
        </div>}
    </div>;
}

export default DndExpressionEditor;