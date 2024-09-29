// const searchQuestion = async (val) => {
//   const searchQues = await axios.get(
//     `http://localhost:8000/api/questions/get-${topic}-questions`
//   );

//   const ldata = searchQues.data;
//   const fdata = [];

//   ldata.map((li) => {
//     if (li.question.toLowerCase().includes(val)) {
//       fdata.push(li);
//       setQues(fdata);
//     }
//   });
// };

// <div className="px-4 sm:px-5 md:px-14 py-6">
//   {/* Serach Box */}
//   <div className="flex md:flex-row flex-col gap-6">
//     <input
//       type="search"
//       className="inline-block py-2 px-6 w-full md:w-[90%] bg-transparent border rounded-md outline-none placeholder:text-slate-400 placeholder:font-medium"
//       value={searchQues}
//       placeholder="Eg: reverse"
//       onChange={(e) => setSearchQues(e.target.value)}
//     />
//     <div className="flex items-center justify-center">
//       <button
//         className="inline-block border-[2px] px-2 md:py-1 rounded-md text-lg font-semibold hover:text-zinc-950 hover:bg-[#ffbd25] transition-all duration-150 xxs:w-[30%] md:w-[100%]"
//         onClick={() => searchQuestion(searchQues)}
//       >
//         Search
//       </button>
//     </div>
//   </div>
// </div>;
