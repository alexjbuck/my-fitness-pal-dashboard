//src/api/my-first-function.js

function Handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).json({ message: 'A ok!' });
}

export default Handler