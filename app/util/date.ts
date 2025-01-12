/* Jan.09.2025 */
export const formatDate = (date: Date) => {
  const month = date.toLocaleString("en-US", { month: "short" }); // 'Jan'
  const day = String(date.getDate()).padStart(2, "0"); // '09'
  const year = date.getFullYear(); // '2025'

  return `${month}.${day}.${year}`;
};
