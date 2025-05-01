<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $mensagem = $_POST["mensagem"];

    $to = "bernardo.8350855@aluno.mg.gov.br"

    $subject = "Mensagem de $nome";
    $body = "Nome: $nome\nEmail: $email\n\nMensagem:\n$mensagem";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email enviado!";
    } else {
        echo "Erro ao enviar email.";
    }
}
?>
