import { z } from "zod";

const YAxisSchema = z
  .object({
    type: z
      .enum(["value", "category", "time", "log"])
      .default("value")
      .describe(
        `Type of axis.
        Option: 
        'value' Numerical axis, suitable for continuous data.
        'category' Category axis, suitable for discrete category data. Category data can be auto retrieved from series.data or dataset.source, or can be specified via yAxis.data.
        'time' Time axis, suitable for continuous time series data. As compared to value axis, it has a better formatting for time and a different tick calculation method. For example, it decides to use month, week, day or hour for tick based on the range of span.
        'log' Log axis, suitable for log data. Stacked bar or line series with type: 'log' axes may lead to significant visual errors and may have unintended effects in certain circumstances. Their use should be avoided.`,
      ),
  })
  .describe(
    "The y axis in cartesian(rectangular) coordinate. Usually a single grid component can place at most 2 y axis, one on the left and another on the right. offset can be used to avoid overlap when you need to put more than two y axis.",
  );

export default YAxisSchema;
