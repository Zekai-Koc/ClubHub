export const deleteOne = async (Model, id) => {
   if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No document found with id: " + id);

   await Model.findByIdAndRemove(id);

   res.json({ message: "Document deleted successfully." });
};
