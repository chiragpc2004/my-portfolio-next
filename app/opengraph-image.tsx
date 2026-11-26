import { homeCard, ogContentType, ogSize } from "@/lib/og";
import { site } from "@/content/site";

export const alt = `${site.name}: ${site.pitch}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return homeCard();
}
