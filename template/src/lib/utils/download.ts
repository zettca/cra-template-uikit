export const downloadFile = (blob: Blob, id: string) => {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = `license-${Date.now()}-${id}.zip`;
  link.style.display = "none";
  document.body.append(link);
  link.click();
  document.body.removeChild(link);
};
