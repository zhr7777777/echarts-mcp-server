import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const RadarIndicatorSchema = z.object({
  name: z.string().describe(`Indicator's name.`),
  max: z
    .number()
    .optional()
    .describe(
      "The maximum value of indicator. It is an optional configuration, but we recommend to set it manually.",
    ),
  min: z
    .number()
    .optional()
    .describe(
      "The minimum value of indicator. It it an optional configuration, with default value of 0.",
    ),
  color: z.string().optional().describe("Specify a color of the indicator."),
});

const RadarSchema = z.object({
  indicator: z
    .array(RadarIndicatorSchema)
    .describe(
      "Indicator of radar chart, which is used to assign multiple variables(dimensions) in radar chart. ",
    ),
  shape: z
    .enum(["polygon", "circle"])
    .default("polygon")
    .optional()
    .describe(
      `Radar render type, in which 'polygon' and 'circle' are supported.`,
    ),
  radius: z
    .string()
    .optional()
    .default("75%")
    .describe(
      `Radius of . For example, '20%', means that the outside radius is 20% of the viewport size (the little one between width and height of the chart container).`,
    ),
  startAngle: z
    .number()
    .optional()
    .default(90)
    .describe(
      "The start angle of coordinate, which is the angle of the first indicator axis.",
    ),
  splitNumber: z
    .number()
    .optional()
    .default(5)
    .describe("Segments of indicator axis."),
});

const SeriesItemSchema = z.object({
  type: z.literal("radar"),
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
  data: z
    .array(
      z.object({
        value: z.array(z.number()),
        name: z.string(),
      }),
    )
    .describe("The data in radar chart is multi-variable (dimension)."),
});

// Radar chart input schema
const schema = {
  ...BaseSchema,
  radar: RadarSchema,
  series: z
    .array(SeriesItemSchema)
    .describe(
      "Radar chart is mainly used to show multi-variable data, such as the analysis of a football player's varied attributes. It relies radar component.",
    ),
};

// Radar chart tool descriptor
const tool = {
  name: "generate_radar_chart",
  description:
    "Generate a radar chart preview link(not a chart image) which display multidimensional data (four dimensions or more), such as, evaluate Huawei and Apple phones in terms of five dimensions: ease of use, functionality, camera, benchmark scores, and battery life.",
  inputSchema: zodToJsonSchema(schema),
};

export const radar = {
  schema,
  tool,
};
