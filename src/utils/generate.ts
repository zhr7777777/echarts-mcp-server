import { compressToBase64 } from "lz-string";

const BASE_URL =
  "https://echarts.apache.org/examples/zh/editor.html?_source=echarts-doc-preview&code=";

const base64ToUrlSafeBase64 = (str: string) =>
  str.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

/**
 * Generate a chart URL using the provided configuration.
 * @param type The type of chart to generate
 * @param options Chart options
 * @returns {Promise<string>} The generated chart URL.
 * @throws {Error} If the chart generation fails.
 */
export async function generateChartUrl(
  // type: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  options: Record<string, any>,
): Promise<string> {
  const code = `
  option = ${JSON.stringify(options, null, 2)}
  `;

  const base64 = compressToBase64(code);

  const urlSafeBase64 = base64ToUrlSafeBase64(base64);

  return `${BASE_URL}${urlSafeBase64}`;
}
