import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock3,
  Globe,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  UserCheck,
  X,
} from "lucide-react";

export type IconName =
  | "sparkle"
  | "shield"
  | "clock"
  | "leaf"
  | "check"
  | "phone"
  | "menu"
  | "close"
  | "arrow"
  | "star"
  | "award"
  | "message"
  | "clipboard"
  | "user"
  | "map"
  | "mail"
  | "sun"
  | "moon"
  | "globe"
  | "chevronLeft"
  | "chevronRight";

const iconMap: Record<IconName, LucideIcon> = {
  sparkle: Sparkles,
  shield: ShieldCheck,
  clock: Clock3,
  leaf: Leaf,
  check: CheckCircle2,
  phone: Phone,
  menu: Menu,
  close: X,
  arrow: ArrowRight,
  star: Star,
  award: Award,
  message: MessageCircle,
  clipboard: ClipboardList,
  user: UserCheck,
  map: MapPin,
  mail: Mail,
  sun: Sun,
  moon: Moon,
  globe: Globe,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
};

export type IconProps = {
  name: IconName;
  className?: string;
  strokeWidth?: number;
};

export function Icon({ name, className = "h-5 w-5", strokeWidth = 2 }: IconProps) {
  const Lucide = iconMap[name];
  return <Lucide className={className} strokeWidth={strokeWidth} aria-hidden />;
}

export { Sparkles, ShieldCheck, Clock3, Leaf, Star, Award, ArrowRight, MapPin, MessageCircle, UserCheck };
