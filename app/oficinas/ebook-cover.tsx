import Image from "next/image";
import styles from "./oficinas.module.css";

const coverSrc = "/oficinas/capa-500-prompts-oficinas.png";

export function EbookCover({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <div className={`${styles.coverFrame} ${compact ? styles.coverCompact : ""}`}>
      <div className={styles.coverGlow} />
      <div className={styles.cover}>
        <Image
          src={coverSrc}
          alt="Capa do ebook 500 Prompts para Oficinas Mecânicas de Sucesso"
          fill
          sizes={compact ? "(min-width: 1024px) 320px, 72vw" : "(min-width: 1024px) 440px, 86vw"}
          loading={compact ? "lazy" : undefined}
          preload={!compact}
          unoptimized
          className={styles.coverImage}
        />
      </div>
    </div>
  );
}
