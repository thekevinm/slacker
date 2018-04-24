const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../lib/conn')
const uuid = require('uuid')
const jwt = require('jsonwebtoken')
const config = require('config')
const sha1 = require('sha1')

router.post('/token', (req, res, next) => {
  const username = req.body.username
  const password = sha1(req.body.password)

  const sql = `
  SELECT * FROM users WHERE username = ? AND password = ?
`

  conn.query(sql, [username, password], (err, results, fields) => {
    if (results.length > 0) {
      const token = jwt.sign({user: username}, config.get('secret'))

      res.json({
        token: token
      })
    } else {
      res.status(401).json({
        message: 'Bad Username and/or Password'
      })
    }
  })

})

router.post('/register', (req, res, next) => {
  const username = req.body.username
  const password = sha1(req.body.password)

  const sql = `
SELECT count(1) FROM users WHERE username = ?
`

  conn.query(sql, [username], (err, results, fields) => {
    if (results.count > 0) {
      res.status(409).json({
        message: 'Username already taken'
      })
    } else {
      const token = jwt.sign({user: username}, config.get('secret'))
      const insertSql = `
INSERT INTO users (username, password) values (?, ?)
      `

      conn.query(insertSql, [username, password], (err, results, fields) => {
        res.json({
          message: 'User Created',
          token: token
        })
      })
    }
  })
})

// router.post('/token', (req, res, next) => {
//     const username = req.body.username
//     const password = sha1(req.body.password)

//     const sql = `
//         SELECT id FROM users WHERE username = ? AND password = ?
//     `
//     conn.query(sql, [username, password], (err, results, fields) => {
//         if(results.length > 0) {
//             const token = uuid()

//             const tokenSql = `INSERT users SET username = ? WHERE id = ?`

//             conn.query(tokenSql, [token, results[0].id], (err2, results2, fields2) => {
//                res.json({
//                     token: token
//                 }) 
//             })   
//         } else {
//             res.status(401).json({
//                 message: "Bad Username and Password"
//             })
//         }
//     })
// })

// router.post('/register', (req, res, next) => {
//     const username = req.body.username
//     const password = sha1(req.body.password)

//     const sql = `
//         SELECT count(1) FROM users WHERE username = ?
//     `
//     conn.query(sql, [username], (err, results, fields) => {
//         if(results.count > 0) {
//             res.status(409).json({
//                 message: "Username already taken"
//             })
//         } else {
//             const token = uuid()
//             const insertSql = `
//                 INSERT INTO users (username, password, token) VALUES (?,?,?)
//             `
//             conn.query(insertSql, [username, password, token], (err, results, fields) => {
//                 console.log(results)
//                 res.json({
//                     message: 'User Created',
//                     token: token
//                 })
//             })
//         }
//     })
// })



module.exports = router