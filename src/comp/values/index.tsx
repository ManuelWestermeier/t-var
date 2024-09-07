import React from "react";

export default function Values({
  values,
  placeholders,
  setValues,
}: {
  values: Map<string, string>;
  placeholders: string[];
  setValues: React.Dispatch<React.SetStateAction<Map<string, string>>>;
}) {
  const out = [];

  for (const placeholder of placeholders) {
    const key = placeholder;
    const value = values.get(key) ?? "";

    if (placeholders.includes(key)) {
      out.push(
        <div key={key}>
          <label htmlFor={key + "id"}>{key}</label>
          <input
            type="text"
            placeholder={key}
            id={key + "id"}
            title={key}
            value={value}
            onChange={(e) => {
              const newValues = new Map(values);
              newValues.set(key, e.target.value);
              setValues(newValues);
            }}
          />
        </div>
      );
    }
  }

  return <>{out}</>;
}
