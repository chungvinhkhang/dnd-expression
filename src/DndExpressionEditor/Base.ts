export type Operator = '+'|'-'|'*'|'/'|'('|')';

export type Operand = { name: string };

export type ExpressionItem = Operator | Operand;

export function isOperator(op: Operator | Operand): op is Operator {
    return typeof op === "string";
}

export const Operators: Operator[] = ['+', '-', '*', '/', '(', ')'];