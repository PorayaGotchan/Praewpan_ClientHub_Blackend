const db = require('../models');
const user = db.user;

exports.findAllClientHub = (req, res) => {//This is API for get all user
    //res.send("Find");
    try {
        user.findAll() //เป้น Method ของ Sequelize ที่ใช้ในการดึงข้อมูลทั้งหมดจาก Database
            .then(data => {
                res.json(data); //ส่งข้อมูลทั้งหมดที่ดึงมาจาก Database กลับไปที่ Frontend
            })
            .catch(error => {
                res.json({ message: error.message }); //แสดง Error ที่เกิดขึ้น
            });

    } catch (error) {
        console.log(error);
    }
};

exports.createClientHub = (req, res) => { //This is API for create user
    try {
        if (!req.body.name) {
            res.status(400).json({ message: "Not empty!" })
            return
        };

        const newClientHub = {
            name: req.body.name, //รับ Data มาจาก Frontend
            customernumber: req.body.customernumber, //รับ Data มาจาก Frontend
            email: req.body.email, //รับ Data มาจาก Frontend    
            date: req.body.date,
            total: req.body.total,
        }
        user.create(newClientHub) //เรียกใช้งาน Model ที่เราสร้างไว้ และนำไปใช้สร้าง table ใน Database
            .then(data => {
                res.status(200).json({ message: "ClientHub created!" }) //
            })
            .catch(error => {
                res.status(500).json({ message: error.message })
            });

    } catch (error) {
        console.log(error.message)
    };
};

exports.findClientHubById = (req, res) => {
    try {
        const id = req.params.id; //รับค่า id ที่ส่งมาจาก Frontend
        user.findByPk(id) //ใช้ Sequelize ในการหาจาก ID ที่รับมา
            .then(data => {
                res.status(200).json(data); //ถ้าเจอ ส่ง Status 200 พร้อมกับข้อมูลจากที่ดึงมา
            })
            .catch(err => {
                res.status(404).json({message:'error'}) //ถ้าไม่เจอ ส่ง Status 404 Not found
            })

    } catch (error) {
        console.log(error.message);

    }


};

exports.updateClientHubById = (req, res) => {
    try {
        const id = req.params.id;
        const updateClientHub = {
            name: req.body.name, 
            customernumber: req.body.customernumber, 
            email: req.body.email,
            date: req.body.date,  
            total: req.body.total,
        }
        user.update(updateClientHub, { where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "Updated Succesfully!" })
                }
                else {
                    res.status(400).json({ message: "Updated Failed!" })
                }

            })
            .catch(err => {
                res.status(500).json({ message: err.message })
            })
    } catch (error) {
        console.log(error);

    }
};

exports.deleteClientHubById = (req, res) => {
    try {
        const id = req.params.id;
        user
            .destroy({ where: { id: id } })
            .then(data => {
                if (data == 1) {
                    res.status(200).json({ message: "ClientHub deleted Successfully!" });
                }
                else {
                    res.status(200).json({ message: "ClientHub deleted Failed!" });
                }
            })
            .catch(err => {
                res.status(404).json({ message: err.message })
            });

    } catch (err) {
        console.log(err);
    }
};