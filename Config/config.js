const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch (env){
        case 'dev':
            return {
                connString: 'mongodb://localhost:27017',
                auth: {
                    user: 'IgorPrado',
                    password: '$2b$10$bX1UDo7knDzWA7CfIDoqWe4RitAv3FtCrHCrufQc.9GOLoiixVaqC' //271254ABC
                }
            }

        case 'hml':
            return {
                connString: 'mongodb://localhost:27017',
                auth: {
                    user: 'IgorPrado',
                    password: '$2b$10$bX1UDo7knDzWA7CfIDoqWe4RitAv3FtCrHCrufQc.9GOLoiixVaqC' //271254ABC
                }
            }

        case 'prd':
            return {
                connString: 'mongodb://localhost:27017',
                auth: {
                    user: 'IgorPrado',
                    password: '$2b$10$bX1UDo7knDzWA7CfIDoqWe4RitAv3FtCrHCrufQc.9GOLoiixVaqC' //271254ABC
                }
            }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();