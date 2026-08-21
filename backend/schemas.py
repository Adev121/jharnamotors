from pydantic import BaseModel
from pydantic import EmailStr


class EnquiryCreate(BaseModel):
    full_name: str
    email: EmailStr
    phone: str
    location: str
    query: str


class ChatRequest(BaseModel):
    message: str

class VisitorCreate(BaseModel):
    page: str

class AdminLogin(BaseModel):
    username: str
    password: str