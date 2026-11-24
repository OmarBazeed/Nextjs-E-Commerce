import products from '../../../data/products';

// GET /api/products  -> bundled sample catalogue (no database needed).
// POST is accepted and kept in memory only, so it resets when the server restarts.
const extra = [];

export default function handler(req, res) {
  if (req.method === 'GET') return res.status(200).json({ data: [...products, ...extra] });
  if (req.method === 'POST') {
    extra.push({ id: String(Date.now()), ...req.body });
    return res.status(201).json({ message: 'Product Created (demo, not persisted)' });
  }
  res.status(405).json({ message: 'Method not allowed' });
}
