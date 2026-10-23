import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = React.ComponentProps<"button">;

export function MagneticButton({ children, className, ...props }: Props) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(pointer: coarse)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const xTo = gsap.quickTo(el, "x", { duration: 0.32, ease: "power3.out" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.32, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      xTo((event.clientX - rect.left - rect.width / 2) * 0.18);
      yTo((event.clientY - rect.top - rect.height / 2) * 0.18);
    };
    const onLeave = () => {
      xTo(0);
      yTo(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      gsap.set(el, { x: 0, y: 0 });
    };
  }, []);

  return (
    <button ref={ref} data-cursor="grow" className={className} {...props}>
      {children}
    </button>
  );
}