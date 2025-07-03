import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const SeriesItemSchema = z.object({
  type: z
    .enum(["bar", "line"])
    .default("bar")
    .describe(
      "Default is bar. When bar chart mixed with line chart, this can be line",
    ),
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
  xAxisIndex: z
    .number()
    .optional()
    .describe(
      "Index of x axis to combine with, which is useful for multiple x axes in one chart.",
    ),
  yAxisIndex: z
    .number()
    .optional()
    .describe(
      "Index of y axis to combine with, which is useful for multiple y axes in one chart.",
    ),
});

// Bar chart input schema
const schema = {
  ...BaseSchema,
  series: z
    .array(SeriesItemSchema)
    .describe(
      "Bar chart shows different data through the height of a bar, which is used in rectangular coordinate with at least 1 category axis. Bar chart can mix with line chart",
    ),
};

// Bar chart tool descriptor
const tool = {
  name: "generate_bar_chart",
  description:
    "Generate a bar chart preview link(not a chart image) which user can click to show data for numerical comparisons among different categories, such as, comparing categorical data and for horizontal comparisons.",
  inputSchema: zodToJsonSchema(schema),
};

export const bar = {
  schema,
  tool,
};
