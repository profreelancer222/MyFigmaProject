const Job = require("../models/job");
const isEmpty = require("is-empty");

const postJob = async (req, res) => {
    try {        
        const {
            companyName,
            managerName,
            email,
            address,
            city,
            state,
            zip,
            salaryAmount,
            title,
            description,
        } = req.body;
        console.log(req.body)
        if (isEmpty(companyName) || isEmpty(managerName) || isEmpty(email) || isEmpty(address) || isEmpty(city) || isEmpty(state) || isEmpty(zip) || isEmpty(salaryAmount)  || isEmpty(title) || isEmpty(description)) {
            return res.sendStatus(400);
        }
        await Job.create({
                companyName: companyName,
                managerName: managerName,
                email: email,
                address: address,
                city: city,
                state: state,
                zip: zip,
                salaryAmount: salaryAmount,
                title: title,
                description: description
            })
            .then(res => {
                res.json(res.data);
                console.log(res.json(res))
            })
            .catch(err => res.json(err))
    } catch (err) {
        res.sendStatus(500);
        console.error(err);
    }
}
const getJob = async (req, res) => {
    try {
        await Job.findAll({}).then(result => res.json(result)).catch(err => res.json(err))
    } catch (error) {
        console.error('Error find user:', error);
    }
}
module.exports = {
    postJob,
    getJob
}