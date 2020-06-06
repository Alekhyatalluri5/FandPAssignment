const CURRENT_USER = 'tpld';

import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export function getCurrentUser() {
  let token = cookies.get(CURRENT_USER);
  let decoded = '';
  if (token !== undefined) {
    decoded = jwtDecode(token);
  } else {
    decoded = {
      email: 'anonymous@gmail.com',
      name: 'Anonymous',
      role: 'IT_ADMIN',
    };
  }
  return decoded;
}

// 'IT_ADMIN', 'BANQUETS', 'FINANCE_MANAGER', 'SALES', 'FINANCE_SUPERVISOR'
