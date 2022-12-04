export const dataBorderSorting = [
    "linear-gradient(90deg, rgba(197,50,50,1) 0%, rgba(222,149,63,1) 100%)",
    "linear-gradient(90deg, rgba(222,149,63,1) 0%, rgba(131,52,188,1) 100%)",
    "linear-gradient(90deg, rgba(131,52,188,1) 0%, rgba(197,50,50,1) 100%)",
];

export function getCorrectColor(index: number) {
    const numberIndex = index % 3;
    return dataBorderSorting[numberIndex];
}
