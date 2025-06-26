import { z } from "zod";

const TooltipSchema = z
  .object({
    show: z.literal(true),
    type: z
      .enum(["item", "axis", "none"])
      .default("item")
      .describe(
        `Type of triggering.
        Option: 
        'item' Triggered by data item, which is mainly used for charts that don't have a category axis like scatter charts or pie charts.
        'axis' Triggered by axes, which is mainly used for charts that have category axes, like bar charts or line charts.
        'none' Trigger nothing.`,
      ),
  })
  .describe("Tooltip component.");

export default TooltipSchema;
