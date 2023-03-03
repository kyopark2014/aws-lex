
import { LexRuntimeV2Client, RecognizeTextCommand} from "@aws-sdk/client-lex-runtime-v2"; 

export const handler = async (event) => {  
    console.log('## ENVIRONMENT VARIABLES: ' + JSON.stringify(process.env));
    console.log('## EVENT: ' + JSON.stringify(event));

    var lexParams = {        
        botAliasId: "TSTALIASID", // botAliasId: process.envbotAliasId.
        botId: "OLL2GYMJSN",
        localeId: "en_US",
        text: "I want to make a payment",
        sessionId: "mysession-01",
    };
    
    const lexClient = new LexRuntimeV2Client();
    const command = new RecognizeTextCommand(lexParams);
    try {
        const data = await lexClient.send(command);
        console.log("response: ", data['messages']);
        
        const messages = data['messages'][0];
        console.log('text: ', messages.content);

        return {
          statusCode: 200,
          body: messages.content,
        };
      } catch (err) {
        console.log("Error responding to message. ", err);

        return {
          statusCode: 500,
          body: JSON.stringify(err),          
        };
    }
}