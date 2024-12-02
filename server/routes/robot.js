const express = require("express");
const router = express.Router();

let receivedData = {}; // 배열 대신 객체로 변경

router.post('/datetime', (req, res) => {
    const { date, time } = req.body;

    let validatedDate = null;
    if (date) {
        validatedDate = date; 
    }

    let validatedTime = null;
    if (time) {
        validatedTime = time; 
    }

    const newData = {
        ...(validatedDate && { date: validatedDate }),
        ...(validatedTime && { time: validatedTime })  
    };
    receivedData = { ...receivedData, ...newData }; // 데이터를 덮어쓰기

    res.status(200).json({
        success: true,
        message: 'Date and time received and stored successfully.',
        data: newData
    }); 
});

router.post('/robot-control', (req, res) => {
    const { agv, robot_arm, ...otherData } = req.body;

    let validatedAgv = null;
    if (agv) {
        if (typeof agv === 'string') {
            validatedAgv = agv;
        } else {
            return res.status(400).json({ success: false, message: 'Invalid AGV data. Must be a string.' });
        }
    }

    let validatedRobotArm = null;
    if (robot_arm) {
        if (Array.isArray(robot_arm) && robot_arm.length === 7 && robot_arm.every(angle => typeof angle === 'number')) {
            validatedRobotArm = robot_arm;
        } else {
            return res.status(400).json({
                success: false,
                message: 'Invalid robot_arm data. Must be an array of 7 numbers.'
            });
        }
    }

    const newData = {
        ...(validatedAgv && { agv: validatedAgv }),
        ...(validatedRobotArm && { robot_arm: validatedRobotArm }),
        ...otherData
    };

    receivedData = { ...receivedData, ...newData }; // 데이터 덮어쓰기

    res.status(200).json({
        success: true,
        message: 'Robot control data received and stored successfully.',
        data: newData
    });
});


router.post('/robot-status', (req, res) => {
    const { agv, robot_arm, ...otherData } = req.body;

    let validatedAgv = null;
    if (agv) {
        if (typeof agv === 'string') {
            validatedAgv = agv;
        } else {
            return res.status(400).json({ success: false, message: 'Invalid AGV data. Must be a string.' });
        }
    }

    let validatedRobotArm = null;
    if (robot_arm) {
        if (Array.isArray(robot_arm) && robot_arm.length === 7 && robot_arm.every(angle => typeof angle === 'number')) {
            validatedRobotArm = robot_arm;
        } else {
            return res.status(400).json({
                success: false,
                message: 'Invalid robot_arm data. Must be an array of 7 numbers.'
            });
        }
    }

    const newData = {
        ...(validatedAgv && { agv: validatedAgv }),  
        ...(validatedRobotArm && { robot_arm: validatedRobotArm }), 
        ...otherData 
    };
    receivedData = { ...receivedData, ...newData }; // 데이터를 덮어쓰기

    res.status(200).json({
        success: true,
        message: 'Robot status received and stored successfully.',
        data: newData
    });
});

router.get('/data', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Retrieved stored data successfully.',
        data: receivedData // 전체 객체로 반환
    });
});

module.exports = router;
