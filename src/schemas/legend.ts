import { z } from "zod";

const LegendSchema = z
  .object({
    data: z
      .array(z.string())
      .optional()
      .describe(
        "Data array of legend. An array item is usually a name representing string. (If it is a pie chart, it could also be the name of a single data in the pie chart) of a series.",
      ),
    orient: z
      .enum(["horizontal", "vertical"])
      .optional()
      .default("horizontal")
      .describe("The layout orientation of legend."),
    bottom: z
      .union([z.string(), z.number()])
      .optional()
      .default(20)
      .describe(`
Distance between legend component and the bottom side of the container.
bottom can be a pixel value like 20; it can also be a percentage value relative to container width like '20%'.
Adaptive by default.`),
  })
  .describe(
    "Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart.",
  );

export default LegendSchema;
