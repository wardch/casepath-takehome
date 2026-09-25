import { PlayIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { TodoPlaceholder } from "@/components/todo-placeholder";

export default function Page() {
  return (
    <>
      <PageHeader title="Runs" description="Workflow runs" />
      <main className="flex flex-1 items-center justify-center p-6">
        <TodoPlaceholder
          icon={PlayIcon}
          phase="Part 3"
          title="Run a workflow"
          description="Run a saved workflow against the approved matters."
          file="src/app/runs/page.tsx"
          todo={[
            "Start a run of a saved workflow",
            "Move each matter through the steps independently",
            "Show each matter's step, sent letters with provider ids, and failures",
            "Carry on after a server restart, even mid-Wait",
          ]}
        />
      </main>
    </>
  );
}
