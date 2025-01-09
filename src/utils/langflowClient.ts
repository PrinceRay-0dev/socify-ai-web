export class LangflowClient {
  private baseURL: string;
  private applicationToken: string;

  constructor(baseURL: string, applicationToken: string) {
    this.baseURL = baseURL;
    this.applicationToken = applicationToken;
  }

  async post(endpoint: string, body: any, headers: Record<string, string> = {}) {
    headers["Authorization"] = `Bearer ${this.applicationToken}`;
    headers["Content-Type"] = "application/json";
    const url = `${this.baseURL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      });

      const responseMessage = await response.json();
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText} - ${JSON.stringify(responseMessage)}`);
      }
      return responseMessage;
    } catch (error) {
      console.error('Request Error:', error);
      throw error;
    }
  }

  async search(query: string) {
    const flowIdOrName = '7072f39a-29cd-4acf-9caa-7429c5dea8a5';
    const langflowId = 'c040830b-5141-4a4b-98bc-d61642bf121d';
    
    const tweaks = {
      "ChatInput-ROJ4d": {},
      "ChatOutput-xRIlr": {},
      "Prompt-FxvPP": {},
      "ParseData-tC5KA": {},
      "File-2hGby": {},
      "SplitText-IGvwp": {},
      "AstraDB-sqBtI": {},
      "AstraDB-jgDfJ": {},
      "OpenAIModel-3NvFn": {},
      "GroqModel-rLPr9": {}
    };

    const endpoint = `/lf/${langflowId}/api/v1/run/${flowIdOrName}`;
    
    try {
      const response = await this.post(endpoint, {
        input_value: query,
        input_type: 'chat',
        output_type: 'chat',
        tweaks: tweaks
      });

      if (response && response.outputs) {
        const output = response.outputs[0].outputs[0].outputs.message;
        return output.message.text;
      }
      return null;
    } catch (error) {
      console.error('Search Error:', error);
      throw error;
    }
  }
}

export const langflowClient = new LangflowClient(
  'https://api.langflow.astra.datastax.com',
  process.env.VITE_LANGFLOW_TOKEN || ''
);