import Club from "../models/Club.js";

export const getClubs = async (req, res) => {
   try {
      const clubs = await Club.find();
      res.status(200).json({
         status: "success",
         results: clubs.length,
         clubs,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getClub = async (req, res) => {
   try {
      const club = await Club.findById(req.params.id);
      res.status(200).json({
         status: "success",
         club,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createClub = async (req, res) => {
   const club = req.body;

   const newClub = new Club(club);

   try {
      await newClub.save();

      res.status(201).json(newClub);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};
