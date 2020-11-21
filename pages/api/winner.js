// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

var names = ['Joe Buono', 'Zain Padela', 'Deb Johnson', 'Dylan Ring', 'Zach McCain', 'Alysa Shin', 'Rebecca Wiegel', 'Tre\' Moore', 'Henry Fradley', 'Connor Wilson', 'Christina Meador', 'Taylor Anderson', 'John Kelly', 'Frans Larson', 'Michael Wetterauer', 'Nick Mendini', 'Ben Rasmussen', 'Sam Goldie', 'Fabian Yee', 'Matthew Morgan', 'Alex Sandoval', 'Elene Mikaberidze', 'Michael Chen', 'John Campbell', 'David Kim', 'Giovani Maccagno', 'Quentin McMillian', 'Leah Cardon', 'Seth Lassen', 'Mukhtar Bahadory', 'Daniel Lee', 'John Anderton', 'Genaro Salinas', 'Derek Warner-Reyes', 'Mitch McDermott', 'Joe Wnukoski', 'Tyler Bailey', 'Jeremy England', 'Brandon Elzy']

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: names[Math.floor(Math.random() * names.length)] })
}
