from flask import Flask, request,jsonify
from flask_socketio import SocketIO,emit
from flask_cors import CORS
from model.src import head_pose 

temp = 0
app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
CORS(app,resources={r"/*":{"origins":"*"}})
socketio = SocketIO(app,cors_allowed_origins="*")

def get_global():
    return temp
@app.route("/http-call")
def http_call():
    """return JSON with string data as the value"""
    pass
    # data = {'data':'This text was fetched using an HTTP call to server on render'}
    # return jsonify(data)

@socketio.on("connect")
def connected():
    """event listener when client connects to the server"""
    print("client has connected")
    

@socketio.on('data')
def handle_message(data):
    """event listener when client types a message"""
    head_pose.pose()

@socketio.on('stop')
def handle_message(data):
    """event listener when client types a message"""
    global temp
    if(data=="1"):
        exit()
    # disconnected()
    print(get_global())
    print("data from the front end: ",str(data))
   
    
    # head_pose.pose()
    # disconnected()
    # pass
    # emit("data",{'data':data,'id':request.sid},broadcast=True)

@socketio.on("disconnected")
def disconnected():
    """event listener when client disconnects to the server"""
    # emit("disconnect", "disconnected",broadcast=True)
    # global temp
    # temp=1
    # pass

    
    print("user disconnected")
    
    # emit("disconnect",f"user {request.sid} disconnected",broadcast=True)


if __name__ == '__main__':
    # global temp
    # temp=0
    socketio.run(app, debug=True,port=5001)