from fastapi import FastAPI,HTTPException
from fastapi import Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
import models
import schemas

from database import engine
from database import get_db

import os
from dotenv import load_dotenv
from jose import jwt,JWTError
from datetime import datetime, timedelta
from fastapi.security import HTTPBearer



security = HTTPBearer()

models.Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="JHARNA Motor Training School API"
)

load_dotenv()

ADMIN_USERNAME = os.getenv("ADMIN_USERNAME")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD")

SECRET_KEY = os.getenv("SECRET_KEY")

ALGORITHM = "HS256"


def get_current_admin(credentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM]
        )
        username = payload.get("sub")
        if username != ADMIN_USERNAME:
            raise HTTPException(
                status_code=401,
                detail="Invalid authentication"
            )
        return username
    except JWTError:
        raise HTTPException(
            status_code=401,
            detail="Invalid or expired token"
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

# Get all enquiries
@app.get("/enquiries")
def get_enquiries(db: Session = Depends(get_db),
                  current_admin: str = Depends(get_current_admin)):

    enquiries = (
        db.query(models.Enquiry)
        .order_by(models.Enquiry.id.desc())
        .all()
    )

    return enquiries

# Stats

@app.get("/dashboard/stats")
def dashboard_stats(
    db: Session = Depends(get_db),
    current_admin: str = Depends(get_current_admin)
):

    total_enquiries = db.query(models.Enquiry).count()
    total_visitors = db.query(models.Visitor).count()

    return {
        "total_enquiries": total_enquiries,
        "total_visitors": total_visitors
    }

# charts
@app.post("/track-visit")
def track_visit(
    visitor: schemas.VisitorCreate,
    db: Session = Depends(get_db)
):
    new_visitor = models.Visitor(
        page=visitor.page
    )
    db.add(new_visitor)
    db.commit()
    return {
        "success": True
    }

# LOGIN LOGIC
@app.post("/admin")
def admin_login(admin: schemas.AdminLogin):

    if (
        admin.username != ADMIN_USERNAME
        or admin.password != ADMIN_PASSWORD
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password"
        )

    expire = datetime.utcnow() + timedelta(hours=8)

    token_data = {
        "sub": ADMIN_USERNAME,
        "exp": expire
    }

    token = jwt.encode(
        token_data,
        SECRET_KEY,
        algorithm=ALGORITHM
    )

    return {
        "success": True,
        "access_token": token,
        "token_type": "bearer"
    }

# ==========================
# CHATBOT
# ==========================

@app.post("/chat")
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