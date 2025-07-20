import { z } from "zod";

const TitleSchema = z
  .object({
    text: z
      .string()
      .optional()
      .describe("The main title text, supporting for \n for newlines."),
    subtext: z
      .string()
      .optional()
      .describe("Subtitle text, supporting for \n for newlines."),
    left: z
      .enum(["left", "center", "right"])
      .default("center")
      .describe(
        "Distance between title component and the top side of the container.",
      ),
  })
  .describe("Title component, including main title and subtitle.");

export default TitleSchema;
