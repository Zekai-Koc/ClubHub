import Activity from "../models/Activity.js";

export const getActivities = async (req, res) => {
   try {
      const activities = await Activity.find();
      res.status(200).json({
         status: "success",
         results: activities.length,
         data: activities,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getActivity = async (req, res) => {
   try {
      const activity = await Activity.findById(req.params.id);
      res.status(200).json({
         status: "success",
         activity,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createActivity = async (req, res) => {
   const activity = req.body;

   const newActivity = new Activity(activity);

   try {
      await newActivity.save();

      res.status(201).json(newActivity);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

export const updateActivity = async (req, res) => {
   const { id: _id } = req.params;
   const activity = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No activity with that id");

   const updatedActivity = await Activity.findByIdAndUpdate(_id, activity, {
      new: true,
   });

   res.json(updatedActivity);
};

export const deleteActivity = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No activity with that id");

   await Activity.findByIdAndRemove(id);

   res.json({ message: "Activity deleted successfully" });
};
