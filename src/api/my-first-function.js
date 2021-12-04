//src/api/my-first-function.js

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.status(200).json({ message: 'A ok!' });
}