import Club from "../models/Club.js";

export const getClubs = async (req, res) => {
   try {
      const clubs = await Club.find();
      res.status(200).json({
         status: "success",
         results: clubs.length,
         data: clubs,
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

export const updateClub = async (req, res) => {
   const { id: _id } = req.params;
   const club = req.body;

   if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No club with that id");

   const updatedClub = await Club.findByIdAndUpdate(_id, club, {
      new: true,
   });

   res.json(updatedClub);
};

export const deleteClub = async (req, res) => {
   const { id } = req.params;

   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No club with that id");

   await Club.findByIdAndRemove(id);

   res.json({ message: "Club deleted successfully." });
};
