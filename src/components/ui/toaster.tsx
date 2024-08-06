"use client";

import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";
import {
  BadgeCheck,
  Info,
  LoaderCircle,
  ShieldAlert,
  TriangleAlert,
} from "lucide-react";
import { cva } from "class-variance-authority";
import { cn } from "~/lib/utils";

export { toast } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const toaster = cva(
  cn("flex items-center shadow space-x-4 border w-full px-4 py-1 rounded"),
  {
    variants: {
      color: {
        loading: "bg-graydark-3 border-graydark-6 text-graydark-12",
        success: "bg-greendark-3 border-greendark-6 text-greendark-12",
        warning: "bg-yellowdark-3 border-yellowdark-6 text-yellowdark-12",
        error: "bg-reddark-3 border-reddark-6 text-reddark-12",
        info: "bg-bluedark-3 border-bluedark-6 text-bluedark-12",
      },
    },
  }
);

export const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      visibleToasts={5}
      expand
      icons={{
        error: <ShieldAlert size={18} />,
        warning: <TriangleAlert size={18} />,
        success: <BadgeCheck size={18} />,
        info: <Info size={18} />,
        loading: <LoaderCircle className="animate-spin" size={18} />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          title: "font-bold uppercase text-xs",
          description: "text-xs",
          content: "flex flex-col",
          icon: "",
          loading: toaster({ color: "loading" }),
          success: toaster({ color: "success" }),
          warning: toaster({ color: "warning" }),
          error: toaster({ color: "error" }),
          info: toaster({ color: "info" }),
        },
      }}
      {...props}
    />
  );
};
