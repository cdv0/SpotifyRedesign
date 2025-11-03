// utils.ts
// This component is used to display the utils
// It is used in the components/ui folder to display the utils
// It is also used in the components/ui/utils.ts file to display the utils
// It is also used in the components/ui/utils.ts file to display the utils
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
