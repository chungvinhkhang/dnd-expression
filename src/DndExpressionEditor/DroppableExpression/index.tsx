import React from "react";
import { DragEventHandler, DragEvent, MouseEvent } from "react";
import { ExpressionItem } from "../Base";
import DroppableHolder from "./DroppableHolder";
import ExpressionItemSpan from "./ExpressionItemSpan";
import "./style.css";

export interface DroppableExpressionProp {
    items: ExpressionItem[];
    onDrop: (e: DragEvent<HTMLSpanElement>, index?: number) => void;
    onDragOver: DragEventHandler;
    onRemoveItemClick: (e: MouseEvent<HTMLSpanElement>, item: ExpressionItem, index: number) => void;
}

const DroppableExpression = ({ items, onDragOver, onDrop, onRemoveItemClick }: DroppableExpressionProp) =>
    <div className="droppable-expression">
        {items && items.map((item, index) => <React.Fragment key={index}>
            <DroppableHolder onDragOver={onDragOver} onDrop={(e) => onDrop(e, index)} />
            <label key={`exp-op-${index}}`}>
                <ExpressionItemSpan item={item}>
                    <span className="remove-item" onClick={(e) => onRemoveItemClick(e, item, index)}>✕</span>
                </ExpressionItemSpan>
            </label>
        </React.Fragment>)}
        <DroppableHolder onDragOver={onDragOver} onDrop={(e) => onDrop(e)} />
    </div>;

export default DroppableExpression;