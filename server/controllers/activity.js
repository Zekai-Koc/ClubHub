import Activity from "../models/Activity.js";

export const getActivities = async (req, res) => {
   try {
      const activities = await Activity.find();
      res.status(200).json({
         status: "success",
         results: activities.length,
         activities,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
