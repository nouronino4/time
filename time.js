export default async function handler(req, res) {
  try {
    const response = await fetch('http://worldtimeapi.org/api/timezone/Africa/Algiers');
    const data = await response.json();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ unixtime: data.unixtime });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch time' });
  }
}
