import { Section } from "../../_components/Section/Section";
import ecosystemIcon from "../../img/icons/ecosystem.png";
import huggingFaceIcon from "../../img/icons/huggingFace.png";
import liteRtIcon from "../../img/icons/liteRt.png";
import llaMaIcon from "../../img/icons/llaMa.png";
import ollamaIcon from "../../img/icons/ollama.png";
import onnxRuntimeIcon from "../../img/icons/onnxRuntime.png";
import pyTorchIcon from "../../img/icons/pyTorch.png";
import modelScope from "../../img/icons/modelScope.png";
import windowsMl from "../../img/icons/windowsMl.png";
import styles from "./Ecosystem.module.css";

import llmIcon from "../../img/icons/llm.png";
import localAiIcon from "../../img/icons/localAi.png";
import nvidiaIcon from "../../img/icons/nvidia.png";
import sparkNplIcon from "../../img/icons/sparkNpl.png";
import torchServeIcon from "../../img/icons/torchServe.png";

import audacityIcon from "../../img/icons/audacity.png";
import autogenAiIcon from "../../img/icons/autogenAi.png";
import easyOcrIcon from "../../img/icons/easyOcr.png";
import fastSDCPUIcon from "../../img/icons/fastSDCPU.png";
import lamaIndexIcon from "../../img/icons/lamaIndex.png";
import langChainIcon from "../../img/icons/langChain.png";
import { EcosystemCategory } from "./EcosystemCategory";

export const Ecosystem = () => {
  return (
    <Section>
      <Section.Icon>
        <img className={styles.icon} src={ecosystemIcon} alt="Ecosystem" />
      </Section.Icon>

      <Section.Title>Ecosystem</Section.Title>

      <div className={styles.container}>
        <EcosystemCategory
          title="Foundational integrations for flexibility and choice"
          items={[
            onnxRuntimeIcon,
            huggingFaceIcon,
            llaMaIcon,
            liteRtIcon,
            ollamaIcon,
            pyTorchIcon,
            modelScope,
            windowsMl,
          ]}
        />
        <EcosystemCategory
          title="Datacenter integrations for easy serving"
          items={[sparkNplIcon, llmIcon, nvidiaIcon, localAiIcon, torchServeIcon]}
        />
        <EcosystemCategory
          title="Popular tools & GUIs Integrations for accelerated performance"
          items={[
            lamaIndexIcon,
            easyOcrIcon,
            autogenAiIcon,
            fastSDCPUIcon,
            langChainIcon,
            audacityIcon,
          ]}
        />
      </div>
    </Section>
  );
};
