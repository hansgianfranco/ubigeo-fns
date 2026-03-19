import { data } from "../data/ubigeo";
import { UbigeoData } from "../types";

export function getUbigeoData(ubigeo: string): UbigeoData | null{
  if (!ubigeo) return null;

  return data.find((item) => item.ubigeo === ubigeo) || null;
}