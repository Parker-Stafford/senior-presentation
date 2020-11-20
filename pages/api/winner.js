// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var names = ['parker', 'layla', 'deb', 'jeff']

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: names[Math.floor(Math.random() * names.length)] })
}
