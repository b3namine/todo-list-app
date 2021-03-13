export function truncateText(string: string, num: number): string {
    return string.length > num ? string.slice(0, num) + '...' : string;
}
