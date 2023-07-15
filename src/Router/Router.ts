import { Router } from "express"
const device_router = require("./device")


const router = Router()

router.use("/user")
router.use("/type")
router.use("/brand")
router.use("/device",device_router)


module.exports = router