---
sidebar_position: 0
sidebar_label: Introduction
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# OpenVINO Toolkit

OpenVINO is an open-source toolkit for optimizing and deploying deep
learning models. It provides boosted deep learning performance for vision,
audio, and language models from popular frameworks like TensorFlow,
PyTorch, and more.

## Installing OpenVINO Runtime

<Tabs>
  <TabItem value="windows" label="Windows" default>

```bash
python -m pip install openvino
```

  </TabItem>
  <TabItem value="linux" label="Linux and macOS">

```bash
python -m pip install openvino
```

  </TabItem>
</Tabs>

:::note

Note that the PyPI distribution:

- offers the Python API only
- is dedicated to users of all major OSes: Windows, Linux, and macOS (all x86_64 / arm64 architectures)
- macOS offers support only for CPU inference

Before installing OpenVINO, see the System Requirements page.

:::

## Where to start

- **[About OpenVINO](./about-openvino/index.md)** — Key features, ecosystem,
  performance benchmarks, and release notes.
- **[Get Started](./get-started/index.md)** — Install OpenVINO and learn the
  basics with tutorials and examples.
- **[OpenVINO Workflow](./openvino-workflow/index.md)** — Convert, optimize,
  run, and deploy models.
- **[Generative AI Workflow](./openvino-workflow-generative/index.md)** —
  Run and optimize generative AI models with OpenVINO GenAI.
- **[Documentation](./documentation/index.md)** — Reference material:
  IR format, extensibility, security, and compatibility.
- **[Developer Guide](./developer-guide/index.md)** — Build OpenVINO from
  source and contribute to the project.
