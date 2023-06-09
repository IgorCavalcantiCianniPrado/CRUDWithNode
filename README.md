# CRUDWithNode
CRUD simples de usuários feito com Node.js e MongoDB.

# Arquitetura Técnica
![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/09012aa7-9523-45ac-b796-f915d6819695)

# Execução da aplicação
Apos clonar este repositório, execute o comando **docker-compose up** no diretório do arquivo **docker-compose.yml**, para que a API e a base de dados MongoDB tenham suas instâncias criadas, de maneira que a API esteja conectada ao Mongo. 

# Autenticação 
Utilize o endpoint **localhost:3001/users/auth** com o login **IgorPrado/271254ABC** para obter o token (gerado pelo mecanismo JWT) para autorização nas operações CRUD (este Token é necessário em todas as operações).  

Exemplo:
![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/2274585b-945e-497f-934f-6d267bff81cf)

Obs.: Deve-se utilizar este token no header de cada requisição do CRUD, em uma propriedade chamada **auth**.

# Teste das operações
Utilize os seguintes verbos e endpoints para as seguintes operações de CRUD:
* POST - localhost:3001/users/create (Create)
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/11230643-7797-4b53-a164-508a5ee6b5b6)

* GET - localhost:3001/users (Read) - **Obtem todos os usuários registrados**
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/a8607eab-be11-4702-85e8-3c307a3f14a4)

* GET - localhost:3001/users/<id_registro_no_mongodb> (Read) - **Obtem um usuário específico**
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/e1ddb5b1-436b-4d00-bf28-b0802bb13a4b)
  
* PUT - localhost:3001/users/<id_registro_no_mongodb> (Update)
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/117d1ea3-a0a8-4c5e-a85d-7faa901aeba0)

* DELETE - localhost:3001/users/<id_registro_no_mongodb> (Delete)
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/5ba5b80b-1863-43d1-89e4-dcb7d963a1de)




