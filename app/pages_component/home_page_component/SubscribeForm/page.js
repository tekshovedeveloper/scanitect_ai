"use client";
import { useState } from "react";
import { addSubscriptionEmail } from "../../../../utils/api";
import styles from "./subscribe_form.module.css";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");
    try {
      const response = await addSubscriptionEmail("subscribe", { email });

      if (!response.ok) {
        throw new Error(response.data?.message || "Something went wrong");
      }

      setStatus("success");
      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err?.message || "Something went wrong");
    }
  }

  return (
    <section className={styles.smartAiTravelHero} id="subscribeForm">
      <div className={styles.smartAiTravelContainer}>
        <div className={styles.smartAiTravelHeroGrid}>
          <div className={styles.smartAiTravelCopy}>
            <h1>
              Be the <span className={styles.smartAiTravelAccent}>first</span>{" "}
              to know when{" "}
              <span className={styles.smartAiTravelAccent}>we are live </span>
            </h1>
            <p className={styles.smartAiTravelLead}>
              More than just facts our engine identifies landmarks worldwide,
              shares cultural stories, and connects you with everything you need
              to explore further.
            </p>

            <form
              onSubmit={handleSubmit}
              className={styles.form}
              aria-label="Subscribe to updates"
            >
              <input
                id="subscribe-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
                className={styles.input}
                autoComplete="email"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={styles.button}
              >
                {status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>

              {message && (
                <p
                  className={
                    status === "error"
                      ? styles.messageError
                      : styles.messageSuccess
                  }
                >
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
