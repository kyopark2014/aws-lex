# AWS Lex

## Basic

AWS Lex는 AI Service로 분류되고, "Conversational AI for Voice and Text Interfaces"로 정의 됩니다. 음성과 텍스트 인터페이스로 대화하는 AI로 번역될것 같습니다.

<img src="https://user-images.githubusercontent.com/52392004/218343904-386e6061-3882-4765-81a5-9ef7237628bd.png" width="800">


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

## AWS integrations: reference architecture

기본적인 Architecture는 아래와 같습니다.

<img src="https://user-images.githubusercontent.com/52392004/218344298-4a8e518f-de4c-4c63-871d-7ac2c09ccf42.png" width="900">


## 동작방식 - Book a hotel

디바이스에서 동작은 아래와 같습니다.

![image](https://user-images.githubusercontent.com/52392004/218344560-98e27768-5ce8-450d-9deb-3f44540bf46e.png)

이를 위해 내부에서 동작은 아래와 같습니다.

![image](https://user-images.githubusercontent.com/52392004/218344659-25cfab14-4227-4b49-9762-9afe735bb23e.png)

- Add utterances

![image](https://user-images.githubusercontent.com/52392004/218344826-995407ac-006a-4e8d-9601-da943be2a9c1.png)

- Add slot values

![image](https://user-images.githubusercontent.com/52392004/218344845-da6b908f-c61f-4c11-8673-c739320ff8f6.png)


## Reference

[AWS Samples - Sample Amazon Lex Web Interface](https://github.com/aws-samples/aws-lex-web-ui)
