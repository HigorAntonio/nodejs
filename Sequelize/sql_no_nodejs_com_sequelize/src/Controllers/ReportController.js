const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
  async show(req, res) {
    //Encontrar todos os usuários que tem email que termina com @rocketseat.com.br
    //Desses usuários eu quero buscar todos os que moram na "Rua Guilherme Gembala"
    //Desses usuários eu quero buscar as tecnologias que começam com React
    
    const user = await User.findAll({
      attributes: ['name', 'email'],
      where: { 
        email: {
          [Op.iLike]: '%@rocketseat.com.br'
        }
      },
      include: [
        { association: 'addresses', where: { street: 'Rua Guilherme Gembala'} },
        { association: 'techs',
          required: false,
          where: {
            name: {
              [Op.iLike]: 'React%'
            }
          }
        },
      ]
    });

    return res.json(user);
  }
}