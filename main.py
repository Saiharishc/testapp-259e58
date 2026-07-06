from fastapi import FastAPI

app = FastAPI()

@app.get("/test")
def test_endpoint():
    return {"message": "API is running!"}

@app.get("/test/{message}")
def echo_message(message: str):
    return {"message": message}
