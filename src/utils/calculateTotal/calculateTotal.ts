export function calculateTotal(amounts: string): number {
    const amountArray = amounts
        .split(/[\n,]+/)
        .map(amount => amount.trim())
        .filter(amount => amount !== '')
        .map(amount => parseFloat(amount));
    if (amountArray.some(isNaN)) {
        return 0; // Return 0 if any amount is not a valid number
    }
    return amountArray
        .filter(num => !isNaN(num))
        .reduce((total, num) => total + num, 0);
}