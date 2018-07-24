import { APIGatewayEvent, Callback, Context, Handler } from 'aws-lambda';

export const marketcap: Handler = (event: APIGatewayEvent, context: Context, cb: Callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless marketcap (Typescript) v1.0! Your function executed successfully!',
      input: event
    }),
    isBase64Encoded: false
  };

  cb(null, response);
};
