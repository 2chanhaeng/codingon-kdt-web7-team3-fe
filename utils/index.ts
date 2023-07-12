export function setHeader() {
  const header = new Headers();
  const access = localStorage.getItem("access");
  header.append("Authorization", `Bearer ${access}`);
  header.append("Content-Type", "application/json");
  return header;
}
