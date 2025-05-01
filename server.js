document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form-hacker');
  const respostaEl = document.getElementById('resposta');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    // Pega os dados do formulário de forma elegante
    const formData = new FormData(form);

    // Exibe carregando
    respostaEl.textContent = 'Enviando mensagem... ☕';

    try {
      const response = await fetch('enviar.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Erro na resposta do servidor');

      const respostaTexto = await response.text();

      // Feedback suave
      respostaEl.textContent = respostaTexto;

      // Limpa o formulário se tudo deu certo
      form.reset();

    } catch (error) {
      console.error('Erro no envio:', error);
      respostaEl.textContent = 'Ocorreu um erro no envio 🧨 Tenta de novo!';
    }
  });
});

