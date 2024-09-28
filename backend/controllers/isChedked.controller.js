// import { IsChecked } from "../models/isChecked.model.js";

// let statusData = {}; // Temporary in-memory storage, use a database in production

// export const savestatus = async (req, res) => {
//   const { quesId, userId, tag, isChecked } = req.body;

//   try {
//     // Find the already checked for this question and user
//     let alreadyChecked = await IsChecked.findOne({ quesId, userId, tag });

//     if (alreadyChecked) {
//       // Update the checked status if it exists
//       if (alreadyChecked.isChecked === true) {
//         alreadyChecked.isChecked = false;
//         res.status(201).json({ message: "Unchecked successfully!" });
//       } else {
//         alreadyChecked.isChecked = true;
//         res.status(201).json({ message: "Checked successfully!" });
//       }
//       await alreadyChecked.save();
//     } else {
//       // cheage the status to checked if not exists
//       const newChecked = new IsChecked({
//         quesId,
//         userId,
//         tag,
//         isChecked
//       });
//       await newChecked.save()
//       res.status(200).json({ message: "Checked successfully!" })
//     }

//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// // Function to fetch the checkbox status based on quesId, userId, and tag
// export const getstatus = async (req, res) => {
//   const { userId } = req.query;

//   try {
//     // Find the status for the specific question, user, and tag
//     let status = await IsChecked.findOne({ userId });

//     if (status) {
//       res.status(200).json({ isChecked: status.isChecked });
//     } else {
//       // If no record exists, return unchecked (false)
//       res.status(200).json({ isChecked: false });
//     }
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };