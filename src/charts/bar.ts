import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const SeriesItemSchema = z.object({
  type: z.literal("bar"),
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
  data: z.array(z.number()).describe("Data array of series."),
  stack: z
    .string()
    .optional()
    .describe(`
    Name of stack. On the same category axis, the series with the same stack name would be put on top of each other.
    Notice: stack only supports stacking on value and log axis for now. time and category axis are not supported.
`),
});

// Bar chart input schema
const schema = {
  ...BaseSchema,
  series: z
    .array(SeriesItemSchema)
    .describe(
      "Bar chart shows different data through the height of a bar, which is used in rectangular coordinate with at least 1 category axis.",
    ),
};

// Bar chart tool descriptor
const tool = {
  name: "generate_bar_chart",
  description:
    "Generate a bar chart to show data for numerical comparisons among different categories, such as, comparing categorical data and for horizontal comparisons.",
  inputSchema: zodToJsonSchema(schema),
};

export const bar = {
  schema,
  tool,
};
