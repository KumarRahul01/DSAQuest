import { IsChecked } from "../models/isChecked.model.js";

let statusData = {}; // Temporary in-memory storage, use a database in production

export const savestatus = async (req, res) => {
  const { quesId, userId, tag, isChecked } = req.body;
  console.log(quesId, userId, tag, isChecked);

  try {
    // Find the already checked for this question and user
    let alreadyChecked = await IsChecked.findOne({ quesId, userId, tag });

    if (alreadyChecked) {
      // Update the checked status if it exists
      alreadyChecked.isChecked = false;
      await alreadyChecked.save();
      res.status(201).json({ message: "Unchecked successfully!" });
    } else {
      // cheage the status to checked if not exists
      const newChecked = new IsChecked({
        quesId,
        userId,
        tag,
        isChecked
      });
      await newChecked.save()
      res.status(200).json({ message: "Checked successfully!" })
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getstatus = async (req, res) => {

  // const data = Object.entries(statusData).map(([quesId, isChecked]) => ({
  //   quesId,
  //   isChecked,
  // }));
  // res.status(200).json(data);

  // const { quesId, userId, tag } = req.query;
  try {
    const quesStatus = await IsChecked.findOne({ quesId, userId, tag });
    if (quesStatus) {
      res.status(200).json(quesStatus);
    } else {
      res.status(404).json({ message: "question status not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving note", error });
  }
}