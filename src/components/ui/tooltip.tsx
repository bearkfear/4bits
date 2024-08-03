import {
  TooltipArrow,
  TooltipContent,
  type TooltipContentProps,
} from "@radix-ui/react-tooltip";

export { Trigger, Root, Provider } from "@radix-ui/react-tooltip";

export function Content({ children, ...props }: TooltipContentProps) {
  return (
    <TooltipContent {...props}>
      {typeof children === "string" || typeof children === "number" ? (
        <div className="mx-2 bg-graydark-5 text-white rounded border-graydark-5 border text-xs py-1 px-1">{children}</div>
      ) : (
        children
      )}
      <TooltipArrow className="fill-graydark-5" />
    </TooltipContent>
  );
}