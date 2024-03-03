const {username,password} = process.env
export const connectionStr="mongodb+srv://"+username+":"+password+"@cluster0.bqag9b5.mongodb.net/restoDB?retryWrites=true&w=majority&appName=Cluster0"