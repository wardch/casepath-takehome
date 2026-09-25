import {
  CheckSquareIcon,
  FileUpIcon,
  ListChecksIcon,
  PlayIcon,
  ScaleIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  phase: string;
  description: string;
};

export type NavGroup = { label: string; items: NavItem[] };

// One place for the app's routes. The sidebar and the overview page both read
// from this, so add, rename or remove routes here.
export const navGroups: NavGroup[] = [
  {
    label: "Matters",
    items: [
      {
        title: "Import",
        href: "/import",
        icon: FileUpIcon,
        phase: "Part 1",
        description: "Upload a CSV, map its columns and validate the rows.",
      },
      {
        title: "Review",
        href: "/review",
        icon: ListChecksIcon,
        phase: "Part 1",
        description: "Approve or reject every imported row.",
      },
      {
        title: "Matters",
        href: "/matters",
        icon: ScaleIcon,
        phase: "Part 1",
        description: "Matters that have been imported.",
      },
    ],
  },
  {
    label: "Workflows",
    items: [
      {
        title: "Workflows",
        href: "/workflows",
        icon: WorkflowIcon,
        phase: "Part 2",
        description: "Design letter workflows on a canvas.",
      },
      {
        title: "Runs",
        href: "/runs",
        icon: PlayIcon,
        phase: "Part 3",
        description: "Run a workflow and follow each matter's progress.",
      },
      {
        title: "Staff tasks",
        href: "/tasks",
        icon: CheckSquareIcon,
        phase: "Part 3",
        description: "To-dos created by Staff task steps.",
      },
    ],
  },
];

export const navItems = navGroups.flatMap((group) => group.items);
