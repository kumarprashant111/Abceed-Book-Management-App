"use client";
import { AppContext, AppContextType } from "@/context/AppContext";
import styles from "./Loading.module.css";
import { useContext } from "react";

export default function Loading() {
  const { loading } = useContext(AppContext) as AppContextType;
  return (
    <>
      {loading && (
        <div className={styles.loading_wrapper}>
          <div className={styles.loading}>
            <div
              className={styles.circle}
              style={{ "--r": 30 } as React.CSSProperties}
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={styles.circle_dot}
                  style={
                    {
                      "--a": (i + 1) * 45,
                    } as React.CSSProperties
                  }
                ></div>
              ))}
            </div>
            <p className={styles.loading}>LOADING</p>
          </div>
        </div>
      )}
    </>
  );
}
