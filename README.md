# AWS Lex

## Basic

- AWS Lex는 애플리케이션에 대화형 인터페이스를 구축하는 서비스입니다.

- Amazon Lex는 대화형 인터페이스를 애플리케이션에 설계, 구축, 테스트, 배포하기 위해 고급 자연어 모델을 사용하는 완전관리형 인공 지능(AI) 서비스입니다. Amazon Lex 챗봇은 연속적인 대화를 주고받을 수 있는 기능을 제공합니다. 의도가 파악되면 해당 의도를 이행하는 데 필요한 정보가 사용자에게 표시됩니다. 

- AWS Lex는 AI Service로 분류되고, "Conversational AI for Voice and Text Interfaces"로 정의 됩니다. 음성과 텍스트 인터페이스로 대화하는 AI로 번역될것 같습니다.

<img src="https://user-images.githubusercontent.com/52392004/218343904-386e6061-3882-4765-81a5-9ef7237628bd.png" width="800">

- 의도(Intent) - 사용자가 수행하려는 작업입니다. 이를 통해 봇은 사용자가 수행하려는 작업을 이해하고 분류할 수 있습니다. 단일 봇은 여러 개의 다른 의도를 포함할 수 있으므로 하나의 봇이 사용자의 서로 다르지만 가장 유사한 관련 요청을 처리할 수 있습니다.
- 표현(Utterance) - 의도를 트리거하기 위해 사용자가 입력하거나 말해야 하는 내용의 텍스트 표현입니다. 하나의 인텐트에는 다양한 발언이 포함될 수 있으므로 사용자가 다양한 구문을 사용하여 봇을 트리거하고 발언과 함께 다양한 데이터 매개변수(또는 "슬롯")를 제공할 수 있습니다.
- 프롬프트(Prompt) - Lex는 은행 계좌 번호나 항공편 예약 날짜를 요청할 때와 같이 대화의 여러 단계에 대해 다른 프롬프트를 정의할 수 있습니다. 또한 Lambda 함수에 의해 런타임에 재정의될 수 있습니다.
- 슬롯(Slot) - 봇이 작업을 수행하기 위해 필요한 데이터 항목입니다. 예를 들어 항공편 예약 의도의 경우 출발지 공항, 도착지 공항, 비행 날짜, 비행 시간 및 예약 클래스에 대한 슬롯이 필요할 수 있습니다. Lex에는 많은 내장 슬롯 유형이 있지만 사용 사례에 맞게 사용자 정의 슬롯 유형을 자유롭게 생성할 수 있습니다.
- 이행(Fulfillment) - 종료 메시지와 사용자에 대한 몇 가지 추가 정보가 있는 봇의 최종 출력 메세지 입니다. 예를 들어 항공편 예약의 경우 이행에는 사용자가 예약한 경로 및 항공편 번호에 대한 간략한 요약과 함께 항공편이 예약되었음을 확인할 수 있는 메시지가 출력됩니다.


## Operation

### 메시지 전송

사용자의 입력은 RecognizeText을 통해 Lex V2로 전송합니다.

[RecognizeText](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_runtime_RecognizeText.html)


- botAliasId: The alias identifier in use for the bot that processes the request, Required: Yes

- botId: The identifier of the bot that processes the request, Length Constraints: Fixed length of 10, Pattern: ^[0-9a-zA-Z]+$

- localeId: [Languages and locales supported by Amazon Lex V2](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)와 같이 "en_US"은 English (US)이고, ko_KR은 "Korean (Korea)"입니다.


- sessionId: The identifier of the user session that is having the conversation, Length Constraints: Minimum length of 2. Maximum length of 100, Pattern: [0-9a-zA-Z._:-]+


### AWS integrations

[integrations](https://github.com/kyopark2014/aws-lex/blob/main/integrations.md)와 같이 다른 메신저와 연동할 수 있습니다. 


### Bot 동작

[GetSession](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_GetSession.html)

[Bot Script](https://github.com/kyopark2014/aws-lex/blob/main/bot-script.md)관련 상세 동작에 대해 설명합니다. (작성중)



## Reference

[Amazon Lex Workshops](https://catalog.us-east-1.prod.workshops.aws/workshops/94f60d43-15b7-45f4-bbbc-17889ae64ea0/en-US)

[AWS Samples - Sample Amazon Lex Web Interface](https://github.com/aws-samples/aws-lex-web-ui)

[Languages and locales supported by Amazon Lex V2](https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html)


[Amazon LEX](https://github.com/rashimparmar/AWS-LEX)

[Amazon Lex 한국어 챗봇 빌드 워크숍](https://github.com/aws-samples/aws-ai-ml-workshop-kr/blob/master/aiservices/lex-korean-workshop/README.md)

[What is Amazon Lex V2?](https://docs.aws.amazon.com/lexv2/latest/dg/what-is.html)

[브라우저 스크립트 생성](https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v3/developer-guide/lex-bot-example-script.html)

[Integrating Amazon Connect and Amazon Lex with Third-party Systems](https://aws.amazon.com/ko/blogs/architecture/integrating-amazon-connect-and-amazon-lex-with-third-party-systems/)

[Integrate Your Amazon Lex Bot with Any Messaging Service](https://aws.amazon.com/ko/blogs/machine-learning/integrate-your-amazon-lex-bot-with-any-messaging-service/)

[Lex Runtime Service Client - AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-runtime-service/index.html) <--- V1, 한국은 Endpoint 미지원

[Lex Runtime V2 Client - AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-lex-runtime-v2/index.html)

[AWS Docs - how to build and deploy an Amazon Lex chatbot](https://github.com/awsdocs/aws-doc-sdk-examples/blob/main/javascriptv3/example_code/cross-services/lex-bot/src/index.js)

[Create the browser script](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/lex-bot-example-script.html)

[Amazon Lex Runtime V2](https://docs.aws.amazon.com/lexv2/latest/APIReference/API_Operations_Amazon_Lex_Runtime_V2.html)

[Amazon Lex V2 API Reference](https://docs.aws.amazon.com/lexv2/latest/APIReference/welcome.html)

[Amazon Lex Introduces an Enhanced Console Experience and New V2 APIs](https://aws.amazon.com/ko/blogs/aws/amazon-lex-enhanced-console-experience/)

[Deploying an Amazon Lex Bot on a Messaging Platform](https://docs.aws.amazon.com/lex/latest/dg/example1.html)

[Amazon Lex V2의 Dialog Action을 통해 챗봇에 다양한 비지니스 로직 구현하기](https://aws.amazon.com/ko/blogs/korea/amazon-lex-dialog-action/)

[AmazonLexRuntimeV2Client](https://docs.aws.amazon.com/sdkfornet/v3/apidocs/items/LexRuntimeV2/TLexRuntimeV2Client.html)
