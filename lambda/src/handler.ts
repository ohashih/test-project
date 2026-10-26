import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from "aws-lambda";
import { buildGreeting } from "./greeting";

export const handler = async (
  event: APIGatewayProxyEventV2,
): Promise<APIGatewayProxyResultV2> => {
  const greeting = buildGreeting(event.queryStringParameters?.name);

  return {
    statusCode: 200,
    headers: { "content-type": "application/json" },
    body: JSON.stringify(greeting),
  };
};
