import { z } from "zod";
import BaseSchema from "../schemas/base";
import { zodToJsonSchema } from "../utils";

const VisualMapSchema = z
  .object({
    min: z.number().describe(`
Specify the min dataValue for the visualMap component. [visualMap.min, visualMax.max] make up the domain of viusul mapping.
Notice that min and max should be specified explicitly, and be [0, 200] by default, but not dataMin and dataMax in series.data.
`),
    max: z.number().describe(`
Specify the max dataValue for the visualMap component. [visualMap.min, visualMax.max] make up the domain of viusul mapping.
Notice that min and max should be specified explicitly, and be [0, 200] by default, but not dataMin and dataMax in series.data.
`),
    calculable: z
      .boolean()
      .optional()
      .describe(
        'Whether show handles, which can be dragged to adjust "selected range".',
      ),
    orient: z
      .enum(["horizontal", "vertical"])
      .default("vertical")
      .optional()
      .describe(
        "How to layout the visualMap component, 'horizontal' or 'vertical'.",
      ),
    left: z
      .union([z.string(), z.number()])
      .optional()
      .describe(`
Distance between visualMap component and the left side of the container.
left can be a pixel value like 20; it can also be a percentage value relative to container width like '20%'; and it can also be 'left', 'center', or 'right'.
If the left value is set to be 'left', 'center', or 'right', then the component will be aligned automatically based on position.
`),
    bottom: z
      .union([z.string(), z.number()])
      .optional()
      .describe(`
Distance between visualMap component and the bottom side of the container.
bottom can be a pixel value like 20; it can also be a percentage value relative to container width like '20%'.
`),
  })
  .describe(`
visualMap is a type of component for visual encoding, which maps the data to visual channels, including:
symbol: Type of symbol.
symbolSize: Symbol size.
color: Symbol color.
colorAlpha: Symbol alpha channel.
opacity: Opacity of symbol and others (like labels).
colorLightness: Lightness in HSL.
colorSaturation: Saturation in HSL.
colorHue: Hue in HSL.
Multiple visualMap component could be defined in a chart instance, which enable that different dimensions of a series data are mapped to different visual channels.
`);

const SeriesItemSchema = z.object({
  type: z.literal("heatmap"),
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
      z.tuple([z.number(), z.number(), z.number()]), // xIndex, yIndex, value
    )
    .describe("Data array of series."),
});

// Heatmap chart input schema
const schema = {
  ...BaseSchema,
  visualMap: VisualMapSchema,
  series: z.array(SeriesItemSchema).describe(`
Heat map mainly use colors to represent values, which must be used along with visualMap component.
It can be used in either rectangular coordinate or geographic coordinate. But the behaviour on them are quite different. Rectangular coordinate must have two categories to use it.
`),
};

// Heatmap chart tool descriptor
const tool = {
  name: "generate_heatmap_chart",
  description:
    "Generate a heatmap chart preview link(not a chart image) which mainly use colors to represent values, which must be used along with visualMap component.",
  inputSchema: zodToJsonSchema(schema),
};

export const heatmap = {
  schema,
  tool,
};
