/* 
  Thanks to Josh Comeau (CSS for JavaScript Developers) for this custom hook.
*/

import { useEffect, useState } from "react";

export function useMousePosition() {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setPosition([e.clientX, e.clientY]);
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}
