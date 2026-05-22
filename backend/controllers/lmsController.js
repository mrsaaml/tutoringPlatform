import supabase from '../config/supabaseClient.js';

export async function getLmsMaterials(req, res) {
  const { data, error } = await supabase
    .from('lms')
    .select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

export async function createLmsMaterial(req, res) {
  const { name, description, link } = req.body;

  const { data, error } = await supabase
    .from('lms')
    .insert({ name, description, link })
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
}

export async function deleteLmsMaterial(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('lms')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
}
