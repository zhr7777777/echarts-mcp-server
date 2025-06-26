import { z } from "zod";

const LegendSchema = z
  .object({
    data: z
      .array(z.string())
      .optional()
      .describe(
        "Data array of legend. An array item is usually a name representing string. (If it is a pie chart, it could also be the name of a single data in the pie chart) of a series.",
      ),
  })
  .describe(
    "Legend component shows symbol, color and name of different series. You can click legends to toggle displaying series in the chart.",
  );

export default LegendSchema;
