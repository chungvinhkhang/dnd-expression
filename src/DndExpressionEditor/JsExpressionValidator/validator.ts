import { isOperator, Operand, Operator } from "../Base";

function validateExpressionWithX(expressionStr: string, xvalue: number = 1): string | null {
    if(!expressionStr)
        return null;
    try {
        // eslint-disable-next-line no-new-func
        const expressionExecutor = Function('x', `'use strict';const y=${expressionStr};`); 
        expressionExecutor(xvalue);
        return null;
    } catch(exception: unknown) {
        if(exception instanceof Error)
            return exception.message;
        return 'Unknown exception';
    }
}

export function validateExpression(expression: (Operand | Operator)[]): string | null {
    const expressionStr = expression.reduce<string[]>((prev, curr) => [...prev, (isOperator(curr) ? curr.name : 'x')], []).join('');
    return validateExpressionWithX(expressionStr);
}
