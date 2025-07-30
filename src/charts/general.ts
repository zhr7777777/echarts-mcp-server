import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const SeriesItemSchema = z.object({
  type: z
    .enum([
      "effectScatter",
      "tree",
      "treemap",
      "sunburst",
      "boxplot",
      "candlestick",
      // "parallel",
      "graph",
      "sankey",
      "funnel",
      "gauge",
      "themeRiver",
    ])
    .describe(`
effectScatter: The scatter (bubble) graph with ripple animation. The special animation effect can visually highlights some data.
tree: The tree diagram is mainly used to visualize the tree data structure, which is a special hierarchical type with a unique root node, left subtree, and right subtree.
treemap: Treemap is a common way to present "hierarchical data" or "tree data". It primarily highlights the important nodes at all hierarchies in 『Tree』with area.
sunburst: Sunburst Chart is composed of multiple pie charts. From the view of data structure, inner rings are the parent nodes of outer rings. Therefore, it can show the partial-overall relationship as Pie charts, and also level relation as Treemap charts.
boxplot: Boxplot is a convenient way of graphically depicting groups of numerical data through their quartiles.
candlestick: A candlestick chart (also called Japanese candlestick chart) is a style of financial chart used to describe price movements of a security, derivative, or currency.
graph: Graph is a diagram to represent nodes and the links connecting nodes.
sankey: Sankey diagram Sankey diagram is a specific type of streamgraph (can also be seen as a directed acyclic graph) in which the width of each branch is shown proportionally to the flow quantity. These graphs are typically used to visualize energy or material or cost transfers between processes. They can also visualize the energy accounts, material flow accounts on a regional or national level, and also the breakdown of cost of item or services.
funnel: Funnel chart.
gauge: Gauge chart.
themeRiver: It is a special flow graph which is mainly used to present the changes of an event or theme during a period.
`),
  name: z
    .string()
    .optional()
    .describe(
      "Series name used for displaying in tooltip and filtering with legend.",
    ),
  label: z
    .object({
      show: z.boolean().describe("Whether to show label."),
      color: z.string().optional().describe("Text color."),
    })
    .default({
      show: true,
    })
    .describe(
      "Text label of , to explain some data information about graphic item like value, name and so on. ",
    ),
});

// General chart input schema
const schema = {
  ...BaseSchema,
  series: z.array(SeriesItemSchema),
};

// General chart tool descriptor
const tool = {
  name: "generate_general_chart",
  description:
    "Generate a chart preview link(not a chart image). Support following types: effectScatter, tree, treemap, sunburst, boxplot, candlestick, graph, sankey, funnel, gauge and themeRiver",
  inputSchema: zodToJsonSchema(schema),
};

export const general = {
  schema,
  tool,
};
