const UploadVisa = require("../models/uploadVisaModel");
const Traveler = require("../models/applyVisaModel");

exports.addUploadVisa = async (req, res) => {
  try {
    const { bookingId } = req.body;
    const { visa } = req.files;

    const uploadVisa = await Traveler.findOneAndUpdate(
      { bookingId: bookingId },
      {
        $set: { visa: visa[0].filename },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    if (!uploadVisa) {
      return res.status(404).json({ error: "Traveler not found" });
    }


    await uploadVisa.save();
    res.status(200).json({
      message: "Visa Upload successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to upload Visa" });
  }
};
exports.addCoVisa = async (req, res) => {
  try {
    const { bookingId } = req.body;

    const visa = req.files.find(
      (file) => file.fieldname === `visa`
    );
    uploadVisa = await Traveler.findOneAndUpdate(
      { "coTravelers.bookingId": bookingId },
      {
        $set: { "coTravelers.$.visa":  visa.filename },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    if (!uploadVisa) {
      return res.status(404).json({ error: "Traveler not found" });
    }


    // await uploadVisa.save();
    res.status(200).json({
      success: true,
      message: "Visa Upload successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to upload Visa" });
  }
};

// exports.getVisaByBookingId = async (req, res) => {
//   try {
//     const { bookingId } = req.body;
//     const visa = await UploadVisa.find({ bookingId: bookingId });
//     res.status(200).json({
//       success: true,
//       visa,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Failed to Get Visa" });
//   }
// };
// exports.EditVisa = async (req, res) => {
//   try {
//     let { bookingId } = req.body;
//     let { visa } = req.files;
//     updateVisa = await UploadVisa.findOneAndUpdate(
//       {
//         bookingId: bookingId,
//       },
//       {
//         $set: { visa: visa[0].filename },
//       },
//       {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false,
//       }
//     );
//     if (!updateVisa) {
//       return res.status(404).json({ error: "Visa not found" });
//     }

//     res.status(200).json({
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: "Failed to Get Visa" });
//   }
// };
