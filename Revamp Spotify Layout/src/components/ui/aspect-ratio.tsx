// AspectRatio.tsx
// This component is used to display the aspect ratio
// It is used in the components/ui folder to display the aspect ratio
// It is also used in the components/ui/aspect-ratio.tsx file to display the aspect ratio
// It is also used in the components/ui/aspect-ratio.tsx file to display the aspect ratio
"use client";

import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio@1.1.2";

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />;
}

export { AspectRatio };
