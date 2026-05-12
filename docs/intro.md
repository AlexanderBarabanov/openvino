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

:::note

Note that the PyPI distribution:

- offers the Python API only
- is dedicated to users of all major OSes: Windows, Linux, and macOS (all x86_64 / arm64 architectures)
- macOS offers support only for CPU inference

Before installing OpenVINO, see the System Requirements page.

:::

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


## System Requirements

### CPU

:::note

Certain hardware, including but not limited to GPU and NPU, requires manual installation of specific drivers and/or other 
software components to work correctly and/or to utilize hardware capabilities at their best. This might require updates to the operating system, 
including but not limited to Linux kernel, please refer to their documentation for details. These modifications should be handled by user and are 
not part of OpenVINO installation.

:::

<Tabs>
  <TabItem value="hardware" label="Supported Hardware" default>

  - Intel® Core™ Ultra Series 1, Series 2 and Series 3
  - Intel® Xeon® 6 processor
  - Intel Atom® Processor X Series
  - Intel Atom® processor with Intel® SSE4.2 support
  - Intel® Pentium® processor N4200/5, N3350/5, N3450/5 with Intel® HD Graphics
  - 6th - 14th generation Intel® Core™ processors
  - 1st - 5th generation Intel® Xeon® Scalable Processors
  - ARM CPUs with armv7a and higher, ARM64 CPUs with arm64-v8a and higher, Apple® Mac with Apple silicon

  </TabItem>
  <TabItem value="os" label="Supported Operating Systems">

  - Windows 11, 64-bit
  - Windows 10, 64-bit
  - Ubuntu 24.04 long-term support (LTS), 64-bit (Kernel 6.8+)
  - Ubuntu 22.04 long-term support (LTS), 64-bit (Kernel 5.15+)
  - Ubuntu 20.04 long-term support (LTS), 64-bit (Kernel 5.15+)
  - macOS 12.6 and above, 64-bit and ARM64
  - CentOS 7
  - Red Hat Enterprise Linux (RHEL) 8 and 9, 64-bit
  - openSUSE Tumbleweed, 64-bit and ARM64
  - Ubuntu 20.04 ARM64

  </TabItem>
</Tabs>


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
