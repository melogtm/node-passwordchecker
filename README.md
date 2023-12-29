# API Exercício para Validação de Senhas 
Os <a href="https://github.com/EllyanF/password-validation">requerimentos</a> para uma senha ser válida via essa API são: 
<ul>
  <li>Mínimo de 8 caracteres</li>
  <li>Contém pelo menos uma letra minúscula</li>
  <li>Contém pelo menos uma letra maiúscula</li>
  <li>Contém pelo menos um caractere especial</li>
</ul>

# Endpoints
<h3>Validação de senha</h3>
<ul>
  <li>POST {host}/validate-password</li>
  <li>Responses</li>
  <ul>
    <li>204 No Content se a senha está de acordo com todos os requerimentos.</li>
    <li>400 Bad Request se a senha falhar na validação.</li>
  </ul>
</ul>

## How to Run
<ol>
  <li>Instale todas as dependências: <pre>npm install</pre></li>
  <li>Inicie o servidor com o seguinte comando no terminal: <pre>node index.js</pre></li>
</ol>
A aplicação estará disponível - caso a `port` não for alterada no código - em <code>http://localhost:3000/validate-password</code>
