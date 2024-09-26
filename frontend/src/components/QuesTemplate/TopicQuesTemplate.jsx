import React, { useContext, useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { AnswerCount } from "../contexts/AnswerCount";
import Notes from "../Notes/Notes";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { LoginContext } from "../contexts/LoginContext";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

// valid params routes
const validParams = [
  "arrays",
  "strings",
  "2d-arrays",
  "searching-and-sorting",
  "backtracking",
  "linked-list",
  "stack-and-queues",
  "greedy",
];

const TopicQuesTemplate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const topic = params.topic;

  // Validate url-params against valid routes params
  const isValidParams = validParams.includes(topic);

  // console.log("valid params", isValidParams);

  // If the productId is invalid, redirect to 404
  if (!isValidParams) {
    return <NotFoundPage />;
  }

  const { isLoggedIn, user } = useContext(LoginContext);
  const { setAnswerCount } = useContext(AnswerCount);

  const [showNotes, setShowNotes] = useState(false);
  const [ques, setQues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noteVal, setNoteVal] = useState("");
  const [marked, setMarked] = useState(false);
  const [isFilled, setIsFilled] = useState(
    localStorage.getItem(`star-${ques.quesId}`) === "filled"
  );

  useEffect(() => {
    setLoading(true);
    const fetchQuestions = async () => {
      axios
        .get(`http://localhost:8000/api/questions/get-${topic}-questions`)
        .then((res) => {
          console.log(res.data);
          setQues(res.data);
        })
        .catch((err) => console.log(err));
    };

    fetchQuestions();
    setLoading(false);
  }, []);

  const displayNotes = async (ques) => {
    const questionId = ques.quesId;
    const tagName = ques.topic;
    const userId = JSON.parse(localStorage.getItem("userId"));

    if (isLoggedIn) {
      localStorage.setItem(
        "quesDetails",
        JSON.stringify({
          quesId: questionId,
          tag: tagName,
          question: ques.question,
          difficulty: ques.difficulty,
        })
      );
      setShowNotes(true);

      await axios
        .get(`http://localhost:8000/api/getnote`, {
          params: { quesId: questionId, userId, tag: tagName },
        })
        .then((res) => {
          console.log(res.data);
          setNoteVal(res.data.note);
        })
        .catch((err) => {
          console.log(err);
          setNoteVal("");
        });
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  };

  const handleCheckboxChange = async (ques, isChecked) => {
    const questionId = ques.quesId;
    const tagName = ques.topic;
    const userId = JSON.parse(localStorage.getItem("userId"));

    const finalData = {
      quesId: questionId,
      userId,
      tag: tagName,
      isChecked,
    };

    console.log(questionId, userId, tagName, isChecked);

    await axios
      .post("http://localhost:8000/api/savestatus", finalData, {
        headers: {
          "Content-Type": "application/json", // Ensure the content type is correct
        },
      })
      .then((res) => {
        console.log(res);
        // Use the status code to determine the success message

        // Optionally update the state immediately for a smoother UI experience
        setMarked((prev) => ({ ...prev, quesId: questionId, isChecked }));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error in Checking");
      });
  };

  const checkLoginStar = (id) => {
    if (isLoggedIn) {
      console.log(id);
      setIsFilled(!isFilled);
      localStorage.setItem(`star-${id}`, !isFilled ? "filled" : "empty");
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  };

  return (
    <>
      <div className="bg w-full min-h-screen text-slate-50 selection:bg-[#ffbe25db] selection:text-slate-50">
        <div className="px-4 sm:px-5 md:px-14">
          <Navbar />
        </div>
        {!loading ? (
          <div className="px-4 sm:px-5 md:px-14 py-6 relative">
            <div className="w-full bg-[#333] overflow-x-scroll lg:overflow-x-hidden">
              {/* Tabel that contains questions */}
              <table>
                <thead className="bg-[#ffbd50]">
                  <tr>
                    <th>Status</th>
                    <th>S.No</th>
                    <th>Difficulty</th>
                    <th>
                      <div className="w-[300px] lg:w-full flex items-center justify-center">
                        <h3>Problem</h3>
                      </div>
                    </th>
                    <th>Practice</th>
                    <th>Note</th>
                    <th>Revision</th>
                  </tr>
                </thead>

                <tbody className="text-center">
                  {ques.map((ques) => {
                    return (
                      <tr key={ques.quesId} className="">
                        <td>
                          <div>
                            <input
                              id="yellow-checkbox"
                              type="checkbox"
                              value=""
                              className="w-6 h-6 cursor-pointer accent-[#ffbd25]"
                              onClick={(e) =>
                                handleCheckboxChange(ques, e.target.checked)
                              }
                            />
                          </div>
                        </td>

                        <td>
                          <h3>{ques.quesId}</h3>
                        </td>

                        <td>
                          <div
                            className={`flex justify-center items-center ${
                              ques.difficulty === "Easy" ? "bg-green-500" : ""
                            } ${
                              ques.difficulty === "Medium"
                                ? "bg-yellow-500"
                                : ""
                            } ${
                              ques.difficulty === "Hard" ? "bg-red-500" : ""
                            }  rounded-md p-1 font-medium`}
                          >
                            {ques.difficulty}
                          </div>
                        </td>

                        <td>
                          <div>
                            <h3>{ques.question}</h3>
                          </div>
                        </td>

                        <td>
                          <div className="w-full">
                            <a
                              href={ques.link}
                              target="_blank"
                              className="hover:text-blue-500 text-blue-500 underline underline-offset-4 font-medium transition-all duration-150 hover:bg-slate-50 px-3 py-2 rounded-md hover:font-semibold"
                            >
                              Link
                            </a>
                          </div>
                        </td>

                        <td className="">
                          <div
                            className="w-full flex items-center justify-center"
                            onClick={() => displayNotes(ques)}
                          >
                            <IoAddCircleSharp
                              size={"1.5rem"}
                              className="hover:text-[#ffbd25] cursor-pointer"
                            />
                          </div>
                        </td>

                        <td className="">
                          <div
                            className="w-full flex items-center justify-center"
                            onClick={() => checkLoginStar(ques.quesId)}
                          >
                            {isFilled ? (
                              <FaStar
                                size={"1.25rem"}
                                className="hover:text-[#ffbd25] cursor-pointer"
                              />
                            ) : (
                              <FaRegStar
                                size={"1.25rem"}
                                className="hover:text-[#ffbd25] cursor-pointer"
                              />
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {showNotes && (
              <Notes setShowNotes={setShowNotes} noteVal={noteVal} />
            )}
          </div>
        ) : (
          <div className="min-h-screen flex justify-center items-center">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default TopicQuesTemplate;
