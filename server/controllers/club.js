import Club from "../models/Club.js";

export const getClubs = async (req, res) => {
   try {
      const clubs = await Club.find();
      res.status(200).json({
         status: "success",
         results: users.length,
         clubs,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};
