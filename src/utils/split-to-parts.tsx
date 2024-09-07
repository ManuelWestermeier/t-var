export default function splitToParts(data: string): string[] {
    const parts = data.split(/(?<!\\)(?:\\\\)*##/);

    for (let i = 0; i < parts.length; i++) {
        parts[i] = parts[i].replace(/\\##/g, '##');
        parts[i] = parts[i].replace(/\\\\/g, '\\');
    }

    return parts;
}