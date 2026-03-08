import { Router } from "express"
import Chat from "../models/Chat"
import ChatParticipant from "../models/ChatParticipant"
import ChatMessage from "../models/ChatMessage"
import { ForeignKeyConstraintError, ValidationError, Op } from "sequelize"

const router = Router()

// router.get("/", async (req, res) => {
//   const { user_id } = req.body

//   console.log({ user_id })
//   try {
//     const chatList = await ChatParticipant.findAll({
//       where: {
//         user_id: +user_id,
//       },
//       limit: 10,
//     })

//     const chatIds = chatList.map((chat) => chat.dataValues.chat_id)

//     const messages = await ChatMessage.findAll({
//       where: {
//         chat_id: chatIds,
//       },
//     })

//     console.log({
//       messages,
//     })

//     res.json({
//       is_success: true,
//       data: {
//         chats: "ok",
//       },
//     })
//   } catch (err) {
//     let status = 400
//     let message = "Unknown error"
//     console.log({ err })

//     res.status(status).json({
//       is_success: false,
//       message,
//     })
//   }
// })

router.post("/", async (req, res) => {
  const { user_id } = req.body
  try {
    const {
      dataValues: { id },
    } = await Chat.create()
    const chatParticipant = await ChatParticipant.create({
      user_id,
      chat_id: id,
      is_owner: true,
    })

    res.status(201).json({
      is_success: true,
      data: {
        id,
      },
    })
  } catch (err) {
    console.log({ err })
    let message = "Unknown error"

    if (err && typeof err === "object" && "name" in err) {
      const errorName = err.name
      if (errorName === "SequelizeValidationError") {
        message = "User doesn't exist"
      }
    }

    res.status(400).json({
      is_success: false,
      message,
    })
  }
})

router.get("/:chat_id/participants", async (req, res) => {
  const { chat_id } = req.params
  try {
    const data = await ChatParticipant.findAll({
      where: {
        chat_id: +chat_id,
      },
    })

    if (!data.length) {
      res.status(404).json({
        is_success: false,
        message: "Chat not found",
      })
      return
    }

    res.json({
      is_success: true,
      data: {
        users: data.map((item) => item.dataValues),
      },
    })
  } catch (err) {
    let message = "Unknown error"
    let status = 400

    res.status(status).json({
      is_success: false,
      message,
    })
  }
})

router.post("/:chat_id/participants", async (req, res) => {
  const { chat_id } = req.params
  const { user_id } = req.body

  try {
    const existingParticipant = await ChatParticipant.findOne({
      where: {
        chat_id,
        user_id,
      },
    })
    if (existingParticipant) {
      res.status(409).json({
        is_success: false,
        message: "User is already among the participants",
      })
      return
    }

    const newParticipant = await ChatParticipant.create({
      chat_id,
      user_id,
    })

    res.status(201).json({
      is_success: true,
      data: {
        ...newParticipant.dataValues,
      },
    })
  } catch (err) {
    let message = "Unknown error"
    let status = 400

    if (err && typeof err === "object" && "name" in err) {
      if (err.name === "SequelizeForeignKeyConstraintError") {
        message = "User doesn't exist"
      }
    }

    res.status(status).json({
      is_success: false,
      message,
    })
  }
})

router.delete("/:chat_id/participants/:participant_id", async (req, res) => {
  const { chat_id, participant_id } = req.params
  const { user_id } = req.body
  try {
    const currentParticipant = await ChatParticipant.findOne({
      where: {
        user_id: +user_id,
        chat_id: +chat_id,
      },
    })
    if (
      !currentParticipant ||
      (!currentParticipant.dataValues.is_owner && +participant_id !== user_id)
    ) {
      throw new Error("Unauthorized")
    }
    const deletedParticipant = await ChatParticipant.destroy({
      where: {
        chat_id: +chat_id,
        user_id: +participant_id,
      },
    })

    if (!deletedParticipant) {
      throw new Error("Not found")
    }

    res.json({
      is_success: true,
      data: {
        chat_id,
        user_id: participant_id,
      },
    })
  } catch (err) {
    let message = "Unknown error"
    let status = 400

    console.log({ err })

    if (err instanceof Error) {
      message = err.message
      if (err.message === "Unauthorized") {
        status = 401
      }
      if (err.message === "Not found") {
        status = 404
      }
    }

    res.status(status).json({
      is_success: false,
      message,
    })
  }
})

router.get("/:chat_id/messages", async (req, res) => {
  const { chat_id } = req.params

  try {
    const chat = await Chat.findOne({
      where: {
        id: +chat_id,
      },
    })

    if (!chat) {
      throw new Error("Not found")
    }

    const messageList = await ChatMessage.findAll({
      where: {
        chat_id: chat.dataValues.id,
      },
    })

    res.json({
      is_success: true,
      data: {
        messages: messageList.map((item) => item.dataValues),
      },
    })
  } catch (err) {
    let message = "Unknown error"
    let status = 400

    console.log({ err })

    if (err instanceof Error) {
      message = err.message
      if (err.message === "Not found") {
        status = 404
      }
    }

    res.status(status).json({
      is_success: false,
      message,
    })
  }
})

router.post("/:chat_id/messages", async (req, res) => {
  const { chat_id } = req.params
  const { user_id, value } = req.body

  try {
    const message = await ChatMessage.create({
      user_id: +user_id,
      chat_id: +chat_id,
      value,
    })

    res.json({
      is_success: true,
      data: {
        ...message.dataValues,
      },
    })
  } catch (err) {
    let message = "Unknown error"
    let status = 400

    console.log({ err })
    if (err instanceof ValidationError) {
      message = err.message
    } else if (err instanceof ForeignKeyConstraintError) {
      message = "Chat doesn't exist"
      status = 404
    }

    res.status(status).json({
      is_success: false,
      message,
    })
  }
})

export default router
