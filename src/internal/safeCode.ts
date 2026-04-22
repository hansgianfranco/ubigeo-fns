export function safeUbigeo2(code: unknown): string | null {
  if (typeof code === "number") code = code.toString().padStart(2, "0");
  if (typeof code !== "string") return null;

  const c = code.trim();

  if (!c) return null;
  if (!/^\d{2}$/.test(c)) return null;

  return c;
}

export function safeUbigeo4(code: unknown): string | null {
  if (typeof code === "number") code = code.toString().padStart(4, "0");
  if (typeof code !== "string") return null;

  const c = code.trim();

  if (!c) return null;
  if (!/^\d{4}$/.test(c)) return null;

  return c;
}

export function safeUbigeo6(code: unknown): string | null {
  if (typeof code === "number") code = code.toString().padStart(6, "0");
  if (typeof code !== "string") return null;

  const c = code.trim();

  if (!c) return null;
  if (!/^\d{6}$/.test(c)) return null;

  return c;
}