import { ScaleIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { TodoPlaceholder } from "@/components/todo-placeholder";

export default function Page() {
  return (
    <>
      <PageHeader title="Matters" description="Imported matters" />
      <main className="flex flex-1 items-center justify-center p-6">
        <TodoPlaceholder
          icon={ScaleIcon}
          phase="Part 1"
          title="Matters"
          description="Matters a reviewer has approved."
          file="src/app/matters/page.tsx"
          todo={[
            "List the matters saved to the database",
            "Show which import each matter came from",
          ]}
        />
      </main>
    </>
  );
}
