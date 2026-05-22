import supabase from '../config/supabaseClient.js';

export async function getQuestions(req, res) {
  const { data, error } = await supabase
    .from('question_bank')
    .select('*');

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
}

export async function createQuestion(req, res) {
  const { question, option_a, option_b, option_c, option_d, answer } = req.body;

  const { data, error } = await supabase
    .from('question_bank')
    .insert({ question, option_a, option_b, option_c, option_d, answer })
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });
  res.status(201).json(data);
}

export async function deleteQuestion(req, res) {
  const { id } = req.params;

  const { error } = await supabase
    .from('question_bank')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });
  res.status(204).send();
}
