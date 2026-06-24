// Ex: "2026/06/22 10:53:39"
export function formatDate(val) {
  if (!val) return "";

  const d = new Date(val);
  if (isNaN(d.getTime())) return "";

  const p = n => String(n).padStart(2, "0");

  return `${d.getFullYear()}/${
    p(d.getMonth() + 1)
  }/${
    p(d.getDate())
  } ${
    p(d.getHours())
  }:${
    p(d.getMinutes())
  }:${
    p(d.getSeconds())
  }`;
}
