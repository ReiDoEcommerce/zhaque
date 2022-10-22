

export function OnlyNumbers(word: string) {
    return word?.replace(/[^0-9]/g, "");
}