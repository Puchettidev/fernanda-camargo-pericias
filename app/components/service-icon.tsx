import {
  BadgeDollarSign,
  Banknote,
  Calculator,
  FileSearch,
  FileSpreadsheet,
  FileText,
  Scale,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ServiceIconName } from "../service-data";

const icons: Record<ServiceIconName, LucideIcon> = {
  scale: Scale,
  "badge-dollar": BadgeDollarSign,
  "file-text": FileText,
  banknote: Banknote,
  calculator: Calculator,
  spreadsheet: FileSpreadsheet,
  "file-search": FileSearch,
};

type ServiceIconProps = {
  name: ServiceIconName;
  size?: number;
};

export function ServiceIcon({ name, size = 30 }: ServiceIconProps) {
  const Icon = icons[name];

  return <Icon size={size} strokeWidth={1.8} aria-hidden="true" />;
}
