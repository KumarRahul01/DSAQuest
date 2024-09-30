import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import TopicCard from "../components/TopicCard/TopicCard";

const LandingTemplate = ({ title, instructor }) => {
  return (
    <>
      <div className="bg w-full min-h-screen text-slate-50 selection:bg-[#ffbe25db] selection:text-slate-50">
        <div className="px-4 sm:px-5 md:px-14">
          <Navbar />
        </div>

        {/* main div */}
        <div className="px-4 sm:px-5 md:px-14 py-6">
          <div className="heading">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold tracking-wide mt-14">
              {`Welcome to ${title} DSA Sheet`}
            </h1>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide mt-4">{`By - ${instructor}`}</h1>
          </div>

          <div className="w-full h-fit flex items-center justify-center xs:items-start flex-wrap bg-rd-900 my-10 gap-10 xs:gap-10 lg:gap-24">
            <TopicCard tag={"Arrays"} path={"arrays"} />
            <TopicCard tag={"Strings"} path={"strings"} />
            <TopicCard tag={"2D Arrays"} path={"2d-arrays"} />
            <TopicCard tag={"Linked List"} path={"linked-list"} />
            <TopicCard tag={"Greedy"} path={"greedy"} />
            <TopicCard tag={"Backtracking"} path={"backtracking"} />
            <TopicCard tag={"Stack & Queues"} path={"stack-and-queues"} />
            <TopicCard
              tag={"Searching & Sorting"}
              path={"searching-and-sorting"}
            />

            {/* updated */}
            <TopicCard tag={"Binary Trees"} path={"binary-trees"} />
            <TopicCard
              tag={"Binary Search Trees"}
              path={"binary-search-trees"}
            />
            <TopicCard tag={"Heaps & Hashing"} path={"heaps-and-hashing"} />
            <TopicCard tag={"Graphs"} path={"graphs"} />
            <TopicCard tag={"Tries"} path={"tries"} />
            <TopicCard tag={"DP"} path={"dp"} />
            <TopicCard tag={"Bit Manipulation"} path={"bit-manipulation"} />
            <TopicCard tag={"Segment Trees"} path={"segment-trees"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingTemplate;
