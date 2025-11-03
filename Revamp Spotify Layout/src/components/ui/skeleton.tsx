// Skeleton.tsx
// This component is used to display the skeleton
// It is used in the components/ui folder to display the skeleton
// It is also used in the components/ui/skeleton.tsx file to display the skeleton
// It is also used in the components/ui/skeleton.tsx file to display the skeleton
import * as React from "react";
import { cn } from "./utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn("bg-accent animate-pulse rounded-md", className)}
      {...props}
    />
  );
}

export { Skeleton };
