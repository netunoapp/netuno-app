const axios = require("axios");

/**
 * 
 * @param {String} id 
 */
module.exports = async function(id){
    const user = await axios.get(`https://discord.com/api/v10/users/${id}`, {
        headers: {
            Authorization: `Bot ${process.env.TOKEN}`
        }
    }).then((res) => res.data);

    console.log(user);
    return user;
}