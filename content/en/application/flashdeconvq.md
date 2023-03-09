---
title: QUANTIFICATION FOR TOP-DOWN PROTEOMICS
sidebar: false
---

FLASHDeconvQ performs MS1-level label-free quantification data analysis in top-down proteomics with an automatic coeluting proteoform resolution method. Taking advantage of the ultra-fast deconvolution algorithm, <a href="/application/flashdeconv/">FLASHDeconv</a>, FLASHDeconvQ runs ~1900 spectra in <2 min.

{{< button github "https://github.com/JeeH-K/OpenMS/tree/feature/FLASHDeconvQ">}}
Check it out on Github!
{{< /button >}}

### Input/Output
- Input: Centroided MS1 scans (*.mzML)
- Output: Quantified proteoforms in a tab-separated file (*.mzML); optionally, OpenMS LC-MS features output (\*.featureXML)
  - for each proteoform, mono-isotopic/average mass, retention time range, charge range, different types for quantity values, and isotope cosine similarity score are provided.
- Parameters can be found by running FLASHDeconvQ using the "--helphelp" option.

### Consensus FeatureGroup (putative proteoform) detection
FLASHDeconvQ runs per scan; thus, we provide an additional simple tool for detecting consensus feature groups among multiple scans (i.e., technical replicates) named **TopDownConsensusFeatureGroup**. Retention time and mass tolerance can be adjusted with parameters.

### GUI
FLASHDeconvQ and (consecutive) TopDownConsensusFeatureGroup can be executed easily with GUI, **FLASHDeconvQWizard**.
<center>{{< figure src="/images/content_images/FLASHDeconvQWizard.png" >}}</center>

To learn how to run the programs, please check <a href="/application/flashdeconv/">FLASHDeconv</a> page for details.