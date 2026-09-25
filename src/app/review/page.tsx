import { ListChecksIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { TodoPlaceholder } from "@/components/todo-placeholder";

export default function Page() {
  return (
    <>
      <PageHeader title="Review" description="Approve or reject every matter" />
      <main className="flex flex-1 items-center justify-center p-6">
        <TodoPlaceholder
          icon={ListChecksIcon}
          phase="Part 1"
          title="Review matters"
          description="A legal executive approves every matter before it goes any further."
          file="src/app/review/page.tsx"
          todo={[
            "Show every row, not just the flagged ones",
            "Show what was tidied automatically and why rows were flagged",
            "Approve or Reject each one",
            "Save approved rows as matters",
            "Download rejected rows as a CSV with a reason column",
          ]}
        />
      </main>
    </>
  );
}
