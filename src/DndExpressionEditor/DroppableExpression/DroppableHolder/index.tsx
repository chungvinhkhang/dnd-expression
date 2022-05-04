import React from "react";
import { DragEventHandler, DragEvent } from "react";
import './style.css';

export interface DroppableHolderProp {
    onDrop: (e: DragEvent<HTMLSpanElement>, index?: number) => void;
    onDragOver: DragEventHandler;
}

const DroppableHolder = ({ onDrop, onDragOver }: DroppableHolderProp) => <span className="droppable-holder" onDrop={onDrop} onDragOver={onDragOver}> </span>;

export default DroppableHolder;