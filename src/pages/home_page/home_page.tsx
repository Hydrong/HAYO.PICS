import style from "./home_style.module.css";
import { useRef, useEffect } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;

      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${scrollTop * 0.3}px)`; // 느림
      }
    };
    const onScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={style.container} ref={containerRef}>
      <div className={style.header}>
        <div className={style.header__content}>
          <h1 className={style.header__content__title}>HAYO.PICS</h1>
          <ul className={style.header__content__nav}>
            <li>about</li>
            <li>mypage</li>
            <li>shop</li>
          </ul>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.content__content}>
          <h1 className={style.content__content__title}>
            미래를 연결하는, 무한한 가능성의 시작
          </h1>
          <p>
            경계를 넘는 사고와 기술의 교차점에서, 우리는 단순함 속에 복잡함을
            담습니다.
            <br />
            보이지 않는 흐름을 감지하고, 감지된 흐름 속에서 다음을 예측합니다.
            <br />
            지금, 여기서부터 그 다음을 설계하십시오.
          </p>
        </div>
      </div>
      <div className={style.bg} ref={bgRef} />
    </div>
  );
}
