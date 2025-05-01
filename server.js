const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/enviar-email', async (req, res) => {
  const { nome, email, mensagem } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // ou 'hotmail', 'outlook', etc.
    auth: {
      user: 'seuemail@gmail.com',
      pass: 'sua_senha_de_aplicativo', // não usa a senha normal!
    },
  });

  const mailOptions = {
    from: email,
    to: 'seuemail@gmail.com',
    subject: `Mensagem de ${nome}`,
    text: mensagem,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ success: true, message: 'Email enviado!' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ success: false, message: 'Erro ao enviar.' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
