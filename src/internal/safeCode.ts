export function safeUbigeo2(code: unknown): string | null {
  if (typeof code !== "string") return null;

  const c = code.trim();

  if (!c) return null;
  if (!/^\d{2}$/.test(c)) return null;

  return c;
}

export function safeUbigeo4(code: unknown): string | null {
  if (typeof code !== "string") return null;

  const c = code.trim();

  if (!c) return null;
  if (!/^\d{4}$/.test(c)) return null;

  return c;
}

export function safeUbigeo6(code: unknown): string | null {
  if (typeof code !== "string") return null;

  const c = code.trim();

  if (!c) return null;
  if (!/^\d{6}$/.test(c)) return null;

  return c;
}