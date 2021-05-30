const reqEvent = (event) => require(`../eventutil/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
}; 