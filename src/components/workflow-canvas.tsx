"use client";

import { Background, Controls, ReactFlow } from "@xyflow/react";

// An empty React Flow canvas, here to show the library and its styles are
// wired up (the stylesheet is imported in globals.css). Nodes, edges, the
// step library and saving are yours to build.
export function WorkflowCanvas() {
  return (
    <ReactFlow nodes={[]} edges={[]} fitView attributionPosition="top-right">
      <Background gap={20} />
      <Controls />
    </ReactFlow>
  );
}
