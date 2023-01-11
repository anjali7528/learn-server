const express = require('express')
const passport = require('passport')
const upload = require('../utils/multer')

const router = express.Router()

const { fetchStudents, markAttendence, facultyLogin, getAllSubjects,
    updatePassword, forgotPassword, postOTP, uploadMarks, updateProfile,createQuiz,getAllQuiz, getAllResult } = require('../controller/facultyController')
const { session } = require('passport')

router.post('/login', facultyLogin)

router.post('/forgotPassword', forgotPassword)

router.post('/postOTP', postOTP)

router.post('/updateProfile', passport.authenticate('jwt', { session: false }), upload.single("avatar") ,updateProfile)

router.post('/fetchStudents', passport.authenticate('jwt', { session: false }), fetchStudents)

router.post('/fetchAllSubjects', passport.authenticate('jwt', { session: false }), getAllSubjects)

router.post('/markAttendence', passport.authenticate('jwt', { session: false }), markAttendence)

router.post('/uploadMarks', passport.authenticate('jwt', { session: false }),uploadMarks)

router.post('/updatePassword', passport.authenticate('jwt', { session: false }), updatePassword)

router.post('/createQuiz', createQuiz )

router.get('/allQuiz',getAllQuiz)
router.get('/QuizResult',getAllResult)

module.exports = router
