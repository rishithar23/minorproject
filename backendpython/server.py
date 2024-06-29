from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from motor.motor_asyncio import AsyncIOMotorClient
from typing import Optional

app = FastAPI()

# MongoDB connection
client = AsyncIOMotorClient("mongodb+srv://rishitha23:rishitha23@cluster0.zhcukbz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
db = client.MinorProject
students_collection = db.Students

class User(BaseModel):
    email: str
    password: str

class UsernameRequest(BaseModel):
    email: str


class AssignmentUpdateRequest(BaseModel):
    student_id: int
    submitted: bool

@app.post("/login")
async def login(user: User):
    document = await students_collection.find_one({"email": user.email})
    if document and document["password"] == user.password:
        return {"message": document["role"]}
    raise HTTPException(status_code=401, detail="Invalid email or password")

@app.post("/profile")
async def get_profile(request: UsernameRequest):
    document = await students_collection.find_one({"email": request.email})
    if document:
        return {
            "name": document["name"],
            "roll_no": document["roll_no"],
            "year": document["year"],
            "section": document["section"],
            "dept": document["dept"],
            "email": document["email"],
        }
    raise HTTPException(status_code=404, detail="User not found")


class EmailRequest(BaseModel):
    email: str

@app.post("/grades")
async def get_grades(request: EmailRequest):
    document = await students_collection.find_one({"email": request.email})
    if document:
        return {
            "DAA": document["DAA"],
            "DBMS": document["DBMS"],
            "JAVA": document["JAVA"],
            "ACD": document["ACD"], 
        }
    raise HTTPException(status_code=404, detail="Student not found")


@app.post("/attendance")
async def get_attendance(request: EmailRequest):
    document = await students_collection.find_one({"email": request.email})
    if document:
        return {
            "attendance": document["attendance"],
        }
    raise HTTPException(status_code=404, detail="Student not found")


@app.put("/assignments/update")
async def update_assignment_status(request: AssignmentUpdateRequest):
    student_id = request.student_id
    submitted = request.submitted

    # Update student's assignment submission status in MongoDB
    result = await students_collection.update_one(
        {"_id": student_id},
        {"$set": {"sub_status": submitted}},
    )

    if result.modified_count == 1:
        return {"message": f"Assignment status updated for student with ID {student_id}"}
    else:
        raise HTTPException(status_code=404, detail=f"Student with ID {student_id} not found")
    
class Student(BaseModel):
    email: str

@app.post("/assignments/sub_status")
async def get_sub_status(student: Student):
    try:
        student_data = await students_collection.find_one({"email": student.email})
        if not student_data:
            raise HTTPException(status_code=404, detail="Student not found")

        return {"sub_status": student_data["sub_status"]}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch sub_status: {str(e)}")