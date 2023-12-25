import User from "../models/User.js";

export const getUsers = async (req, res) => {
   try {
      const users = await User.find();
      res.status(200).json({
         status: "success",
         results: users.length,
         users,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const getUser = async (req, res) => {
   try {
      const user = await User.findById(req.params.id);
      res.status(200).json({
         status: "success",
         user,
      });
   } catch (error) {
      res.status(404).json({ message: error.message });
   }
};

export const createUser = async (req, res) => {
   const user = req.body;

   const newUser = new User(user);

   try {
      await newUser.save();

      res.status(201).json(newUser);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};
