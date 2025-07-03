import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const valueSchema = z.array(z.number()).min(2);

const scatterPointObjectSchema = z.object({
  value: valueSchema,
  name: z.string().optional(),
  symbol: z.string().optional(),
  symbolSize: z
    .union([z.number(), z.function().args(z.any()).returns(z.number())])
    .optional(),
  itemStyle: z.any().optional(),
  label: z.any().optional(),
});

const SeriesItemSchema = z.object({
  type: z.literal("scatter"),
  name: z
    .string()
    .optional()
    .describe(
      "Series name used for displaying in tooltip and filtering with legend, or updating data and configuration with setOption.",
    ),
  label: z
    .object({
      show: z.boolean().optional().describe("Whether to show label."),
      color: z.string().optional().describe("Text color."),
    })
    .optional()
    .describe(
      "Text label of , to explain some data information about graphic item like value, name and so on.",
    ),
  data: z
    .array(z.union([valueSchema, scatterPointObjectSchema]))
    .describe("Data array of series"),
});
// Scatter chart input schema
const schema = {
  ...BaseSchema,
  series: z
    .array(SeriesItemSchema)
    .describe(
      "Scatter (bubble) chart . The scatter chart in rectangular coordinate could be used to present the relation between x and y. If data have multiple dimensions, the values of the other dimensions can be visualized through symbol with various sizes and colors, which becomes a bubble chart. These can be done by using with visualMap component.",
    ),
};

// Scatter chart tool descriptor
const tool = {
  name: "generate_scatter_chart",
  description:
    "Generate a scatter chart to show the relationship between two variables, helps discover their relationship or trends, such as, the strength of correlation, data distribution patterns.",
  inputSchema: zodToJsonSchema(schema),
};

export const scatter = {
  schema,
  tool,
};
