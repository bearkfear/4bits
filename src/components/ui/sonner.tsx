"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { Toaster as Sonner, toast } from "sonner";
import {
  BadgeCheck,
  Info,
  LoaderCircle,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      visibleToasts={5}
      duration={100000}
      expand
      icons={{
        error: <ShieldAlert />,
        warning: <TriangleAlert />,
        success: <BadgeCheck />,
        info: <Info />,
        loading: <LoaderCircle className="animate-spin" size={18} />,
      }}
      closeButton
      toastOptions={{
        unstyled: true,
        classNames: {
          title: "font-bold uppercase text-xs",
          description: "text-sm",
          content: "flex flex-col",
          loading:
            "flex items-center shadow space-x-2 bg-graydark-3 border-graydark-6 border w-full px-4 py-1 rounded text-graydark-12",
          closeButton:
            "bg-graydark-1 border-graydark-6 border-1 text-graydark-12 size-5",
        },
      }}
      {...props}
    />
  );
};

export { Toaster, toast };
