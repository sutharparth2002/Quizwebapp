import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Page2 from "./Page2";

const Page1 = () => {
  const [finalPage, setFinalPage] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const questions = [
    {
      id: 1,
      text: "WHAT IS THE CAPITAL OF THE INDIA?",
      options: [
        { id: 0, text: "DELHI", isCorrect: true },
        { id: 1, text: "MUMBAI", isCorrect: false },
        { id: 2, text: "GUJARAT", isCorrect: false },
        { id: 3, text: "KERALA", isCorrect: false },
      ],
    },
    {
      id: 2,
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: " Mars", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Saturn", isCorrect: false },
      ],
    },

    {
      id: 3,
      text: "WHAT IS THE CAPITAL OF THE INDIA?",
      options: [
        { id: 0, text: "DELHI", isCorrect: true },
        { id: 1, text: "MUMBAI", isCorrect: false },
        { id: 2, text: "GUJARAT", isCorrect: false },
        { id: 3, text: "KERALA", isCorrect: false },
      ],
    },
    {
      id: 4,
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: " Mars", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Saturn", isCorrect: false },
      ],
    },

    {
      id: 5,
      text: "WHAT IS THE CAPITAL OF THE INDIA?",
      options: [
        { id: 0, text: "DELHI", isCorrect: true },
        { id: 1, text: "MUMBAI", isCorrect: false },
        { id: 2, text: "GUJARAT", isCorrect: false },
        { id: 3, text: "KERALA", isCorrect: false },
      ],
    },
    {
      id: 6,
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: " Mars", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Saturn", isCorrect: false },
      ],
    },

    {
      id: 7,
      text: "WHAT IS THE CAPITAL OF THE INDIA?",
      options: [
        { id: 0, text: "DELHI", isCorrect: true },
        { id: 1, text: "MUMBAI", isCorrect: false },
        { id: 2, text: "GUJARAT", isCorrect: false },
        { id: 3, text: "KERALA", isCorrect: false },
      ],
    },
    {
      id: 8,
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: " Mars", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Saturn", isCorrect: false },
      ],
    },

    {
      id: 9,
      text: "WHAT IS THE CAPITAL OF THE INDIA?",
      options: [
        { id: 0, text: "DELHI", isCorrect: true },
        { id: 1, text: "MUMBAI", isCorrect: false },
        { id: 2, text: "GUJARAT", isCorrect: false },
        { id: 3, text: "KERALA", isCorrect: false },
      ],
    },
    {
      id: 10,
      text: "Which planet is known as the Red Planet?",
      options: [
        { id: 0, text: " Mars", isCorrect: true },
        { id: 1, text: "Venus", isCorrect: false },
        { id: 2, text: "Jupiter", isCorrect: false },
        { id: 3, text: "Saturn", isCorrect: false },
      ],
    },
  ];

  const handleOptionClick = (option) => {
    setUserAnswers((prevAnswers) => [
      ...prevAnswers,
      { questionId: questions[currentQuestion].id, optionId: option.id },
    ]);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    if (currentQuestion >= 9) {
      setFinalPage(true);
    }
  };

  const handlePageChange = (event, page) => {
    setCurrentQuestion(page - 1);
  };

  const handleNextPage = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePreviousPage = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };
  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  return (
    <>
      {finalPage ? (
        <Page2 />
      ) : (
        <div className="justify-center flex  mt-16">
          <div className="w-4/5 flex bg-cyan-200 h-96 shadow-2xl shadow-black rounded-3xl">
            <div className="w-3/5 justify-center mt-4">
              <div className="flex flex-row items-center justify-center w-full h-24 mx-52 bg-slate-400 mt-3 rounded-full shadow-xl shadow-slate-800">
                <p className="">{questions[currentQuestion].text}</p>
              </div>
            </div>

            <div className="  flex flex-col mt-40 -mx-96  ">
              <Box sx={{ width: "90%" }}>
                <Grid
                  container
                  rowSpacing={2}
                  columnSpacing={{ xs: 1, sm: 6, md: 10 }}
                >
                  {questions[currentQuestion].options.map((option) => (
                    <Grid key={option.id} item xs={6}>
                      <Stack spacing={2} direction="row">
                        <Button
                          variant="outlined"
                          size="large"
                          fullWidth
                          onClick={() => handleOptionClick(option)}
                        >
                          {option.text}
                        </Button>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>

            <div className="mt-80 -mx-48">
              <div>
                <Stack spacing={2}>
                  <Pagination
                    count={questions.length}
                    page={currentQuestion + 1}
                    onChange={handlePageChange}
                    renderItem={(item) => (
                      <PaginationItem
                        slots={{
                          previous: ArrowBackIcon,
                          next: ArrowForwardIcon,
                        }}
                        onPageChange={handlePageChange}
                        {...item}
                      />
                    )}
                    boundaryCount={2}
                    siblingCount={2}
                    onChange={handlePageChange}
                    onNextClick={handleNextPage}
                    onPreviousClick={handlePreviousPage}
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Page1;
