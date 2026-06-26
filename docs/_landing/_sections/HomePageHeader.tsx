import AiImg from "../img/ai.png";
import ArchitectureOverview from "../img/architecture-overview.png";
import HardwareImg from "../img/hardware.png";
import MaxPerformance from "../img/max-performance.png";
import { CardDetails } from "../_components/CardDetails/CardDetails";
import { Section } from "../_components/Section/Section";
import { useAssetUrl } from "../_hooks/use-asset-url";
import styles from "./HomePageHeader.module.css";

export const HomePageHeader = () => {
  return (
    <Section beforeContent={<div className={styles.background} />}>
      <h1 className={styles.heroTitle} data-text="Deploy AI anywhere">
        Deploy AI anywhere
      </h1>
      <h1 className={styles.heroSubtitle}>Run it at full speed</h1>
      <p className={styles.description}>
        OpenVINO™ is a production-ready, open-source toolkit for optimizing and
        deploying AI inference on Intel® CPUs, GPUs, and NPUs. It accelerates
        computer vision, generative AI, and Physical AI workloads on AI PCs,
        edge devices, and in the cloud with a unified, hardware-accelerated
        runtime. 
      </p>

      {/* Hub-static marketing blocks; intentionally not data-driven. */}
      <div className={styles.cards}>
        <CardDetails
          maxIconWidth={78}
          iconUrl={HardwareImg}
          title={"One model - any Intel hardware"}
          description="Run your models on CPU, GPU, and NPU without changing your code. Automatic device detection and performance optimization included."
        />

        <CardDetails
          maxIconWidth={60}
          iconUrl={AiImg}
          title={<>Built for {<br />}Generative AI</>}
          description="Support for LLMs, multimodal models, and GenAI pipelines - with seamless integration into popular frameworks and Hugging Face."
        />

        <CardDetails
          maxIconWidth={70}
          iconUrl={MaxPerformance}
          title={<>Max performance, {<br />}min footprint</>}
          description="Advanced model compression, reduced memory usage, and faster startup times - ideal for edge and production environments."
        />
      </div>

      <div className={styles.divider} />

      <div className={styles.architecture}>
        <h2>OpenVINO Architecture overview</h2>
        <p>
          From popular frameworks to optimized inference across heterogeneous
          hardware. All through a unified OpenVINO stack.
        </p>

        <div className={styles.videoContainer}>
          <img src={ArchitectureOverview} />
        </div>
      </div>
    </Section>
  );
};
