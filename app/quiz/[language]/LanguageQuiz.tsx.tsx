"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import CQuestions from "./c.json";
import CPPQuestions from "./cpp.json";
import JavaScriptQuestions from "./javascript.json";
import PythonQuestions from "./python.json";
import { FaCheck, FaTimes } from "react-icons/fa";

type Language = "Python" | "JavaScript" | "C" | "CPP";

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

type Questions = Record<Language, Question[]>;

const LanguageQuiz = ({ params }: { params: { language: string } }) => {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const languageMap = useMemo(
    () =>
      ({
        python: "Python",
        javascript: "JavaScript",
        c: "C",
        cpp: "CPP",
      }) as Record<string, Language>,
    [],
  );

  const questions = useMemo(
    () =>
      ({
        Python: PythonQuestions.questions as Question[],
        JavaScript: JavaScriptQuestions.questions as Question[],
        C: CQuestions.questions as Question[],
        CPP: CPPQuestions.questions as Question[],
      }) as Questions,
    [],
  );

  useEffect(() => {
    const normalizedLanguage = params.language.toLowerCase();
    if (!Object.keys(languageMap).includes(normalizedLanguage)) {
      router.push("/quiz");
    }
    const currentQuestions = questions[languageMap[normalizedLanguage]];
    setSelectedAnswers(new Array(currentQuestions.length).fill(null));
  }, [params.language, router, languageMap, questions]);

  const handleAnswer = (selectedAnswer: number) => {
    if (quizCompleted || showResults) return;
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestion] = selectedAnswer;
    setSelectedAnswers(newSelectedAnswers);
    setIsAnswered(true);

    const normalizedLanguage = params.language.toLowerCase();
    const currentQuestions = questions[languageMap[normalizedLanguage]];
    if (selectedAnswer === currentQuestions[currentQuestion].correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
      setIsAnswered(selectedAnswers[currentQuestion - 1] !== null);
    }
  };

  const handleNextQuestion = () => {
    const normalizedLanguage = params.language.toLowerCase();
    const currentQuestions = questions[languageMap[normalizedLanguage]];
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setIsAnswered(selectedAnswers[currentQuestion + 1] !== null);
    } else {
      const allQuestionsAnswered = selectedAnswers.every(
        (answer) => answer !== null,
      );
      if (allQuestionsAnswered) {
        setShowConfirmation(true);
      } else {
        alert("Please answer all questions before submitting the quiz.");
      }
    }
  };

  const handleConfirmSubmit = () => {
    setQuizCompleted(true);
    setShowConfirmation(false);
  };

  const renderQuiz = () => {
    const normalizedLanguage = params.language.toLowerCase();
    const currentQuestions = questions[languageMap[normalizedLanguage]];

    if (showResults) {
      return (
        <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto">
          {currentQuestions.map((question, questionIndex) => (
            <div
              key={questionIndex}
              className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-gray-800 dark:to-indigo-900 p-4 md:p-8 rounded-2xl shadow-lg border border-orange-300 dark:border-indigo-500 transition-all duration-300 hover:shadow-xl"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-cyan-300 dark:to-blue-400">
                Question {questionIndex + 1}: {question.question}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`p-3 md:p-4 rounded-xl flex justify-between items-center transition-all duration-300 ${
                      optionIndex === question.correctAnswer
                        ? "bg-green-200 dark:bg-green-800 border-2 border-green-400 dark:border-green-600"
                        : selectedAnswers[questionIndex] === optionIndex
                          ? "bg-red-200 dark:bg-red-800 border-2 border-red-400 dark:border-red-600"
                          : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600"
                    }`}
                  >
                    <span className="text-base md:text-lg font-medium text-gray-800 dark:text-white">
                      {String.fromCharCode(65 + optionIndex)}. {option}
                    </span>
                    {optionIndex === question.correctAnswer ? (
                      <FaCheck className="text-green-600 text-xl" />
                    ) : selectedAnswers[questionIndex] === optionIndex ? (
                      <FaTimes className="text-red-600 text-xl" />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="flex justify-center">
            <button
              className="mt-6 md:mt-8 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold py-3 md:py-4 px-8 md:px-12 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-400 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-blue-700 dark:focus:ring-cyan-300"
              onClick={() => router.push("/quiz")}
            >
              Back to Quiz Selection
            </button>
          </div>
        </div>
      );
    }

    if (quizCompleted) {
      return (
        <div className="text-center p-6 md:p-10 rounded-3xl shadow-2xl border-4 bg-gradient-to-r from-yellow-100 to-orange-100 border-orange-300 text-gray-800 dark:bg-gradient-to-r dark:from-indigo-900 dark:to-purple-900 dark:border-violet-500 dark:text-white">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 md:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 dark:from-cyan-400 dark:to-blue-500">
            Quiz Completed!
          </h2>
          <p className="text-2xl md:text-3xl mb-8 md:mb-10 text-gray-700 dark:text-gray-200">
            Your score:{" "}
            <span className="font-bold text-2xl md:text-3xl text-orange-500 dark:text-cyan-400">
              {score}
            </span>{" "}
            out of{" "}
            <span className="font-bold text-2xl md:text-3xl text-red-500 dark:text-blue-400">
              {currentQuestions.length}
            </span>
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <button
              className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-orange-300 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-600 dark:hover:from-cyan-600 dark:hover:to-blue-700 dark:focus:ring-cyan-300"
              onClick={() => router.push("/quiz")}
            >
              Back to Quiz Selection
            </button>
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-gradient-to-r dark:from-green-500 dark:to-blue-600 dark:hover:from-green-600 dark:hover:to-blue-700 dark:focus:ring-green-300"
              onClick={() => setShowResults(true)}
            >
              Show Results
            </button>
          </div>
        </div>
      );
    }

    const question = currentQuestions[currentQuestion];

    return (
      <div className="futuristic-question-container p-4 md:p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-orange-300 dark:bg-gradient-to-br dark:from-gray-950 dark:to-indigo-950 dark:border-cyan-300">
        <div className="mb-6 md:mb-8 pb-4 md:pb-6 border-b border-orange-300 dark:border-cyan-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 dark:from-cyan-300 dark:to-blue-400">
            Question {currentQuestion + 1}: {question.question}
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {question.options.map((option, optionIndex) => (
              <button
                key={optionIndex}
                className={`w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-800 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-700 dark:hover:from-indigo-700 dark:hover:to-purple-800 dark:text-white font-semibold py-3 px-4 md:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  selectedAnswers[currentQuestion] === optionIndex
                    ? "ring-4 ring-orange-300 dark:ring-cyan-300"
                    : ""
                } flex justify-between items-center`}
                onClick={() => handleAnswer(optionIndex)}
                disabled={showResults}
              >
                <span>
                  {String.fromCharCode(65 + optionIndex)}. {option}
                </span>
                {showResults &&
                  (optionIndex === question.correctAnswer ? (
                    <FaCheck className="text-green-500" />
                  ) : (
                    selectedAnswers[currentQuestion] === optionIndex && (
                      <FaTimes className="text-red-500" />
                    )
                  ))}
                {!showResults &&
                  selectedAnswers[currentQuestion] === optionIndex && (
                    <FaCheck className="text-orange-300 dark:text-cyan-300" />
                  )}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-6">
          <div className="flex flex-col md:flex-row w-full md:w-auto justify-between md:justify-start items-center mb-4 md:mb-0">
            {currentQuestion > 0 && (
              <button
                className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-800 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-700 dark:hover:from-indigo-700 dark:hover:to-purple-800 dark:text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 mb-2 md:mb-0 md:mr-4 w-full md:w-auto"
                onClick={handlePreviousQuestion}
                disabled={showResults}
              >
                Previous Question
              </button>
            )}
            <button
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-800 dark:bg-gradient-to-r dark:from-indigo-600 dark:to-purple-700 dark:hover:from-indigo-700 dark:hover:to-purple-800 dark:text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              onClick={handleNextQuestion}
              disabled={!isAnswered || showResults}
            >
              {currentQuestion === currentQuestions.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
          </div>
          <p className="text-orange-500 dark:text-cyan-300 mt-2 md:mt-0">
            Question: <span className="font-bold">{currentQuestion + 1}</span> /{" "}
            {currentQuestions.length}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-yellow-100 via-orange-200 to-red-200 text-gray-800 dark:bg-gradient-to-b dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 dark:text-white">
        <main className="max-w-3xl w-full px-4 md:px-8 py-8 md:py-16 rounded-3xl">
          {!showResults && (
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
                {languageMap[params.language.toLowerCase()]} Quiz
              </h1>
            </div>
          )}
          {renderQuiz()}
          {showConfirmation && (
            <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-sm">
              <div className="p-10 rounded-2xl shadow-lg border bg-gradient-to-br from-yellow-100 to-orange-100 border-orange-300 text-gray-800 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:border-purple-500 dark:text-white">
                <h3 className="text-2xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 dark:from-cyan-400 dark:to-purple-600">
                  Ready to Submit?
                </h3>
                <p className="text-lg mb-8 text-center text-gray-700 dark:text-gray-300">
                  Are you sure you want to submit the quiz?
                </p>
                <div className="flex justify-center space-x-8">
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gradient-to-r dark:from-red-500 dark:to-pink-600 dark:hover:from-red-600 dark:hover:to-pink-700"
                    onClick={() => setShowConfirmation(false)}
                  >
                    <span className="mr-2">&#x2715;</span>Cancel
                  </button>
                  <button
                    className="px-8 py-4 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl dark:bg-gradient-to-r dark:from-emerald-500 dark:to-teal-600 dark:hover:from-emerald-600 dark:hover:to-teal-700"
                    onClick={handleConfirmSubmit}
                  >
                    <span className="mr-2">&#x2714;</span>Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default LanguageQuiz;
