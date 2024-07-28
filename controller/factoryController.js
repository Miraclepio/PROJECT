// // factoryController.js
// const Staff = require('../model/factoryModel');


// // declare the date
// const date= ()=>{
// return new Date().toLocaleDateString('en-US', { 
//     weekday: 'long' ,
//     year: 'numeric', 
//     month: 'long', 
//     day: 'numeric' 
// }) + ' ' + new Date().toLocaleTimeString()};
// // console.log (date())


// // capitalising the fullname
// const capitalizeFullName = (fullname) => {
//     return fullname.split(' ')
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//         .join(' ');
// };


// // Create Staff
// exports.createStaff = async (req, res) => {
//     try {
        
//         const {fullname,age,MaritalStatus,address,gender,academicQualification,stateOfOrigin}=req.body

        
//         const newStaff = new Staff({
//             fullname:capitalizeFullName(fullname),
//             age,
//             MaritalStatus,
//             address,
//             gender,
//             academicQualification,
//             stateOfOrigin
//         });
//         await newStaff.save();
//         res.status(201).json({message:`Succesfully created. Welcome on board ${capitalizeFullName(fullname)}!`,New_staff:newStaff});
//     } catch (error) {
//         res.status(500).json({ error: error.message }); 
//     }
// };

// // Update Staff
// exports.updateStaff = async (req, res) => {
//     try {
//            const {fullname,age,MaritalStatus,address,gender,academicQualification,stateOfOrigin}=req.body
//         const staff = await Staff.findByIdAndUpdate(req.params.id,{ 
//             fullname,
//             age,
//             MaritalStatus,
//             address,
//             gender,
//             academicQualification,
//             stateOfOrigin


//         }, { new: true });
//         if (!staff) return res.status(404).json({ error: "Staff not found" });
//         res.status(200).json({message:`staff updated successfully`,data:staff});
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Replace Staff
// exports.replaceStaff = async (req, res) => {
//     try {

//         const staff = await Staff.findByIdAndDelete(req.params.id);
//         const {fullname}=staff
//         staff.fullname=capitalizeFullName(fullname)
//         if (!staff) return res.status(404).json({ error: "Staff not found" });
//         // const newStaff = new Staff(req.body);
//         // await newStaff.save();
//         res.status(200).json({message:` ${capitalizeFullName(fullname)} has been successfully deleted from the Database`});
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Get Particular Staff Information
// exports.getStaffInfo = async (req, res) => {
//     try {
//         const {id}=req.params
//         const staff = await Staff.findById(req.params.id);
//         const {fullname}=staff;
//         staff.fullname=capitalizeFullName(fullname)
//         if(!id){
//             return res.status(404).json({message:'id not found'})
//         }
//         if (!staff) return res.status(404).json({ error: "Staff not found" });
//         res.status(200).json({message:`These are all the information of ${capitalizeFullName(fullname)} below:`,data:staff});
//     } catch (error) {
//         res.status(500).json({ error: error.message }); 
//     }
// };

// // Log Resumption Time
// exports.resumeTime = async (req, res) => {
//     try {
//         const staff = await Staff.findById(req.params.id);
//         const {fullname}=staff;
//         staff.fullname=capitalizeFullName(fullname)
//         if (!staff) return res.status(404).json({ error: "Staff not found" }); 
//          staff.resumptionTime = date();
//         //  console.log(date())
//         await staff.save();
//          res.status(200).json({message:`${capitalizeFullName(fullname)} successfully checked in.`,Staff_info:staff});
//     } catch (error) { 
//         res.status(500).json({ error: error.message }); 
//     }
// };


// // Log Closure Time
// exports.closeTime = async (req, res) => {
//     try {
//         const staff = await Staff.findById(req.params.id);
//         const {fullname}=staff;
//         staff.fullname=capitalizeFullName(fullname)
//         if (!staff) return res.status(404).json({ error: "Staff not found" });
//         staff.closureTime =  date();
//         await staff.save();
//         res.status(200).json({message:`${capitalizeFullName(fullname)} successfully checked out.`,'Staff_info':staff});
//     } catch (error) {
//         res.status(500).json({ error: error.message }); 
//     }
// }; 


// // get all

// exports.getAllStaffInfo = async (req, res) => {
//     try {
//         const staff = await Staff.find().sort({createdAt:1});
        
//         if (staff===0 ||staff <=0) return res.status(404).json({ error: "Staff not found" });
//         res.status(200).json({message:"All staffs information", Total_of:staff.length + " staffs in the industry",staffs_info: staff});
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// // Replace Staff function
// exports.replaceAStaff = async (req, res) => {
//     try {
       
//         const { id } = req.params;
//         const replacedStaff =await Staff.findByIdAndUpdate(id, req.body, {
//             new: true,
            
//         });
//         const {fullname}=replacedStaff;
//         replacedStaff.fullname=capitalizeFullName(fullname)
//         if (!replacedStaff) {
//             return res.status(404).json({
//                 message: `Staff with id ${id} not found.`,
//             });
//         }
//         res.status(200).json({
//             message: `${capitalizeFullName(fullname)} replaced successfully.`, 
//             data: replacedStaff,
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: error.message,
//         });
//     }
// };



// // Log Closure Time
// exports.logClosureTime = async (req, res) => {
//     try {
//         const staff = await Staff.findById(req.params.id);
//         // const { fullname } = staff;
//         // staff.fullname = capitalizeFullName(fullname);
//         if (!staff) return res.status(404).json({ error: "Staff not found" });
        
//         // const closureTime = date();
//         staff.time.push(new Date())
//         await staff.save()
        
//         res.status(200).json({ 
//             message: `${capitalizeFullName(fullname)} successfully checked out.`,
//             ClosureTime: staff.time
//         });
//     } catch (error) { 
//         res.status(500).json({ error: error.message });   
//     }
// }; 

// // Log Resumption Time
// exports.logResumptionTime = async (req, res) => {
//     try {
//         const staff = await Staff.findById(req.params.id);
//         const { fullname } = staff;
//         staff.fullname = capitalizeFullName(fullname);
//         if (!staff) return res.status(404).json({ error: "Staff not found" });
        
//         const resumptionTime = date();
       
        
//         await staff.save();
        
//         res.status(200).json({ 
//             message: `${capitalizeFullName(fullname)} successfully checked in.`,
//             ResumptionTime: resumptionTime
//         });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };



const Staff = require('../model/factoryModel');

// Declare the date function
const date = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }) + ' ' + new Date().toLocaleTimeString();
};

// Capitalize the fullname
const capitalizeFullName = (fullname) => {
  return fullname
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// Create Staff
exports.createStaff = async (req, res) => {
  try {
    const { fullname, age, MaritalStatus, address, gender, academicQualification, stateOfOrigin } = req.body;

    const newStaff = new Staff({
      fullname: capitalizeFullName(fullname),
      age,
      MaritalStatus,
      address,
      gender,
      academicQualification,
      stateOfOrigin,
    });
    await newStaff.save();
    res.status(201).json({ message: `Successfully created. Welcome on board ${capitalizeFullName(fullname)}!`, new_staff: newStaff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Staff
exports.updateStaff = async (req, res) => {
  try {
    const { fullname, age, MaritalStatus, address, gender, academicQualification, stateOfOrigin } = req.body;
    const staff = await Staff.findByIdAndUpdate(req.params.id, {
      fullname: capitalizeFullName(fullname),
      age,
      MaritalStatus,
      address,
      gender,
      academicQualification,
      stateOfOrigin,
    }, { new: true });
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    res.status(200).json({ message: `Staff updated successfully`, data: staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Replace Staff
exports.replaceStaff = async (req, res) => {
  try {
    const staff = await Staff.findByIdAndDelete(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    res.status(200).json({ message: `${capitalizeFullName(staff.fullname)} has been successfully deleted from the database` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Particular Staff Information
exports.getStaffInfo = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    staff.fullname = capitalizeFullName(staff.fullname);
    res.status(200).json({ message: `These are all the information of ${staff.fullname} below:`, data: staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Log Resumption Time
exports.resumeTime = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    staff.resumptionTime = date();
    await staff.save();
    res.status(200).json({ message: `${capitalizeFullName(staff.fullname)} successfully checked in.`, staff_info: staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Log Closure Time
exports.closeTime = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    staff.closureTime = date();
    await staff.save();
    res.status(200).json({ message: `${capitalizeFullName(staff.fullname)} successfully checked out.`, staff_info: staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Staff Information
exports.getAllStaffInfo = async (req, res) => {
  try {
    const staff = await Staff.find().sort({ createdAt: 1 });
    if (!staff.length) return res.status(404).json({ error: "Staff not found" });
    res.status(200).json({ message: "All staff information", total: `${staff.length} staff in the industry`, staff_info: staff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Replace a Staff function
exports.replaceAStaff = async (req, res) => {
  try {
    const { id } = req.params;
    const replacedStaff = await Staff.findByIdAndUpdate(id, req.body, { new: true });
    if (!replacedStaff) return res.status(404).json({ error: `Staff with id ${id} not found.` });
    replacedStaff.fullname = capitalizeFullName(replacedStaff.fullname);
    res.status(200).json({ message: `${replacedStaff.fullname} replaced successfully.`, data: replacedStaff });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Log Closure Time with time array
exports.logClosureTime = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    staff.time.push(new Date());
    await staff.save();
    res.status(200).json({ message: `${capitalizeFullName(staff.fullname)} successfully checked out.`, closure_time: staff.time });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Log Resumption Time with date function
exports.logResumptionTime = async (req, res) => {
  try {
    const staff = await Staff.findById(req.params.id);
    if (!staff) return res.status(404).json({ error: "Staff not found" });
    staff.fullname = capitalizeFullName(staff.fullname);
    const resumptionTime = date();
    await staff.save();
    res.status(200).json({ message: `${capitalizeFullName(staff.fullname)} successfully checked in.`, resumption_time: resumptionTime });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

