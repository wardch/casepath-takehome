import { CheckSquareIcon } from "lucide-react";

import { PageHeader } from "@/components/page-header";
import { TodoPlaceholder } from "@/components/todo-placeholder";

export default function Page() {
  return (
    <>
      <PageHeader title="Staff tasks" description="To-dos for staff" />
      <main className="flex flex-1 items-center justify-center p-6">
        <TodoPlaceholder
          icon={CheckSquareIcon}
          phase="Part 3"
          title="Staff tasks"
          description="To-dos created when a run reaches a Staff task step."
          file="src/app/tasks/page.tsx"
          todo={[
            "List open tasks with the matter they belong to",
            "Let staff tick tasks off",
          ]}
        />
      </main>
    </>
  );
}
