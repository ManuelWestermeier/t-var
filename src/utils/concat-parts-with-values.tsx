export default function concatPartsWithValues(
  parts: string[],
  values: Map<string, string>
) {
  var out = "";

  for (let index = 0; index < parts.length; index++) {
    if (index % 2 == 0) {
      out += parts[index];
    } else {
      out +=
        values.get(parts[index]) ??
        `\n  !!!untyped value: ${parts[index]}!!!  \n`;
    }
  }

  return out;
}