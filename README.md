# CRUDWithNode
CRUD simples de usuários feito com Node.js e MongoDB.

# Execução da aplicação
Apos clonar este repositório, execute o comando **docker-compose up** no diretório do arquivo **docker-compose.yml**, para que a API e a base de dados MongoDB tenham suas instâncias criadas, de maneira que a API esteja conectada ao Mongo. 

# Autenticação 
Utilize o endpoint **localhost:3001/users/auth** com o login **IgorPrado/271254ABC** para obter o token (gerado pelo mecanismo JWT) para autorização nas operações CRUD (este Token é necessário em todas as operações).  

Exemplo:
![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/2274585b-945e-497f-934f-6d267bff81cf)

# Teste das operações
Utilize os seguintes verbos e endpoints para as seguintes operações de CRUD:
* POST - localhost:3001/users/create (Create)
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/11230643-7797-4b53-a164-508a5ee6b5b6)

* GET - localhost:3001/users (Read) - **Obtem todos os usuários registrados**
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/0a4f8bbb-a8ce-438e-8d0d-1716eb55731d)
  
* GET - localhost:3001/users/<id_registro_no_mongodb> (Read) - **Obtem um usuário específico**
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/416f453c-adc0-4766-a80e-2c9c486c089c)
  
* PUT - localhost:3001/users/<id_registro_no_mongodb> (Update)
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/aa74d33e-6c33-42eb-809e-1e32776c248f)

* DELETE - localhost:3001/users/<id_registro_no_mongodb> (Delete)
  ![image](https://github.com/IgorCavalcantiCianniPrado/CRUDWithNode/assets/86272097/fa53c844-ef7b-429a-bdcb-98e0d28f1801)




