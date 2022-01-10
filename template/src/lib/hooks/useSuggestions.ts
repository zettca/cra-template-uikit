import { useEffect, useState } from "react";

export interface SuggestionOption {
  id: string;
  label: string;
  type?: string;
}

export const suggestions = {
  columns: [
    { id: "licenseId", label: "License Id (licenseId)", type: "string" },
    { id: "clientName", label: "Client Name (clientName)", type: "string" },
    {
      id: "contactEmail",
      label: "Contact Email (contactEmail)",
      type: "string",
    },
    { id: "licenseType", label: "License Type (licenseType)", type: "string" },
    { id: "createdBy", label: "Created By (createdBy)", type: "string" },
    { id: "description", label: "Description (description)", type: "string" },
    { id: "created", label: "Creation Date (created)", type: "date" },
    { id: "endDate", label: "Expiry Date (endDate)", type: "date" },
  ],
  joinOperators: [{ id: "&", label: "AND ( & )" }],
  comparisonOperator: [
    { id: ":", label: "Equals ( : )" },
    { id: "!", label: "Not equals ( ! )" },
    { id: "<", label: "Less than ( < )" },
    { id: ">", label: "Greater than ( > )" },
    { id: "~", label: "Like ( ~ )" },
  ],
};

const comparisonOperator = suggestions.comparisonOperator.map((op) => op.id);
const joinOperators = suggestions.joinOperators.map((op) => op.id);

const operators = [...comparisonOperator, ...joinOperators];

export const useSuggestions = (query: string) => {
  const [activeSuggestions, setActiveSuggestions] = useState<
    SuggestionOption[]
  >([]);

  useEffect(() => {
    const values = query.split(" ");
    const lastValue = values[values.length - 1];
    const prevOfLastValue = values[values.length - 2];
    const columnNames = suggestions.columns.map((column) => column.id);

    if (
      columnNames.includes(lastValue) ||
      operators.includes(lastValue) ||
      comparisonOperator.includes(prevOfLastValue)
    ) {
      setActiveSuggestions([]);
    }

    // suggest column names
    else if (
      !query ||
      (lastValue.trim() === "" && joinOperators.includes(prevOfLastValue))
    ) {
      setActiveSuggestions(suggestions.columns);
    }

    // suggest operators
    else if (columnNames.includes(prevOfLastValue)) {
      const column = suggestions.columns.find(
        (col) => col.id === prevOfLastValue
      );

      if (column?.type === "string") {
        setActiveSuggestions(
          suggestions.comparisonOperator.filter(
            (op) => op.id !== ">" && op.id !== "<"
          )
        );
      } else if (column?.type === "date") {
        setActiveSuggestions(
          suggestions.comparisonOperator.filter((op) => op.id !== "~")
        );
      } else {
        setActiveSuggestions(suggestions.comparisonOperator);
      }
    } else {
      setActiveSuggestions(suggestions.joinOperators);
    }
  }, [query]);

  return activeSuggestions;
};

export const useSuggestionStatus = (
  query: string
): "valid" | "invalid" | "standBy" => {
  const [status, setStatus] = useState<"standBy" | "valid" | "invalid">(
    "standBy"
  );

  useEffect(() => {
    const re = new RegExp(`^[a-zA-Z0-9\\s${operators.join("")}\\"\\'-]*$`);

    if (!query || !re.test(query)) {
      setStatus("invalid");
    } else {
      const columnNames = suggestions.columns.map((column) => column.id);
      const tags = query.split(" & ");
      const regex = new RegExp(`\\s*[${comparisonOperator.join("")}]\\s*`);
      /* eslint no-restricted-syntax: ["error", "FunctionExpression", "WithStatement", "BinaryExpression[operator='in']"] */
      for (const tag of tags) {
        const keywords = tag.split(regex);
        const [columnName, value] = keywords;
        if (
          !value ||
          !columnNames.includes(columnName) ||
          (/\s/.test(value) && !/(["'])(?:(?=(\\?))\2.)*?\1/.test(value)) ||
          (/['"]/.test(value) && !/(["'])(?:(?=(\\?))\2.)*?\1/.test(value))
        ) {
          setStatus("invalid");
        } else {
          setStatus("valid");
        }
      }
    }
  }, [query]);

  return status;
};

export const getFormattedQuery = (query: string): string => {
  return query
    .replace(/([^"']+)|(["'][^"']+["'])/g, ($0, $1, $2) => {
      if ($1) {
        return $1.replace(/\s/g, "");
      }
      return $2;
    })
    .replace(/["\\']/g, "")
    .replace(/&/g, ",");
};
