import { z } from "zod";

const ToolboxSchema = z
  .object({
    show: z.literal(true),
    feature: z
      .object({
        saveAsImage: z.object({}).default({}).describe("Save as image."),
      })
      .describe("The configuration item for each tool."),
  })
  .describe("A group of utility tools.");

export default ToolboxSchema;
