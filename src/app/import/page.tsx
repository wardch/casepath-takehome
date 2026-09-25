import { FileUpIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { TodoPlaceholder } from "@/components/todo-placeholder";

export default function Page() {
  return (
    <>
      <PageHeader title="Import" description="Upload a CSV of matters" />
      <main className="flex flex-1 items-center justify-center p-6">
        <TodoPlaceholder
          icon={FileUpIcon}
          phase="Part 1"
          title="Import matters"
          description="Bring a client's CSV of matters into the system."
          file="src/app/import/page.tsx"
          todo={[
            "Upload a CSV file",
            "Map its columns to your schema, pre-filling obvious matches",
            "Tidy what's safe to fix and flag what isn't for review",
            "Handle the same file being uploaded twice",
          ]}
        />
      </main>
    </>
  );
}
