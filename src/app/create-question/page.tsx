"use client";
import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";
import { writeContractHelper } from "@/helperFile/helperFunction";
import axios from "axios";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Bounce, toast } from "react-toastify";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [voteType, setVoteType] = useState("single");
  const [options, setOptions] = useState(["Yes", "No"]);
  const [image, setImage] = useState<File | null>(null);
  const [endDate, setEndDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const removeOption = (index: number) => {
    if (options.length > 2) {
      // Ensure at least 2 options remain
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handleVoteTypeChange = (type: string) => {
    setVoteType(type);
    if (type === "single") {
      setOptions(["Yes", "No"]); // Reset options to Yes/No for single vote type
    } else {
      setOptions(["", ""]);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 1024 * 1024) {
      setImage(file);
    } else {
      toast.error("Image size must be less than or equal to 1MB.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const createQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Check if question is filled
      if (question.trim() === "") {
        toast.error(
          "Please fill out the question before creating the question!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
        return;
      }
      // Check if image is selected
      if (!image) {
        toast.error("Please select a file!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }
      // Check if options are filled for multiple options vote type
      if (
        voteType === "multiple" &&
        options.some((option) => option.trim() === "")
      ) {
        toast.error(
          "Please fill out all options before creating the question!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }
        );
        return;
      }
      if (!endDate) {
        toast.error("Please select an end date for the poll!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      const selectedEndDate = new Date(endDate);
      const currentTime = new Date();

      // Validate that the end date is in the future
      if (selectedEndDate <= currentTime) {
        toast.error("The end date must be greater than the current time!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return;
      }

      // Convert the end date to seconds (Unix timestamp)
      const endDateInSeconds = Math.floor(selectedEndDate.getTime() / 1000);
      const currentTimeInSeconds = Math.floor(currentTime.getTime() / 1000);

      const timeDifferenceInSeconds = endDateInSeconds - currentTimeInSeconds;
      // console.log("End Date in Seconds:", endDateInSeconds);

      const formData = new FormData();
      formData.append("file", image);

      const response = await axios.post("/api/image", formData);
      // console.log("res", response);
      if (response?.data?.message === "success") {
        // Blockchain call
        // console.log("all data before call blockchain function", [
        //   question,
        //   options,
        //   endDateInSeconds,
        //   response.data.imgUrl,
        // ]);
        const transactionReceipt = await writeContractHelper("createPoll", [
          question,
          options,
          timeDifferenceInSeconds,
          response.data.imgUrl,
        ]);
        if (transactionReceipt) {
          setImage(null);
          setQuestion("");
          setEndDate("");
          setVoteType("single");
          // console.log("transactionReceipt", transactionReceipt);
          toast.success("Created Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      }
    } catch (error) {
      console.log("error waiting creating question", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-2 bg-light-background2 p-8 dark:bg-dark-background2 max-w-3xl mx-auto shadow-lg rounded-2xl">
      <h1 className="text-2xl font-bold mb-4">Create a Voting Question</h1>
      <div className="mb-4">
        <label htmlFor="questionText" className="block text-lg mb-2">
          Question:
        </label>
        <TextInput
          id="questionText"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Enter your question here"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="imageInput" className="block text-lg mb-2">
          Upload Image (max 1MB):
        </label>
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          onChange={handleImageChange}
          className="border rounded-md p-2"
        />
      </div>

      <div className="mb-4">
        <div className="flex gap-2 items-center my-2">
          <div className="flex items-center w-fit bg-light-background2 dark:bg-dark-background2 py-2 px-3 rounded-md">
            <input
              type="radio"
              name="voteType"
              id="singleVote"
              value="single"
              checked={voteType === "single"}
              onChange={() => handleVoteTypeChange("single")}
              className="mr-2 accent-gray-600 dark:accent-gray-600"
            />
            <label htmlFor="singleVote" className="text-md">
              Single Yes/No
            </label>
          </div>
          <div className="flex items-center w-fit bg-light-background2 dark:bg-dark-background2 py-2 px-3 rounded-md">
            <input
              type="radio"
              name="voteType"
              id="multiVote"
              value="multiple"
              checked={voteType === "multiple"}
              onChange={() => handleVoteTypeChange("multiple")}
              className="mr-2 accent-gray-600 dark:accent-gray-600"
            />
            <label htmlFor="multiVote" className="text-md">
              Multiple Options
            </label>
          </div>
        </div>
      </div>

      {voteType === "multiple" && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Multiple Options:</h3>
          <div className="grid my-2 md:my-4 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {options.map((option, index) => (
              <div key={index} className="flex items-center relative">
                <TextInput
                  id={`option-${index}`}
                  value={option}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                  placeholder={`Option ${index + 1}`}
                />
                <MdDelete
                  className="text-red-500 text-2xl cursor-pointer absolute right-2 top-2"
                  onClick={() => removeOption(index)}
                />
              </div>
            ))}
          </div>
          <Button onClick={addOption} variant="blue">
            Add Option
          </Button>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="endDate" className="block text-lg mb-2">
          End Date:
        </label>
        <input
          type="datetime-local"
          id="endDate"
          value={endDate}
          onChange={handleEndDateChange}
          className="border rounded-md p-2 text-light-text dark:text-dark-text bg-light-background2 dark:bg-dark-background2"
        />
      </div>

      <button
        onClick={(e) => createQuestion(e as any)}
        disabled={loading === true}
        className="bg-blue-600 text-white p-3 rounded-md mt-4 w-full"
      >
        {loading ? "loading..." : "Create Question"}
      </button>
    </div>
  );
};

export default CreateQuestion;
