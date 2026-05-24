
import supabase from '../../config/supabaseClient.js';


// export function checkRole(allowedRoles) {
//   return async (req, res, next) => {
//     const { data: profile, error } = await supabase
//       .from('profiles')
//       .select('role')
//       .eq('id', req.user.id)
//       .single();

//     if (error || !profile) {
//       return res.status(403).json({ error: 'Profile not found' });
//     }

//     if (!allowedRoles.includes(profile.role)) {
//       return res.status(403).json({ error: 'Insufficient permissions' });
//     }

//     req.userRole = profile.role;
//     next();
//   };
// }

export function checkRole(allowedRoles) {
  return async (req, res, next) => {
    const userEmail = req.user?.email;

    const userRole = userEmail === 'adinai@gmail.com' ? 'admin' : 'user';

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ error: 'Insufficient permission' });
    }

    req.userRole = userRole;
    next();
  };
}