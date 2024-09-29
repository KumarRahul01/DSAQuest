import React, { useEffect, useState } from "react";
import { IoIosCloseCircle, IoMdSave } from "react-icons/io";
import axios from "axios";
import toast from "react-hot-toast";

const Notes = ({ setShowNotes, noteVal }) => {
  const myData = JSON.parse(localStorage.getItem("quesDetails"));

  // useEffect to update notesDesc whenever noteVal is updated
  useEffect(() => {
    setNotesDesc(noteVal);
  }, [noteVal]);

  const [notesDesc, setNotesDesc] = useState("");

  const saveNotes = async () => {
    console.log(myData.tag)
    let finalNotes = {
      quesId: myData.quesId,
      userId: JSON.parse(localStorage.getItem("userId")),
      tag: myData.tag,
      note: notesDesc,
    };
    await axios
      .post("https://dsa-quest-api.vercel.app/api/savenote", finalNotes, {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`, // If using JWT for authentication
          "Content-Type": "application/json", // Ensure the content type is correct
        },
      })
      .then((res) => {
        console.log(res.data, "status: ", res.status);
        if (res.status === 201) {
          toast.success("Note updated successfully");
        } else {
          toast.success("Note created successfully");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in creating note");
      });

    setShowNotes(false);
  };

  return (
    <div className="fixed inset-0 w-[90%] h-fit translate-x-[5%] xs:w-[60%] top-[20%] xs:translate-x-[28%] px-2 sm:px-5 md:px-10 py-6 bg-slate-100 rounded-md selection:bg-[#ffbe25db] selection:text-slate-50">
      <div className="text-black w-full">
        <h1 className="border p-2 bg-slate-300 mt-5 mb-3 rounded-md font-medium">
          <span className="font-bold text-lg">Ques:</span> {myData.question}
        </h1>
        <div className="flex gap-5 text-sm">
          <span className="bg-blue-500 text-white px-2 py-1 rounded-md">
            <span className="font-medium">Topic:</span> {myData.tag}
          </span>
          <span
            className={`${myData.difficulty === "Easy" && "bg-green-500"} ${
              myData.difficulty === "Medium" && "bg-yellow-500"
            } ${
              myData.difficulty === "Hard" && "bg-red-500"
            } text-white px-2 py-1 rounded-md`}
          >
            <span className="font-medium">Difficulty:</span> {myData.difficulty}
          </span>
        </div>
        <textarea
          name="ansField"
          id="ansField"
          className="h-40 w-full my-5 py-4 px-2 resize-none bg-slate-300 rounded-md outline-none placeholder:text-slate-500"
          placeholder="write your notes here ..."
          value={notesDesc}
          onChange={(e) => setNotesDesc(e.target.value)}
        ></textarea>
        <div className="flex justify-center xxs:gap-2 sm:gap-10">
          <button
            className="flex items-center gap-2 w-fit bg-[#ffbd25] hover:bg-yellow-500 font-semibold px-4 py-1 rounded-md transition-all duration-150"
            onClick={saveNotes}
          >
            <IoMdSave size={"1.25rem"} />
            <p className="text-lg">Save</p>
          </button>
          <button
            className="flex items-center gap-2 w-fit bg-red-500 hover:bg-red-600 font-semibold px-4 py-1 rounded-md transition-all duration-150"
            onClick={() => setShowNotes(false)}
          >
            <IoIosCloseCircle size={"1.45rem"} />
            <p className="text-lg">Close</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Notes);
