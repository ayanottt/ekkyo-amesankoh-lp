"use client";
import { useId, useState, type ReactNode } from "react";
import styles from "./Accordion.module.css";

type Item = {
  question: string;
  answer: ReactNode;
};

type Props = {
  items: Item[];
  /** 同時に複数開けるなら true（既定: falseで単一開閉） */
  allowMultiple?: boolean;
};

export default function Accordion({ items, allowMultiple = false }: Props) {
  const baseId = useId();
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

  const isOpen = (i: number) => openSet.has(i);

  const toggle = (i: number) => {
    setOpenSet(prev => {
      const next = new Set(prev);
      if (next.has(i)) {
        next.delete(i);
      } else {
        if (!allowMultiple) next.clear();
        next.add(i);
      }
      return next;
    });
  };

  return (
    <div className={styles.wrapper}>
      <ol className={styles.list}>
        {items.map((item, i) => {
          const panelId = `${baseId}-panel-${i}`;
          const btnId = `${baseId}-btn-${i}`;
          const open = isOpen(i);
          return (
            <li key={i} className={styles.item}>
              <h3 className={styles.heading}>
                <button
                  id={btnId}
                  className={styles.trigger}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.qText}>
                    {`Q${i + 1}. ${item.question}`}
                  </span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={`${styles.panel} ${open ? styles.open : ""}`}
              >
                <div className={styles.panelInner}>
                  {item.answer}
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
