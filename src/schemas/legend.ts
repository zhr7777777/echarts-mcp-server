import { z } from "zod";

const LegendSchema = z
  .object({
    data: z
      .array(z.string())
      .optional()
      .describe(
        "Data array of legend. An array item is usually a name representing string. (If it is a pie chart, it could also be the name of a single data in the pie chart) of a series.",
      ),
    //     orient: z.string().optional().default("horizontal").describe(`
    // Option:
    // 'horizontal' is default value.
    // 'vertical'
    // `),
    bottom: z
      .number()
      .optional()
      .default(10)
      .describe(`
Distance between legend component and the bottom side of the container.
bottom can be a pixel value like 20; it can also be a percentage value relative to container width like '20%'.`),
  })
  .describe(
    "Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart.",
  );

export default LegendSchema;
