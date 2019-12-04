const express = require('express');
const usersData = require('../data/users.json');
const router = express.Router()





router.post('/login', (req, res, next) =>{
    const {email, password} = req.body;
    const {users} = usersData;
    const currentUser = users.find(user => user.email === email && user.password === password);
    if (!currentUser) return res.status(401).json({message: "User is NOT authorized", redirect: false});
    if (currentUser.admin) return res.status(200).json({message: "User admin is authorized", admin: true, redirect: true});
    res.status(200).json({message: "User is authorized", admin: false, redirect: true});
})


module.exports = router;