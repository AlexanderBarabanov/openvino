import { DottedCardDetails } from "../_components/DottedCardDetails/DottedCardDetails";
import { Section } from "../_components/Section/Section";
import { useAssetUrl } from "../_hooks/use-asset-url";
import { useSpokeHref } from "../_hooks/use-spoke-href";
import { useSpokes } from "../_hooks/use-spokes";
import styles from "./Performance.module.css";

export const Performance = () => {
  const spokes = useSpokes();
  const assetUrl = useAssetUrl();

  const href = useSpokeHref(
    spokes.find(({ label }) => label === "OpenVINO")?.id ?? "",
  );

  return (
    <Section>
      <Section.Icon>
        <img
          className={styles.icon}
          src={assetUrl("img/performance.png")}
          alt="performance"
        />
      </Section.Icon>

      <Section.Title>Performance that matters</Section.Title>

      <Section.Description>
        Choose the right performance mode — ultra‑low latency for
        <br /> real‑time responses or maximum throughput at scale.
      </Section.Description>

      <div className={styles.grid}>
        <div>
          <img
            className={styles.blendModeLighten}
            src={assetUrl("img/openvino-runtime.png")}
          />
        </div>
        <DottedCardDetails
          title="Optimize for latency"
          learnMoreLink={`${href}docs/`}
          code={[
            {
              lang: "python",
              code: `compiled_model_latency = core.compile_model(
              model,
              "CPU",
              config={"PERFORMANCE_HINT": "LATENCY"})`,
            },
          ]}
        />

        <DottedCardDetails
          title={
            <>
              Optimize for <br /> throughput
            </>
          }
          learnMoreLink={`${href}docs/`}
          code={[
            {
              lang: "python",
              code: `compiled_model_throughput = core.compile_model(
              model,
              "CPU",
              config={"PERFORMANCE_HINT": "THROUGHPUT"})`,
            },
          ]}
        />
        <div>
          <img
            className={styles.blendModeLighten}
            src={assetUrl("img/throughput-runtime.png")}
          />
        </div>
      </div>
    </Section>
  );
};

export default Performance;
