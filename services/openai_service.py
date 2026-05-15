import openai
import os

openai.api_key = os.getenv("OPENAI_API_KEY")

def get_ai_response(message: str):
    response = openai.ChatCompletion.create(
        model="gpt-4o-mini",
        messages=[{"role": "user", "content": message}]
    )
    return response.choices[0].message["content"]
