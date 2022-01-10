export function extractError({ error, errors, message }): string {
  if (message && typeof message === "string") {
    return message;
  }

  if (errors && Array.isArray(errors) && errors.length > 0) {
    return errors.join(",");
  }

  if (error && typeof error === "string") {
    return error;
  }

  return "";
}
