import {
  useState,
  useRef,
  MutableRefObject,
  useCallback,
  useEffect,
} from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, AnimationControls } from "framer-motion";

interface AnimationOptions {
  inViewAnimation: object;
  outOfViewAnimation: object;
  threshold?: number;
}

type UseInViewAnimationResult = [
  MutableRefObject<HTMLDivElement | null>,
  (node: HTMLDivElement | null) => void,
  AnimationControls
];

export default function useInViewAnimation({
  inViewAnimation,
  outOfViewAnimation,
  threshold = 1,
}: AnimationOptions): UseInViewAnimationResult {
  const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const animation = useAnimation();

  const { ref: inViewRef, inView } = useInView({
    threshold: threshold,
  });

  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef]
  );

  useEffect(() => {
    if (inView) {
      animation.start(inViewAnimation);
    } else {
      animation.start(outOfViewAnimation);
    }
  }, [inView, animation, inViewAnimation, outOfViewAnimation]);

  return [ref, setRefs, animation];
}

// import {
//   useState,
//   useRef,
//   RefObject,
//   useCallback,
//   MutableRefObject,
// } from "react";
// import { useInView } from "react-intersection-observer";
// import { useAnimation, AnimationControls } from "framer-motion";

// interface AnimationOptions {
//   inViewAnimation: object;
//   outOfViewAnimation: object;
//   threshold?: number;
// }

// type UseInViewAnimationResult = [
//   RefObject<HTMLDivElement>,
//   (node: HTMLDivElement | null) => void,
//   AnimationControls
// ];

// export default function useInViewAnimation({
//   inViewAnimation,
//   outOfViewAnimation,
//   threshold = 1,
// }: AnimationOptions): UseInViewAnimationResult {
//   const ref: MutableRefObject<HTMLDivElement | null> = useRef(null);
//   const animation = useAnimation();

//   const { ref: inViewRef, inView } = useInView({
//     threshold: threshold,
//   });

//   const setRefs = useCallback(
//     (node: HTMLDivElement | null) => {
//       ref.current = node;
//       inViewRef(node);

//       if (inView) {
//         animation.start(inViewAnimation);
//       } else {
//         animation.start(outOfViewAnimation);
//       }
//     },
//     [inView, inViewRef, animation, inViewAnimation, outOfViewAnimation]
//   );

//   return [ref, setRefs, animation];
// }
