# Lex 기본


- AWS Lex는 애플리케이션에 대화형 인터페이스를 구축하는 서비스입니다.

- Amazon Lex는 대화형 인터페이스를 애플리케이션에 설계, 구축, 테스트, 배포하기 위해 고급 자연어 모델을 사용하는 완전관리형 인공 지능(AI) 서비스입니다. Amazon Lex 챗봇은 연속적인 대화를 주고받을 수 있는 기능을 제공합니다. 의도가 파악되면 해당 의도를 이행하는 데 필요한 정보가 사용자에게 표시됩니다. 

- AWS Lex는 AI Service로 분류되고, "Conversational AI for Voice and Text Interfaces"로 정의 됩니다. 음성과 텍스트 인터페이스로 대화하는 AI로 번역될것 같습니다.

<img src="https://user-images.githubusercontent.com/52392004/218343904-386e6061-3882-4765-81a5-9ef7237628bd.png" width="800">

- 의도(Intent) - 사용자가 수행하려는 작업입니다. 이를 통해 봇은 사용자가 수행하려는 작업을 이해하고 분류할 수 있습니다. 단일 봇은 여러 개의 다른 의도를 포함할 수 있으므로 하나의 봇이 사용자의 서로 다르지만 가장 유사한 관련 요청을 처리할 수 있습니다.
- 표현(Utterance) - 의도를 트리거하기 위해 사용자가 입력하거나 말해야 하는 내용의 텍스트 표현입니다. 하나의 인텐트에는 다양한 발언이 포함될 수 있으므로 사용자가 다양한 구문을 사용하여 봇을 트리거하고 발언과 함께 다양한 데이터 매개변수(또는 "슬롯")를 제공할 수 있습니다.
- 프롬프트(Prompt) - Lex는 은행 계좌 번호나 항공편 예약 날짜를 요청할 때와 같이 대화의 여러 단계에 대해 다른 프롬프트를 정의할 수 있습니다. 또한 Lambda 함수에 의해 런타임에 재정의될 수 있습니다.
- 슬롯(Slot) - 봇이 작업을 수행하기 위해 필요한 데이터 항목입니다. 예를 들어 항공편 예약 의도의 경우 출발지 공항, 도착지 공항, 비행 날짜, 비행 시간 및 예약 클래스에 대한 슬롯이 필요할 수 있습니다. Lex에는 많은 내장 슬롯 유형이 있지만 사용 사례에 맞게 사용자 정의 슬롯 유형을 자유롭게 생성할 수 있습니다.
- 이행(Fulfillment) - 종료 메시지와 사용자에 대한 몇 가지 추가 정보가 있는 봇의 최종 출력 메세지 입니다. 예를 들어 항공편 예약의 경우 이행에는 사용자가 예약한 경로 및 항공편 번호에 대한 간략한 요약과 함께 항공편이 예약되었음을 확인할 수 있는 메시지가 출력됩니다.

AWS에서 제공하는 Lex는 아래와 같은 가치를 줄수 있다록 합니다.

- High-quality text and speech natural language understanding
- Easy to use—fully managed AI service on AWS platform
- Seamlessly deploy across channels and scale!
- Natively integrate with AWS services: Amazon Connect, Amazon Kendra, AWS Lambda

Key Feature는 아래와 같습니다.

- Natural conversations: High quality ASR and NLU, context management, multi‑turn dialog
- Builder productivity tools: One-click deployment, Bot lifecycle management tools, V2 console and API, streaming API
- AWS Service integrations: Natively integrate with Amazon Polly, Amazon Kendra, AWS Lambda 
- Contact center integrations: Integrations with Amazon Connect, Genesys, 8x8

Natural conversations 
- High quality speech recognition: Accurate automatic speech recognition that quickly transcribes speech to text in multiple languages. Supports 8kHz telephony audio.
- Multi-language natural language understanding: Based on the same proven technology that powers Alexa, Lex analyzes what users are saying to identify the request/intent and how to answer the request across multiple languages.
- Multi-turn dialog: Amazon Lex gives you an easy way to build multi-turn conversation and manage context natively without the need for custom code. 
- Fulfillment: Amazon Lex applies business logic to identify how to fulfill user requests and which systems to work with to retrieve information or complete a task.
