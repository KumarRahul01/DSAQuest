import React, { useContext, useEffect, useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import toast from "react-hot-toast";
import { json, useNavigate, useParams } from "react-router-dom";
import Notes from "../Notes/Notes";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { useUser } from "@clerk/clerk-react";

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
  "binary-trees",
  "binary-search-trees",
  "heaps-and-hashing",
  "graphs",
  "tries",
  "dp",
  "bit-manipulation",
  "segment-trees",
];

const TopicQuesTemplate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const topic = params.topic;

  const { isLoaded, isSignedIn } = useUser();

  // Validate url-params against valid routes params
  const isValidParams = validParams.includes(topic);

  // console.log("valid params", isValidParams);

  // If the productId is invalid, redirect to 404
  if (!isValidParams) {
    return <NotFoundPage />;
  }

  const userId = localStorage.getItem("userId");

  const [showNotes, setShowNotes] = useState(false);
  const [ques, setQues] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noteVal, setNoteVal] = useState("");
  const [markedQuestions, setMarkedQuestions] = useState({});
  const [completedQuestions, setCompletedQuestions] = useState({});
  const [searchText, setSearchText] = useState("");

  // Fetch questions on component mount
  useEffect(() => {
    setLoading(true);
    const fetchQuestions = async () => {
      axios
        .get(`https://dsa-quest-api.vercel.app/api/get-${topic}-questions`)
        .then((res) => {
          // Sort by quesId in ascending order
          const sortedQuestions = res.data.sort((a, b) => a.quesId - b.quesId);
          setQues(sortedQuestions);
          setFilterData(sortedQuestions);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };
    fetchQuestions();
  }, []);

  const displayNotes = async (ques) => {
    const questionId = ques.quesId;
    const tagName = ques.topic;
    const userId = localStorage.getItem("userId");

    if (isSignedIn) {
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
        .get(`https://dsa-quest-api.vercel.app/api/getnote`, {
          params: { quesId: questionId, userId, tag: tagName },
        })
        .then((res) => {
          console.log(res.data);
          setNoteVal(res.data.note);
        })
        .catch((err) => {
          setNoteVal("");
        });
    } else {
      toast.error("Please login first");
      navigate("/login");
    }
  };

  // Fetch the question states when component mounts
  useEffect(() => {
    const fetchState = async () => {
      try {
        const response = await axios.get(
          `https://dsa-quest-api.vercel.app/api/getState/${topic}/${userId}`
        );
        const data = response.data;

        const marked = {};
        const completed = {};

        data.forEach((question) => {
          marked[question.questionId] = question.isMarkedForRevision;
          completed[question.questionId] = question.isCompleted;
        });

        setMarkedQuestions(marked);
        setCompletedQuestions(completed);
      } catch (err) {
        console.error("Error fetching question state:", err);
      }
    };

    fetchState();
  }, [topic, userId]);

  // Save state to backend when user interacts with stars/checkboxes
  const saveStateToBackend = async (id, isMarked, isCompleted) => {
    try {
      await axios.post("https://dsa-quest-api.vercel.app/api/saveState", {
        userId,
        topic,
        questionId: id,
        isMarkedForRevision: isMarked,
        isCompleted: isCompleted,
      });
    } catch (err) {
      console.error("Error saving state:", err);
    }
  };

  const handleStarClick = (id) => {
    if (isSignedIn) {
      const newState = !markedQuestions[id];
      setMarkedQuestions((prevState) => ({
        ...prevState,
        [id]: newState,
      }));

      saveStateToBackend(id, newState, completedQuestions[id]);
    } else {
      navigate("/login");
      toast.error("Please login first");
    }
  };

  const handleCheckboxClick = (id) => {
    if (isSignedIn) {
      const newState = !completedQuestions[id];
      setCompletedQuestions((prevState) => ({
        ...prevState,
        [id]: newState,
      }));
      saveStateToBackend(id, markedQuestions[id], newState);
    } else {
      navigate("/login");
      toast.error("Please login first");
    }
  };

  const searchHandler = (text) => {
    const filterData = ques.filter((res) =>
      res.question.toLowerCase().includes(text.toLowerCase())
    );
    setSearchText("");
    setFilterData(filterData);
  };

  return (
    <>
      <div className="bg w-full min-h-screen text-slate-50 selection:bg-[#ffbe25db] selection:text-slate-50">
        <div className="px-4 sm:px-5 md:px-14">
          <Navbar />
          {/* Search box */}
          <div className="hidden md:flex justify-center items-center my-6 w-full">
            <div className="text-gray-950 flex items-center w-10/12 mx-auto">
              <input
                type="text"
                value={searchText}
                className="h-[36px] outline-none border-none rounded-sm p-3 w-10/12 bg-slate-50"
                placeholder="Search your word here .."
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="ml-4 border-[3px] md:w-3/12 lg:w-2/12 p-1 rounded-md font-semibold text-slate-50 hover:text-zinc-950 hover:bg-[#ffbd25] hover:border-[#ffbd25] transition-all duration-150"
                onClick={() => searchHandler(searchText)}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {!loading ? (
          <div className="px-4 sm:px-5 md:px-14 py-6 relative">
            <div className="w-full bg-[#333] overflow-x-scroll lg:overflow-x-hidden">
              {/* Tabel that contains questions */}
              <table>
                {filterData.length === 0 ? (
                  <h1 className="text-2xl font-semibold text-center">
                    Please enter a valid text
                  </h1>
                ) : (
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
                )}

                <tbody className="text-center">
                  {filterData.length === 0 ? (
                    // Show Nothing
                    <></>
                  ) : (
                    filterData.map((ques) => {
                      return (
                        <tr key={ques.quesId} className="">
                          <td>
                            <div>
                              <input
                                id="yellow-checkbox"
                                type="checkbox"
                                checked={!!completedQuestions[ques.quesId]} // Checkbox state
                                onChange={() =>
                                  handleCheckboxClick(ques.quesId)
                                }
                                className="w-6 h-6 cursor-pointer accent-[#ffbd25]"
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
                            <div className="w-full flex items-center justify-center">
                              {markedQuestions[ques.quesId] ? (
                                <FaStar
                                  size={"1.25rem"}
                                  style={{ color: "gold", cursor: "pointer" }}
                                  onClick={() => handleStarClick(ques.quesId)}
                                />
                              ) : (
                                <FaRegStar
                                  size={"1.25rem"}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleStarClick(ques.quesId)}
                                />
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
            {showNotes && (
              <Notes setShowNotes={setShowNotes} noteVal={noteVal} />
            )}
          </div>
        ) : (
          <div className="mt-60 flex justify-center items-center">
            <span className="loader"></span>
          </div>
        )}
      </div>
    </>
  );
};

export default TopicQuesTemplate;
