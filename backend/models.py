from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text
from sqlalchemy import DateTime
from sqlalchemy.sql import func

from database import Base


class Enquiry(Base):

    __tablename__ = "enquiries"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    full_name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(150),
        nullable=False
    )

    phone = Column(
        String(20),
        nullable=False
    )

    location = Column(
        String(150),
        nullable=False
    )

    query = Column(
        Text,
        nullable=False
    )

    created_at = Column(
        DateTime(timezone=True),
        server_default=func.now()
    )



class Visitor(Base):

    __tablename__ = "visitors"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    page = Column(String)

    created_at = Column(
        DateTime,
        server_default=func.now()
    )