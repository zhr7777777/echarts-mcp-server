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
  })
  .describe("Title component, including main title and subtitle.");

export default TitleSchema;
