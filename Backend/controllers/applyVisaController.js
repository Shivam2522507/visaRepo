const Traveler = require("../models/applyVisaModel");
const CounterTable = require("../models/counterTable");

exports.addMainTraveler = async (req, res) => {
  try {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear()).padStart(4, "0");

    const {
      visaType,
      onwardDate,
      returnDate,
      numberOfPassengers,
      title,
      firstName,
      lastName,
      dob,
      nationality,
      passportNo,
      contactNo,
      email,
      totalPrice,
      userId,
    } = req.body;
    const {
      photograph,
      passport,
      qualifyingCriteria,
      addressProof,
      panCard,
      returnTicket,
      hotelConfirmation,
    } = req.files;

    const counterTable = await CounterTable.findOneAndUpdate(
      { id: "autoval" },
      { $inc: { seq: 1 } },
      { new: true }
    );

    if (counterTable === null) {
      const newval = new CounterTable({ id: "autoval", seq: 1 });
      newval.save();
    } else {
      // Create a new Traveler
      const mainTraveler = new Traveler({
        bookingId:
          "MGDBX" +
          day +
          month +
          year +
          String(counterTable.seq).padStart(2, "0"),
        userId,
        visaType,
        onwardDate,
        returnDate,
        numberOfPassengers,
        title,
        firstName,
        lastName,
        dob,
        nationality,
        passportNo,
        contactNo,
        email,
        bookingDate: new Date(),
        documents: {
          photograph: photograph[0].filename,
          passport: passport[0].filename,
          qualifyingCriteria: qualifyingCriteria[0].filename,
          addressProof: addressProof[0].filename,
          panCard: panCard[0].filename,
          returnTicket: returnTicket[0].filename,
          hotelConfirmation: hotelConfirmation[0].filename,
        },
        totalPrice,
      });

      // Save the main Traveler
      await mainTraveler.save();
      res.status(200).json({
        message: "Main traveler details saved successfully",
        mainTravelerId: mainTraveler._id,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save main traveler details" });
  }
};

exports.addCoTraveler = async (req, res) => {
  try {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear()).padStart(4, "0");

    const coTravelersData = req.body;
    const { mainTravelerId } = req.body;

    const mainTraveler = await Traveler.findById(mainTravelerId);

    if (!mainTraveler) {
      return res.status(404).json({ message: "Main traveler not found" });
    }

    for (let i = 0; i < coTravelersData.title.length; i++) {
      // gettin the seq
      const counterTable = await CounterTable.findOneAndUpdate(
        { id: "autoval" },
        { $inc: { seq: 1 } },
        { new: true }
      );

      const photographFile = req.files.find(
        (file) => file.fieldname === `photograph[${i}]`
      );
      const passportFile = req.files.find(
        (file) => file.fieldname === `passport[${i}]`
      );
      const qualifyingCriteriaFile = req.files.find(
        (file) => file.fieldname === `qualifyingCriteria[${i}]`
      );
      const addressProofFile = req.files.find(
        (file) => file.fieldname === `addressProof[${i}]`
      );
      const panCardFile = req.files.find(
        (file) => file.fieldname === `panCard[${i}]`
      );
      const returnTicketFile = req.files.find(
        (file) => file.fieldname === `returnTicket[${i}]`
      );
      const hotelConfirmationFile = req.files.find(
        (file) => file.fieldname === `hotelConfirmation[${i}]`
      );

      const coTraveler = {
        title: coTravelersData.title[i],
        firstName: coTravelersData.firstName[i],
        lastName: coTravelersData.lastName[i],
        dob: coTravelersData.dob[i],
        nationality: coTravelersData.nationality[i],
        passportNo: coTravelersData.passportNo[i],
        contactNo: coTravelersData.contactNo[i],
        email: coTravelersData.email[i],
        status: "Processing",
        bookingId:
          "MGDBX" +
          day +
          month +
          year +
          String(counterTable.seq).padStart(2, "0"),

        documents: {
          photograph: photographFile ? photographFile.filename : "",
          passport: passportFile ? passportFile.filename : "",
          qualifyingCriteria: qualifyingCriteriaFile
            ? qualifyingCriteriaFile.filename
            : "",
          addressProof: addressProofFile ? addressProofFile.filename : "",
          panCard: panCardFile ? panCardFile.filename : "",
          returnTicket: returnTicketFile ? returnTicketFile.filename : "",
          hotelConfirmation: hotelConfirmationFile
            ? hotelConfirmationFile.filename
            : "",
        },
      };
      mainTraveler.coTravelers.push(coTraveler);
    }

    await mainTraveler.save();

    res.status(200).json({
      message: "co traveler details saved successfully",
      mainTravelerId: mainTraveler._id,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save co-traveler details" });
  }
};

exports.getTravelerById = async (req, res) => {
  try {
    const { mainTravelerId } = req.body;
    const mainTraveler = await Traveler.findById(mainTravelerId);

    if (!mainTraveler) {
      return res.status(500).json({
        success: false,
        message: "Traveler Not Found",
      });
    }

    res.status(200).json({
      message: "Main traveler details successfully",
      mainTraveler: mainTraveler,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to save main traveler details" });
  }
};

exports.getAllTraveler = async (req, res) => {
  try {
    const travelers = await Traveler.find();
    res.status(200).json({
      success: true,
      travelers,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

exports.addOtherTravelerFields = async (req, res) => {
  try {
    let mainTraveler = await Traveler.findById(req.params.id);

    if (!mainTraveler) {
      return res.status(500).json({
        success: false,
        message: "Traveler Not Found",
      });
    }
    mainTraveler = await Traveler.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      mainTravelerId: mainTraveler._id,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

exports.updateCoTravelerStatus = async (req, res) => {
  try {
    let { passportNo, status } = req.body;

    updateCoTraveler = await Traveler.findOneAndUpdate(
      { "coTravelers.passportNo": passportNo },
      {
        $set: { "coTravelers.$.status": status },
      },
      {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      }
    );

    if (!updateCoTraveler) {
      return res.status(404).json({ error: "Co-traveler not found" });
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

exports.searchTraveler = async (req, res) => {
  try {
    const travelers = await Traveler.find({
      $or: [
        { firstName: { $regex: req.params.key } },
        { lastName: { $regex: req.params.key } },
        { contactNo: { $regex: req.params.key } },
        { passportNo: { $regex: req.params.key } },
        { bookingId: { $regex: req.params.key } },
      ],
    });
    res.status(200).json({
      success: true,
      travelers,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

exports.deleteTraveler = async (req, res) => {
  try {
    const { id } = req.body;

    const traveler = await Traveler.findOneAndDelete({ _id: id });

    if (!traveler) {
      return res.status(404).json({ error: "Traveler not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Traveler deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Unable to delete the Traveler" });
  }
};

exports.filterByVisaType = async (req, res) => {
  try {
    const travelers = await Traveler.find({
      $or: [{ visaType: { $regex: req.params.key } }],
    });
    res.status(200).json({
      success: true,
      travelers,
    });
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};

exports.filterByDate = async (req, res) => {
  try {
    const { startDate, endDate } = req.body;

    if (startDate && endDate) {
      const travelers = await Traveler.find({
        bookingDate: {
          $gte: startDate,
          $lte: endDate,
        },
      });

      res.status(200).json({
        success: true,
        travelers,
      });
    } else {
      res.status(400).json({
        success: false,
        msg: "Start date and end date are required.",
      });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};
