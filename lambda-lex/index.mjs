
//import { LexRuntimeV2Client, RecognizeText } from "@aws-sdk/client-lex-runtime-v2"; 
//const { LexRuntimeV2Client, DeleteSessionCommand, RecognizeText } = require("@aws-sdk/client-lex-runtime-v2");
/// import { LexRuntimeV2Client, recognizeText, PostContent, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-v2"; 
import { LexRuntimeV2Client, RecognizeTextCommand} from "@aws-sdk/client-lex-runtime-v2"; 

export const handler = async (event) => {  
    console.log('## ENVIRONMENT VARIABLES: ' + JSON.stringify(process.env));
    console.log('## EVENT: ' + JSON.stringify(event));

    let isCompleted = false;    
    let response;
    

    var lexParams = {
        // botName: process.env.BOT_NAME,  // HelloBot
        // botName: "TelecomMobileBot",  // HelloBot
        
        // botAlias: process.env.BOT_ALIAS,        // TestBotAlias
        // botAlias: "TestBotAlias",        // TestBotAlias
        // inputText: "I want to make a payment",        
        // userId: "mychatbot",  // userId: "chatbot", // For example, 'chatbot-demo'.
        
        botAliasId: "TSTALIASID",
        botId: "OLL2GYMJSN",
        localeId: "en_US",
        text: "I want to make a payment",
        sessionId: "mysession-01",
    };
    
        // const lexClient = new LexRuntimeServiceClient();
    //const lexClient = new LexRuntimeV2Client({ region: "ap-northease-2" });
    const lexClient = new LexRuntimeV2Client();
    // const command = new DeleteSessionCommand(lexParams);
    //const command = new PostContent(lexParams);
    const command = new RecognizeTextCommand(lexParams);

    
    try {
        const data = await lexClient.send(command);
        console.log("Success. Response is: ", data);
        isCompleted = true;
        
        response = {
          statusCode: 200,
        };
      } catch (err) {
        console.log("Error responding to message. ", err);
        isCompleted = true;
        
        response = {
          statusCode: 500,
          body: JSON.stringify(err),
        };
    }

    function wait(){
        return new Promise((resolve, reject) => {
            if(!isCompleted) {
                setTimeout(() => resolve("wait..."), 1000)
            }
            else {
                setTimeout(() => resolve("closing..."), 0)
            }
        });
    }
    console.log(await wait());
    console.log(await wait());
    console.log(await wait());
    console.log(await wait()); 
    response = {
        statusCode: 200,
    }
    return response;
}