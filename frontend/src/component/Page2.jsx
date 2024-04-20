import React from "react";
import Button from "@mui/material/Button";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import Stack from "@mui/material/Stack";
import { socket } from "./Home";
const Page2 = () => {
  const handleClick = ()=>{
    console.log("click")
    socket.emit('stop','1')
    // socket.on("disconnect", (data) => {
    //   console.log(data);
    //   socket.disconnect();
    // });

    
  }
  return (
    <div className="container  flex   bg-cyan-200 h-80 mt-4 shadow-2xl shadow-red-900 rounded-3xl ">
      <div className="w-3/4 justify-center">
        <div>
          <div className="flex flex-row items-center justify-center w-full h-32 mx-28 bg-blue-950 mt-6 rounded-full shadow-xl shadow-blue-500">
            <p className="text-lg text-rose-400">
              ✨Congratulation for completing the Quiz🎊
            </p>
          </div>
        </div>
      </div>
      <div className="mt-52">
        <div>
          <Stack direction="row" spacing={3}>
            <Button variant="contained" startIcon={<BackupRoundedIcon />}>
              Response is Submitted
            </Button>
            <Button variant="contained" startIcon={<BackupRoundedIcon />} onClick={handleClick}>
              End
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Page2;
