import type { MouseEventHandler, ReactNode } from "react";
import { whatsappHref } from "@/lib/whatsapp";

export function WhatsAppLink({
  children,
  className,
  message,
  onClick,
  "aria-label": ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  message?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  "aria-label"?: string;
}) {
  return (
    <a
      className={className}
      href={whatsappHref(message)}
      aria-label={ariaLabel}
      onClick={onClick}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
