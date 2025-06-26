import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const booleanOrNumber = z.boolean().or(z.number());

const SeriesItemSchema = z.object({
  type: z.literal("line"),
  name: z
    .string()
    .optional()
    .describe(
      "Series name used for displaying in tooltip and filtering with legend.",
    ),
  label: z
    .object({
      show: z.boolean().describe("Whether to show label."),
      color: z.string().describe("Text color."),
    })
    .default({
      show: true,
      color: "#000",
    })
    .describe(
      "Text label of , to explain some data information about graphic item like value, name and so on. ",
    ),
  data: z.array(z.number()).describe("Data array of series."),
  smooth: booleanOrNumber.describe(
    "Whether to show as smooth curve. If is typed in boolean, then it means whether to enable smoothing. If is typed in number, valued from 0 to 1, then it means smoothness. A smaller value makes it less smooth.",
  ),
  stack: z
    .string()
    .optional()
    .describe(`
    If stack the value. On the same category axis, the series with the same stack name would be put on top of each other.
    Notice: stack only supports stacking on value and log axis for now. time and category axis are not supported.
`),
});

// Line chart input schema
const schema = {
  ...BaseSchema,
  series: z
    .array(SeriesItemSchema)
    .describe(
      "Broken line chart relates all the data points symbol by broken lines, which is used to show the trend of data changing. It could be used in both rectangular coordinate andpolar coordinate.",
    ),
};

// Line chart tool descriptor
const tool = {
  name: "generate_line_chart",
  description:
    "Generate a line chart to show trends over time, such as, the ratio of Apple computer sales to Apple's profits changed from 2000 to 2016.",
  inputSchema: zodToJsonSchema(schema),
};

export const line = {
  schema,
  tool,
};
