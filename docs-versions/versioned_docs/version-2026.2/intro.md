---
sidebar_position: 0
sidebar_label: Introduction
slug: /
format: md
---

# OpenVINO Toolkit

> **OpenVINO GenAI**
> Simplify GenAI model deployment!
> [Check out our guide](openvino-workflow-generative/index.md)

OpenVINO is an open-source toolkit for deploying performant AI solutions in the cloud, on-prem, and on the edge alike. Develop your applications with both generative and conventional AI models, coming from the most popular model frameworks. Convert, optimize, and run inference utilizing the full potential of Intel® hardware. There are main tools in OpenVINO to meet all your deployment needs:

<div class="row">
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <a href="openvino-workflow-generative/index.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <h3>OpenVINO GenAI</h3>
      <p>Run and deploy generative AI models</p>
    </a>
  </div>
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <a href="openvino-workflow/index.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <h3>OpenVINO Base Package</h3>
      <p>Run and deploy conventional AI models</p>
    </a>
  </div>
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <a href="#" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <h3>OpenVINO Model Server</h3>
      <p>Deploy both generative and conventional AI inference on a server</p>
    </a>
  </div>
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <a href="#" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <h3>OpenVINO Physical AI</h3>
      <p>Deploy VLA models on robots</p>
    </a>
  </div>
</div>

For a quick ramp-up, check out the [OpenVINO Toolkit Cheat Sheet [PDF]](https://docs.openvino.ai/2026/_static/download/OpenVINO_Quick_Start_Guide.pdf) and the [OpenVINO GenAI Quick-start Guide [PDF]](https://docs.openvino.ai/2026/_static/download/GenAI_Quick_Start_Guide.pdf).

![OpenVINO Diagram](https://docs.openvino.ai/2026/_images/openvino-overview-diagram.jpg)

## Where to Begin

<div class="row">
  <div class="col col--4" style={{ marginBottom: '1rem' }}>
    <a href="get-started/install-openvino.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <img src="https://docs.openvino.ai/2026/_images/home_begin_tile_01.png" alt="Installation" style={{ marginBottom: '1rem', width: '100%' }} />
      <h3>Installation</h3>
      <p>This guide introduces installation and learning materials for Intel® Distribution of OpenVINO™ toolkit.</p>
    </a>
  </div>
  <div class="col col--4" style={{ marginBottom: '1rem' }}>
    <a href="about-openvino/performance-benchmarks.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <img src="https://docs.openvino.ai/2026/_images/home_begin_tile_02.png" alt="Performance Benchmarks" style={{ marginBottom: '1rem', width: '100%' }} />
      <h3>Performance Benchmarks</h3>
      <p>See latest benchmark numbers for OpenVINO and OpenVINO Model Server.</p>
    </a>
  </div>
  <div class="col col--4" style={{ marginBottom: '1rem' }}>
    <a href="openvino-workflow/model-preparation.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <img src="https://docs.openvino.ai/2026/_images/home_begin_tile_03.png" alt="Framework Compatibility" style={{ marginBottom: '1rem', width: '100%' }} />
      <h3>Framework Compatibility</h3>
      <p>Load models directly (for TensorFlow, ONNX, PaddlePaddle) or convert to OpenVINO format.</p>
    </a>
  </div>
  <div class="col col--4" style={{ marginBottom: '1rem' }}>
    <a href="openvino-workflow/running-inference.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <img src="https://docs.openvino.ai/2026/_images/home_begin_tile_04.png" alt="Easy Deployment" style={{ marginBottom: '1rem', width: '100%' }} />
      <h3>Easy Deployment</h3>
      <p>Get started in just a few lines of code.</p>
    </a>
  </div>
  <div class="col col--4" style={{ marginBottom: '1rem' }}>
    <a href="#" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <img src="https://docs.openvino.ai/2026/_images/home_begin_tile_05.png" alt="Serving at scale" style={{ marginBottom: '1rem', width: '100%' }} />
      <h3>Serving at scale</h3>
      <p>Cloud-ready deployments for microservice applications.</p>
    </a>
  </div>
  <div class="col col--4" style={{ marginBottom: '1rem' }}>
    <a href="openvino-workflow/model-optimization.md" class="card padding--lg" style={{ height: '100%', textDecoration: 'none' }}>
      <img src="https://docs.openvino.ai/2026/_images/home_begin_tile_06.png" alt="Model Compression" style={{ marginBottom: '1rem', width: '100%' }} />
      <h3>Model Compression</h3>
      <p>Reach for performance with post-training and training-time compression with NNCF.</p>
    </a>
  </div>
</div>

## Key Features

[See all features](about-openvino/index.md)

<div class="row">
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <img src="https://docs.openvino.ai/2026/_images/home_key_feature_01.png" alt="Model Compression" style={{ marginBottom: '1rem', width: '64px' }} />
    <h3>Model Compression</h3>
    <p>You can either link directly with OpenVINO Runtime to run inference locally or use OpenVINO Model Server to serve model inference from a separate server or within Kubernetes environment.</p>
  </div>
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <img src="https://docs.openvino.ai/2026/_images/home_key_feature_02.png" alt="Fast & Scalable Deployment" style={{ marginBottom: '1rem', width: '64px' }} />
    <h3>Fast & Scalable Deployment</h3>
    <p>Write an application once, deploy it anywhere, achieving maximum performance from hardware. Automatic device discovery allows for superior deployment flexibility. OpenVINO Runtime supports Linux, Windows and MacOS and provides Python, C++ and C API. Use your preferred language and OS.</p>
  </div>
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <img src="https://docs.openvino.ai/2026/_images/home_key_feature_03.png" alt="Lighter Deployment" style={{ marginBottom: '1rem', width: '64px' }} />
    <h3>Lighter Deployment</h3>
    <p>Designed with minimal external dependencies reduces the application footprint, simplifying installation and dependency management. Popular package managers enable application dependencies to be easily installed and upgraded. Custom compilation for your specific model(s) further reduces final binary size.</p>
  </div>
  <div class="col col--6" style={{ marginBottom: '1rem' }}>
    <img src="https://docs.openvino.ai/2026/_images/home_key_feature_04.png" alt="Enhanced App Start-Up Time" style={{ marginBottom: '1rem', width: '64px' }} />
    <h3>Enhanced App Start-Up Time</h3>
    <p>In applications where fast start-up is required, OpenVINO significantly reduces first-inference latency by using the CPU for initial inference and then switching to another device once the model has been compiled and loaded to memory. Compiled models are cached, improving start-up time even more.</p>
  </div>
</div>
