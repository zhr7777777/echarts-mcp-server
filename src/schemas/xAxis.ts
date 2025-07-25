import { z } from "zod";

const xAxisOptionSchema = z
  .object({
    type: z
      .enum(["value", "category", "time", "log"])
      .default("category")
      .describe(
        `Type of axis.
        Option: 
        'value' Numerical axis, suitable for continuous data. 
        'category' Category axis, suitable for discrete category data. Category data can be auto retrieved from series.data or dataset.source, or can be specified via xAxis.data.
        'time' Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.
        'log' Log axis, suitable for log data. Stacked bar or line series with type: 'log' axes may lead to significant visual errors and may have unintended effects in certain circumstances. Their use should be avoided.`,
      ),
    data: z
      .array(z.string())
      .optional()
      .describe("Name list of all categories."),
    name: z.string().optional().describe("Name of axis."),
    position: z
      .enum(["top", "bottom"])
      .optional()
      .describe(`The position of x axis.
options:
'top'
'bottom'
The first x axis in grid defaults to be on the bottom of the grid, and the second x axis is on the other side against the first x axis.`),
  })
  .describe(
    "The x axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 x axis, one on the bottom and another on the top. offset can be used to avoid overlap when you need to put more than two x axis.",
  );

const XAxisSchema = z.array(xAxisOptionSchema);

export default XAxisSchema;
