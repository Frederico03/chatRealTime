import messageModel from "../model/messageModel.js";

export const addMessage = async (req, res, next) => {
  try {
    const {from, to, message} = req.body;
    const data = await messageModel.create({
      message: {text:message},
      users: [from,to],
      sender: from,
    });
    if(data)
      return res.json({ msg: "Mensagem adicionada com sucesso."});
    return res.json({msg: "Erro em adicionar mensagem no banco de dados."});
  } catch (error) {
    next(error)
  }
}

export const getAllMessage = async (req, res, next) => {
}