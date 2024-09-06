import json

from fastapi import APIRouter

from app.models.problems_response import Problem, ProblemsResponse
from app.models.create_problems_request import CreateProblemsRequest
# from app.models.info import Info
from app.services.question_maker import question_generation
import logging

router = APIRouter()
logger = logging.getLogger("uvicorn")


@router.post("/problems")
async def get_question(request: CreateProblemsRequest) -> ProblemsResponse:

    note = request.note
    logger.info("get_question start")
    logger.info(f"note : {note}")

    problems = json.loads(question_generation(note))
    logger.info(f"problems : {problems}")

    response = ProblemsResponse(
        count=len(problems),
        problems=[Problem(**p) for p in problems]
    )
    logger.info(f"response : {response}")

    return response
