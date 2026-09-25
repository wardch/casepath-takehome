import type { LucideIcon } from "lucide-react";
import { CircleDashedIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";

// Stand-in content for routes that haven't been built yet. Delete it once
// every page has real content.
export function TodoPlaceholder({
  icon: Icon,
  phase,
  title,
  description,
  todo,
  file,
}: {
  icon: LucideIcon;
  phase: string;
  title: string;
  description: string;
  todo: string[];
  file: string;
}) {
  return (
    <div className="w-full max-w-md rounded-2xl border bg-card p-8 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
          <Icon className="size-5" />
        </div>
        <Badge variant="secondary">{phase}</Badge>
      </div>

      <h2 className="mt-5 text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>

      <ul className="mt-6 space-y-2.5 border-t pt-6">
        {todo.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm">
            <CircleDashedIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-6 text-xs text-muted-foreground">
        Replace this placeholder in <code className="font-mono">{file}</code>
      </p>
    </div>
  );
}
