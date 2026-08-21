from fastapi import FastAPI
from fastapi import Depends
from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session

import models
import schemas

from database import engine
from database import get_db


models.Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="JHARNA Motor Training School API"
)


# Allow frontend to communicate with backend

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


# ==========================
# HOME API
# ==========================

@app.get("/")
def home():

    return {
        "message": "JHARNA Motor Training School API is running"
    }


# ==========================
# SAVE ENQUIRY
# ==========================

@app.post("/enquiry")
def create_enquiry(

    enquiry: schemas.EnquiryCreate,

    db: Session = Depends(get_db)

):

    new_enquiry = models.Enquiry(

        full_name=enquiry.full_name,

        email=enquiry.email,

        phone=enquiry.phone,

        location=enquiry.location,

        query=enquiry.query

    )


    db.add(new_enquiry)

    db.commit()

    db.refresh(new_enquiry)


    return {

        "success": True,

        "message":
        "Your enquiry has been submitted successfully."

    }


# ==========================
# CHATBOT
# ==========================

@app.post("/api/chat")
def chatbot(request: schemas.ChatRequest):

    message = request.message.lower()


    if (
        "fee" in message
        or "price" in message
        or "cost" in message
        or "registration" in message
    ):

        answer = (
            "For the latest registration and training fee, "
            "please contact JHARNA Motor Training School or "
            "submit an enquiry."
        )


    elif (
        "join" in message
        or "register" in message
        or "admission" in message
    ):

        answer = (
            "You can join by filling out the registration "
            "form on our website."
        )


    elif (
        "beginner" in message
        or "experience" in message
    ):

        answer = (
            "Yes! Beginners can join our driving training "
            "program and learn from the basics."
        )


    elif (
        "location" in message
        or "address" in message
        or "where" in message
    ):

        answer = (
            "Please check the Contact section for our "
            "school location and contact details."
        )


    elif (
        "document" in message
        or "documents" in message
    ):

        answer = (
            "Please contact the school for the latest list "
            "of documents required for registration."
        )


    elif (
        "timing" in message
        or "schedule" in message
        or "time" in message
    ):

        answer = (
            "Training schedules may vary. Please contact "
            "the school for the latest timings."
        )


    else:

        answer = (
            "I can help you with questions about JHARNA "
            "Motor Training School, including registration, "
            "fees, training, timings, documents, and location."
        )


    return {

        "answer": answer

    }