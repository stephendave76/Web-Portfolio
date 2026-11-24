import { useEffect, useState } from 'react';

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const update = () => {
      let current = ids[0];
      ids.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 140) {
          current = id;
        }
      });
      setActive(current);
    };

    update();
    window.addEventListener('scroll', update);
    window.addEventListener('resize', update);
    window.addEventListener('load', update);

    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('load', update);
    };
  }, [ids]);

  return active;
}
