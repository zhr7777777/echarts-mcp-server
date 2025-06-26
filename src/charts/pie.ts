import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

// Pie chart data schema
const data = z.object({
  name: z.string().describe("name of date item."),
  value: z.number().describe("value of date item."),
});

const SeriesItemSchema = z.object({
  type: z.literal("pie"),
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
      "Text label of pie chart, to explain some data information about graphic item like value, name and so on. ",
    ),
  data: z.array(data).describe("Data array of series"),
});
// Pie chart input schema
const schema = {
  ...BaseSchema,
  series: z
    .array(SeriesItemSchema)
    .describe(
      "The pie chart is mainly used for showing proportion of different categories. Each arc length represents the proportion of data quantity.",
    ),
};

// Pie chart tool descriptor
const tool = {
  name: "generate_pie_chart",
  description:
    "Generate a pie chart to show the proportion of parts, such as, market share and budget allocation.",
  inputSchema: zodToJsonSchema(schema),
};

export const pie = {
  schema,
  tool,
};
