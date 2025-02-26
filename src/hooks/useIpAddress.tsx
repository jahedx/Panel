import axios from 'axios';
import { useEffect, useState } from 'react';

export function useIpAddress() {
  const [ipAdress, setIPAddress] = useState<string>();
  useEffect(() => {
    axios
      .get('https://api.ipify.org?format=json')
      .then((res) => setIPAddress(res.data.ip))
      .catch(() => {
        setIPAddress('unreachable');
      });
  }, []);
  return { ipAdress };
}
