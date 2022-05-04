import React from "react";
import { DragEventHandler, DragEvent, MouseEvent } from "react";
import { Operand, Operator } from "../Base";
import DroppableHolder from "./DroppableHolder";
import ExpressionItem from "./ExpressionItem/Index";
import "./style.css";

export interface DroppableExpressionProp {
    items: (Operator | Operand)[];
    onDrop: (e: DragEvent<HTMLSpanElement>, index?: number) => void;
    onDragOver: DragEventHandler;
    onRemoveItemClick: (e: MouseEvent<HTMLSpanElement>, item: (Operator | Operand), index: number) => void;
}

const DroppableExpression = ({ items, onDragOver, onDrop, onRemoveItemClick }: DroppableExpressionProp) =>
    <div className="droppable-expression">
        {items && items.map((item, index) => <React.Fragment key={index}>
            <DroppableHolder onDragOver={onDragOver} onDrop={(e) => onDrop(e, index)} />
            <label key={`exp-op-${index}}`}>
                <ExpressionItem item={item}>
                    <span className="remove-item" onClick={(e) => onRemoveItemClick(e, item, index)}>✕</span>
                </ExpressionItem>
            </label>
        </React.Fragment>)}
        <DroppableHolder onDragOver={onDragOver} onDrop={(e) => onDrop(e)} />
    </div>;


export default DroppableExpression;