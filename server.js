const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
// const url = "mongodb://127.0.0.1:27017/runoob"
const url = "mongodb://0.0.0.0:27017/"
const bodyParser = require('body-parser')
const fs = require("fs")
// 创建 application/x-www-form-urlencoded 编码解析
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const multer  = require('multer')
const ObjectId = require('mongodb').ObjectID
// g-zip
const compression = require('compression')

// g-zip
app.use(compression())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(multer({ dest: '/tmp/'}).array('file'))
app.use(express.static('dist'))

//  登录
app.post('/api/login', urlencodedParser, function (req, res) {
  console.log("/登录请求")
  // console.log(req)
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    let dbo = db.db("airbag")
    let whereStr = {
      "name": req.body.name,
      "password": req.body.password
    }
    console.log(whereStr)
    // 查询条件
    dbo.collection("user").find(whereStr).toArray(function (e, r) {
      if (e) throw e
      console.log("/登录成功")
      console.log(r)
      if (r.length > 0) {
        res.send(JSON.stringify({access: true}))
      } else {
        res.send(JSON.stringify({access: false}))
      }
      db.close()
    })
  })
})

//  查询所有文章
app.get('/api/list', function (req, res) {
  console.log("/查询请求")
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    let dbo = db.db("airbag")
    let whereStr = {
      "flag": 0
    }
    var mysort = { date: -1 }
    // 查询条件
    dbo.collection("ulysses").find(whereStr).sort(mysort).toArray(function (e, r) {
      if (e) throw e
      console.log(r)
      res.send(JSON.stringify(r))
      db.close()
    })
  })
})

//  查询单篇文章
app.get('/api/markdown', function (req, res) {
  console.log("/单条请求")
  console.log(req.query)
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    let dbo = db.db("airbag")
    let whereStr = {
      "_id": ObjectId(req.query.id),
      "flag": 0
    }
    // 查询条件
    console.log(whereStr)
    dbo.collection("ulysses").find(whereStr).toArray(function (e, r) {
      if (e) throw e
      console.log(r)
      res.send(JSON.stringify(r))
      db.close()
    })
  })
})

//  新增文章
app.get('/api/add', function (req, res) {
  console.log("/发布请求")
  console.log(req.query)
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    var dbo = db.db("airbag")
    var myobj = {
      "title": req.query.title,
      "path": req.query.path,
      "date": req.query.date,
      "markdown": req.query.markdown,
      "flag": 0
    }
    dbo.collection("ulysses").insertOne(myobj, function (e, r) {
      if (e) throw e
      console.log("文章发布成功!")
      res.send('文章发布成功!')
      db.close()
    })
  })
})

// 上传图片
app.post('/api/upload', function (req, res) {
  // 上传的文件信息
  console.log(req.files[0])
  var des_file = __dirname + "/public/images/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function (err, data) {
    fs.writeFile(des_file, data, function (err) {
      if (err) {
        console.log(err)
      } else {
        response = {
          message: '文件上传成功!',
          filename: req.files[0].originalname,
          path: "/images/" + req.files[0].originalname
        }
      }
      console.log(response)
      res.end(JSON.stringify(response))
    })
  })
})

// 删除文章
app.get('/api/del', function (req, res) {
  console.log("/删除请求")
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    var dbo = db.db("airbag")
    var whereStr = {
      "_id": ObjectId(req.query.id)
    }
    // 查询条件
    var updateStr = {
      $set: {
        "flag": 1
      }
    }
    dbo.collection("ulysses").updateOne(whereStr, updateStr, function (e, r) {
      if (e) throw e
      console.log("文档删除成功!")
      res.send(JSON.stringify(r))
      db.close()
    })
  })
})

// 更新文章
app.get('/api/update', function (req, res) {
  console.log("/更新请求")
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    var dbo = db.db("airbag")
    var whereStr = {
      "_id": ObjectId(req.query.id)
    }
    // 查询条件
    var updateStr = {
      $set: {
        "title": req.query.title,
        "path": req.query.path,
        "date": req.query.date,
        "markdown": req.query.markdown
      }
    }
    console.log(updateStr)
    dbo.collection("ulysses").updateOne(whereStr, updateStr, function (e, r) {
      if (e) throw e
      console.log("文档更新成功!")
      res.send(JSON.stringify(r))
      db.close()
    })
  })
})

// 查询机柜数据
app.get('/api/cabinet', function (req, res) {
  console.log("/查询请求")
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    let dbo = db.db("airbag")
    let whereStr = {}
    // 查询条件
    dbo.collection("cabinet").find(whereStr).toArray(function (e, r) {
      if (e) throw e
      console.log(r)
      res.send(JSON.stringify(r))
      db.close()
    })
  })
})

// 更新文章
app.get('/api/updateCabinet', function (req, res) {
  console.log("/更新请求")
  MongoClient.connect(url, function (err, db) {
    if (err) throw err
    var dbo = db.db("airbag")
    var whereStr = {
    }
    // 查询条件
    var updateStr = {
      $set: {
        "partSize": req.query.partSize,
        "describ": JSON.parse(req.query.describ),
        "equipInfo": JSON.parse(req.query.equipInfo)
      }
    }
    console.log(req.query.describ)
    dbo.collection("cabinet").updateOne(whereStr, updateStr, function (e, r) {
      if (e) throw e
      console.log("机柜更新成功!")
      res.send(JSON.stringify(r))
      db.close()
    })
  })
})

let server = app.listen(80, '0.0.0.0', function () {
  let host = server.address().address
  let port = server.address().port
  console.log(server.address())
  console.log(host)
  console.log(port)
  console.log("应用实例成功，访问地址为 http://%s:%s", host, port)
})