import type { HandlerContext } from '../types.js';
import { buildToolResult } from '../response-builder.js';
import type { ToolRegistration } from '../types.js';

const definition = {
  name: 'ssh_list_servers',
  description:
    'List all available SSH servers configured in config file with their connection details. ' +
    'This helps discover what servers are available for SSH operations.',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

const handler = async (_args: any, context: HandlerContext) => {
  const servers = context.configManager.listServers();

  return buildToolResult({
    success: true,
    servers: servers,
    count: servers.length,
  });
};

export const listServers = <ToolRegistration>{
  definition,
  handler,
};
