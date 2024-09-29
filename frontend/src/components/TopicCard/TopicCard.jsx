import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ tag, path }) => {

  const [totalQues, setTotalQues] = useState(0);

  useEffect(()=>{
    axios
      .get(`https://dsa-quest-api.vercel.app/api/get-${path}-questions`)
      .then((res) => {
        setTotalQues(res.data.length)
      })
      .catch((err) => console.log(err));
  })

  return (
    <>
      <div
        className={`w-[90%] xs:w-fit flex flex-col xs:flex-row justify-center items-center md:justify-normal gap-6 xs:gap-10 lg:gap-20 p-4 pb-6 xs:p-6 border-2 rounded-md bg-gradient-to-r from-pink-600 to-orange-600`}
      >
        <div>
          <h2 className="w-full text-xl md:text-2xl font-semibold text-center xs:text-left">
            {tag}
          </h2>

          <h4 className="my-3 font-medium">
            Total Questions: <span>{totalQues}</span>
          </h4>
        </div>

        <div>
          <Link
          to={`/apna-college/${path}`}
            className="border-[3px] p-2 rounded-md font-semibold hover:text-zinc-950 hover:bg-[#ffbd25] hover:border-[#ffbd25] transition-all duration-150"
            // onClick={() => clickHandler(path)}
          >
            Start Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default TopicCard;
