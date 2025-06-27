# ECharts MCP Server  ![](https://badge.mcpx.dev?type=server 'MCP Server')  [![build](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml/badge.svg)](https://github.com/antvis/mcp-server-chart/actions/workflows/build.yml) [![npm Version](https://img.shields.io/npm/v/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart) [![smithery badge](https://smithery.ai/badge/@antvis/mcp-server-chart)](https://smithery.ai/server/@antvis/mcp-server-chart) [![npm License](https://img.shields.io/npm/l/@antv/mcp-server-chart.svg)](https://www.npmjs.com/package/@antv/mcp-server-chart)

A Model Context Protocol server for generating charts using [ECharts](https://echarts.apache.org/) inspired by [AntV](https://www.npmjs.com/package/@antv/mcp-server-chart).

This is a TypeScript-based MCP server that provides chart generation capabilities. It allows you to create various types of charts through MCP tools. You can also use it in [Dify](https://marketplace.dify.ai/plugins/antv/visualization).


## ✨ Features

Now 3 charts supported.

- `generate_bar_chart` - Generate a `bar` chart, and return an chart preview URL.
- `generate_line_chart` - Generate a `line` chart, and return an chart preview URL.
- `generate_pie_chart` - Generate a `pie` chart, and return an chart preview URL.

More options and charts support coming soon...

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
