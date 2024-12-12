"use client";
import Button from "@/components/UI/Button";
import TextInput from "@/components/UI/TextInput";
import axios from "axios";
import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const CreateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [voteType, setVoteType] = useState("single");
  const [options, setOptions] = useState(["", ""]); // Start with a minimum of 2 options
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [image, setImage] = useState<File | null>(null); // State for image input

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
    setOptions(["", ""]); // Reset options when vote type changes
    setCorrectAnswer(""); // Reset correct answer when vote type changes
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.size <= 1024 * 1024) { // Check if file size is less than or equal to 1MB
      setImage(file);
    } else {
      alert("Image size must be less than or equal to 1MB.");
    }
  };

  const createQuestion = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (voteType === "multiple" && !options.includes(correctAnswer)) {
      console.log("Please enter a valid answer that matches one of the options.");
      return;
    }

    if (image) {
      console.log(`Image selected: ${image.name}`);
    } else {
      console.log('Please select a file');
      return;
    }

    const formData = new FormData();
    formData.append('file', image);

    const response = await axios.post("/api/image", formData)
console.log("res",response)
    // const response = await fetch('/api/image', {
    //   method: 'POST',
    //   body: formData,
    // });

    // const data = await response.json();
    // if (data.success) {
    //   alert('Image uploaded: ' + data.url);
    // } else {
    //   alert('Error uploading image');
    // }

    // Log question details
    if (voteType === "single") {
      console.log(
        `Question: ${question}\nVote Type: ${voteType}\nCorrect Answer: ${correctAnswer}`
      );
    } else {
      console.log(
        `Question: ${question}\nVote Type: ${voteType}\nOptions: ${options.join(
          ", "
        )}\nCorrect Answer: ${correctAnswer}`
      );
    }
  };

  return (
    <div className=" mt-2 bg-light-background2 p-8 dark:bg-dark-background2 max-w-3xl mx-auto shadow-lg rounded-2xl ">
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
          <Button
            onClick={addOption}
            variant="blue"
          >
            Add Option
          </Button>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="correctAnswer" className="block text-lg mb-2">
          Correct Answer:
        </label>
        <TextInput
          id="correctAnswer"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          placeholder="Enter correct answer (Yes/No or option)"
        />
      </div>

      <button
        onClick={(e) => createQuestion(e as any)}
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Create Question
      </button>
    </div>
  );
};

export default CreateQuestion;
