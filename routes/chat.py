from fastapi import APIRouter
from app.models.schemas import ChatRequest
from app.services.openai_service import get_ai_response

router = APIRouter()

@router.post("/")
async def chat(request: ChatRequest):
    response = get_ai_response(request.message)
    return {"response": response}
