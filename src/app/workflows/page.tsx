import { WorkflowIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { WorkflowCanvas } from "@/components/workflow-canvas";

export default function Page() {
  return (
    <>
      <PageHeader title="Workflows" description="Design a letter workflow" />
      <main className="relative flex-1">
        <div className="absolute inset-0">
          <WorkflowCanvas />
        </div>
        {/* Delete this hint once the canvas has nodes. */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-6">
          <div className="max-w-sm rounded-2xl border bg-card/90 p-6 text-center shadow-sm backdrop-blur">
            <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <WorkflowIcon className="size-5" />
            </div>
            <h2 className="mt-4 text-lg font-semibold tracking-tight">
              An empty canvas
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              React Flow is wired up. Add Start and End nodes, a step library,
              validation and saving. See Part 2 in the README.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
