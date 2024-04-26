import React from "react";
import Button from "@mui/material/Button";
import BackupRoundedIcon from "@mui/icons-material/BackupRounded";
import Stack from "@mui/material/Stack";
import { socket } from "./Home";
const Page2 = () => {
  const handleClick = () => {
    console.log("click");
    socket.emit("stop", "1");
    // socket.on("disconnect", (data) => {
    //   console.log(data);
    //   socket.disconnect();
    // });
  };
  return (
    <div className="justify-center flex  mt-16">
      <div className="w-4/5 flex bg-cyan-200 h-96 shadow-2xl shadow-black rounded-3xl ">
        <div className="w-3/4 justify-center">
          <div>
            <div className="flex flex-row items-center justify-center w-full h-36 mx-28 bg-blue-950 mt-10 rounded-full shadow-xl shadow-blue-500">
              <p className="text-lg text-rose-400">
                ✨Congratulation for completing the Quiz🎊
              </p>
            </div>
          </div>
        </div>
        <div className="mt-64">
          <div>
            <Stack direction="row" spacing={2}>
              <Button
                size="large"
                variant="contained"
                startIcon={<BackupRoundedIcon />}
              >
                Response is Submitted
              </Button>
              <Button
                variant="contained"
                startIcon={<BackupRoundedIcon />}
                onClick={handleClick}
              >
                End
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
