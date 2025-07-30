# ECharts MCP Server  ![](https://badge.mcpx.dev?type=server 'MCP Server')  [![build](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml/badge.svg)](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart) [![smithery badge](https://smithery.ai/badge/@antvis/mcp-server-chart)](https://smithery.ai/server/@antvis/mcp-server-chart) [![npm License](https://img.shields.io/npm/l/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart)

A Model Context Protocol server for generating charts using [ECharts](https://echarts.apache.org/) inspired by [AntV](https://www.npmjs.com/package/@antv/mcp-server-chart).

This is a TypeScript-based MCP server that provides chart generation capabilities. It allows you to create various types of charts through MCP tools. You can also use it in [Dify](https://marketplace.dify.ai/plugins/antv/visualization).


## ✨ Features

Nearly all types of chart supported.
Each tool will return a chart preview URL which is the echarts official chart preview page.

For example: 
https://echarts.apache.org/examples/zh/editor.html?_source=echarts-doc-preview&code=FAAhHsAcBcEtwHYgLwgN6hAIjtANgKZYBc6mYOBAHtCdoLRygv2qAgKoIDugRumD3noGBKgwHpYAactgDOAVwBG0arVJZAqsqBZeUBY_4HA5QM56gTtNANoqAZxMHCshAGazsAYwIJpAJyyYAvkIqEA5lYAmdDGAoeAhtD-dADawhSADaaAYa4Gvr5YgP6RgPOhsXHYgKGKgJkhgCfKqXFYgErpgO62efGA22qAu7qlFICLeYCZ-YD6NtXYgBiugMEBzViAiXKA6sqdgP56CZ2AanZ9zmlYgKppQ-P5gM02gOjKnYCQKoDp5iNLs_GArLGAe7qdDTPh2P2AOHKdgPGegF96nYCOOudbFLdHadiAkdqAvfqdc2PHWA2AeaDOoBNWyaj2wRV-rywgAflQB-dp1ALOJgDC9ToLQA1cp1AJSagFJbTqAKDkSuCsIBMzMA9HadQDN9oAL1PscQAulssBJwNBoOAALZ0ACMAAZHOMsFQAIJUWAiUKMzBYACeovFksF7PAeDgkG8hhEAAtwAB3OjQGxiAhM6AyyBEOSwaRcgXS5V4FlUDX5bV6g1Gk2GYwEQJiGyWsjQkT-ABuBGFIgAkhz_O5vA5hImwE5pSICDZYAQJaQwnEfBMzRa6FhIFnOgh_BzA1guJ08P4JAQ8C7XqIdfrSIbjeCKOYVeA7HIAMS8sfNCiQcAia3wBAl8BiaAzjxEXvYYyD2NsjMltASBykNDmByqADWHIATSAABRoDwOACkAEo6WlU9CAkFQscwAW29glbViW0QTvEob-Hgxo8gAbDBv4gB-bb_m2WBATWyRgRQEFQYG3IAEz4QAdAAHAhSGvCh0LoSWWS5Ou2GQdBpDctyJFEQAzOR65URMNFyMUWHYDhzEgAA7MR3LcQhvH5Px2CVEJWAiYGAAs7HwQBFFpLJ8TyVg9RgghjG4XQqliZx0kAbpFD6e0SkqWZxGaW22n5sZgFVjWvQOUxgYcQAnERqlWchHloV5JaDL5pmkPhHFEWJoWUeF-mjDFon4dyRH4clOmpZFcjTBlgb4byREAKx5e5AG2YV2CLCVPLsWRWk8QVwFyGsTUsexSVtTJHU1sMmzhY5vVES5rxub4NmeZ12B7D1IDchZU3vu1tXzTWhzLdyMGJdVs1DVFDxjX5PIWQFR1_idcjXHtkk3UGtURQtWD3HtFWHQN1l3dgzxfZNz1zW9NafHtIW_WFW1gyWPx7Qd_WuZtr36YCe3lcj02owBcNyKCmM5SD_1YJCy0JRVUMo4NsP6fCFPA9DKV0_VWAost7H4dTOO02jbMYntk08xtfN4_puJC9y13M_lrPvYSy3lTBXGyzV_PveSStEaxJPyzWNLa7yquucc9JJpg5vJiAQA

- `generate_bar_chart` - Generate a `bar` chart.
- `generate_line_chart` - Generate a `line` chart.
- `generate_pie_chart` - Generate a `pie` chart.
- `generate_scatter_chart` - Generate a `scatter` chart.
- `generate_heatmap_chart` - Generate a `heatmap` chart.
- `generate_general_chart` - Generate a `effectScatter, tree, treemap, sunburst, boxplot, candlestick, graph, sankey, funnel, gauge or themeRiver` chart.


## 🤖 Usage

To use with `Desktop APP`, such as Claude, VSCode, [Cline](https://cline.bot/mcp-marketplace), Cherry Studio, Cursor, and so on, add the MCP server config below.

```json
{
  "mcpServers": {
    "echarts-server": {
      "command": "node",
      "args": [
        "your-path/echarts-mcp-server/build/index.js"
      ]
    }
  }
}
```

Or

```json
{
  "mcpServers": {
    "echarts-server": {
      "command": "npx",
      "args": [
        "-y",
        "echarts-mcp-server"
      ]
    }
  }
}
```

Also, you can use it on [aliyun](https://bailian.console.aliyun.com/?tab=mcp#/mcp-market/detail/antv-visualization-chart), [modelscope](https://www.modelscope.cn/mcp/servers/@antvis/mcp-server-chart), [glama.ai](https://glama.ai/mcp/servers/@antvis/mcp-server-chart), [smithery.ai](https://smithery.ai/server/@antvis/mcp-server-chart) or others with HTTP, SSE Protocol.


## 🚰 Run with SSE or Streamable transport

Install the package globally.

```bash
npm install -g echarts-mcp-server
```

Run the server with your preferred transport option:

```bash
# For SSE transport (default endpoint: /sse)
echarts-mcp-server --transport sse

# For Streamable transport with custom endpoint
echarts-mcp-server --transport streamable
```

Then you can access the server at:
- SSE transport: `http://localhost:1122/sse`
- Streamable transport: `http://localhost:1122/mcp`


## 🎮 CLI Options

You can also use the following CLI options when running the MCP server. Command options by run cli with `-h`.

```plain
MCP Server Chart CLI

Options:
  --transport, -t  Specify the transport protocol: "stdio", "sse", or "streamable" (default: "stdio")
  --port, -p       Specify the port for SSE or streamable transport (default: 1122)
  --endpoint, -e   Specify the endpoint for the transport:
                   - For SSE: default is "/sse"
                   - For streamable: default is "/mcp"
  --help, -h       Show this help message
```


## 🔨 Development

Install dependencies:

```bash
npm install
```

Build the server:

```bash
npm run build
```

Start the MCP server:

```bash
npm run start
```
