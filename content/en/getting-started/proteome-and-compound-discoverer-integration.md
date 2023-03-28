---
title: "Use OpenMS in CD/PD"
sidebar: false
---

## Overview

### Proteome and Compound discoverer integration

We provide integrated workflow solutions for the Thermo Proteome Discoverer and Compound Discoverer platforms powered by OpenMS.

### Proteome discoverer

Starting from version 2.0, Proteome Discoverer functionality can be extended by external plugins. Several OpenMS workflows are now made available as Proteome Discoverer Community Nodes. Installer packages and workflows can be downloaded from [here](http://www.openms.de/download/proteomediscoverer-plugin/).

<center>{{< figure src="/images/content_images/rnpxl_new_spectrum_viewer.jpeg" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}</center>

### Compound discoverer

MetaboProfiler provides functionality of multiple OpenMS 2.0 tools to the recently released Thermo Fisher Compound Discoverer (CD). It extends CD with methods for large-scale feature detection and quantification of small metabolites for label-free LC-MS data and can be found [here](http://www.openms.de/download/compounddiscoverer-plugin/).

## OpenMS in compound discoverer

**METABOPROFILER COMMUNITY NODE FOR COMPOUND DISCOVERER**

MetaboProfiler provides functionality of multiple OpenMS 2.0 tools to the recently released Thermo Fisher Compound Discoverer (CD). It extends CD with methods for large-scale feature detection and quantification of small metabolites for label-free LC-MS data.

<center>{{< figure src="/images/content_images/CDOpenMSKnime.png" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}</center>

### Features

- Detection of small analyte features by a peak-model free approach
- Optional linear, feature-based alignment of input maps along the retention dimension
- Linking of corresponding features
- Visualization of MetaboProfiler results in CD along with raw data
- Export of results for further analyses outside CD

### Functionality

The node exports input data from a spectrum source to the open standard data format mzML before running a feature quantification pipeline. For quantification, small molecule features are detected with a sensitive and robust algorithm[[1]](https://www.openms.de/comp/metaboprofiler-community-node-for-compound-discoverer/#Ref1). The detection method is free of assumptions concerning chromatographic feature shapes, leading to increased sensitivity compared to methods based on peak models. Measured feature intensities have been shown to be reproducible and highly correlated to metabolite concentrations in dilution series [[1]](https://www.openms.de/getting-started/proteome-and-compound-discoverer-integration/openms-in-compound-discoverer/#Ref1).


<center>{{< figure src="/images/content_images/TerfResQuantSmall.png" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}</center>

<center>{{< figure src="/images/content_images/openms_ce_venn.png" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}</center>

In the case that multiple input files are provided to the CD workflow, corresponding features are linked across these input maps (data sets) as described by Weisser et al.[[2]](https://www.openms.de/getting-started/proteome-and-compound-discoverer-integration/openms-in-compound-discoverer/#Ref2). This linking incorporates m/z and retention similarity and additional information, allowing for comparative feature quantification. The feature linking can optionally be precluded by a retention time-based map alignment[[3]](https://www.openms.de/getting-started/proteome-and-compound-discoverer-integration/openms-in-compound-discoverer/#Ref3).

The results of the OpenMS tool pipeline are automatically incorporated into the CD reporting format and can be examined inside CD. Export of result tables in the form of human readable text files is is supported by CD.

### Use

The functionality of our OpenMS quantification pipeline is encapsulated in a single node which follows on a previous Spectrum Source (e.g. the Spectrum Selector node). Most of the fine-grained parameters of used OpenMS tools are concealed and set to values adapted for Thermo instruments. If the user wants to visualize features linked across multiple input maps, the Peak Consolidator node has to be appended to MetaboProfiler.

<center>{{< figure src="/images/content_images/MetaboResults.png" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}</center>

### Support

If you have any questions, bug reports, or feature requests, please take a look at the [support page](/gethelp).

{{< notice warning >}}
Please note that Thermo only provides the framework for the integration of third party plugins. They do neither provide any support nor take any legal responsibility for external contributions. If you have any questions, bug reports, or feature requests regarding the OpenMS MetaboProfiler node, please contact the OpenMS developer mailing list instead: open-ms-developers@lists.sourceforge.net
{{< /notice >}}

**How to cite:**
- [[1]](http://dx.doi.org/10.1074/mcp.M113.031278) E. Kenar, H. Franken, S. Forcisi, H. Wörmann Kilia nand Häring, R. Lehmann, S. Philippe, A. Zell, and O. Kohlbacher, “Automated Label-free Quantification of Metabolites from Liquid Chromatography-Mass Spectrometry Data.,” Mol Cell Proteomics, vol. 13, iss. 1, pp. 348-359, 2014.
- [[2]](http://dx.doi.org/10.1021/pr300992u) H. Weisser, S. Nahnsen, J. Grossmann, L. Nilse, A. Quandt, H. Brauer, M. Sturm, E. Kenar, O. Kohlbacher, R. Aebersold, and L. Malmström, “An Automated Pipeline for High-Throughput Label-Free Quantitative Proteomics.,” J Proteome Res, 2013.
- [[3]](http://dx.doi.org/10.1093/bioinformatics/btm209) E. Lange, C. Gröpl, O. Schulz-Trieglaff, A. Leinenbach, C. Huber, and K. Reinert, “A geometric approach for the alignment of liquid chromatography-mass spectrometry data,” Bioinformatics, vol. 23, iss. 13, pp. 273-281, 2007.

## OpenMS in proteome discoverer

**What are Proteome Discoverer Community Nodes?**

Starting from version 2.0 Proteome Discoverer functionality can be extended by external plugins. Several OpenMS workflows are now made available as Proteome Discoverer Community Nodes. If you are interested in metabolite or small molecule analysis you might want to check out our [Compound Discoverer Community Node](http://www.openms.de/getting-started/proteome-and-compound-discoverer-integration/openms-in-compound-discoverer/).

### LFQProfiler

Label-free quantification (LFQ) of peptides and proteins has become a very popular analytical technique in particular in clinical proteomics. Large-scale studies comprising hundreds or even thousands of LC-MS experiments require efficient computational processing tools. Here, we present the integration of an OpenMS-based LFQ workflow into the Proteome Discoverer platform.

<center>{{< figure src="/images/content_images/vlcsnap.png" >}}</center>

In addition, we provide the intended processing and consensus workflow. Please note that, at the moment, the combination with Sequest HT and Percolator is mandatory, since our community nodes require some of the information produced by these nodes. Combinations with other peptide identification and validation nodes might work, but have not been tested yet.

- [Processing workflow](http://sourceforge.net/projects/open-ms/files/CommunityNodes/LFQProfiler_processing.pdProcessingWF/download)
- [Consensus workflow](http://sourceforge.net/projects/open-ms/files/CommunityNodes/LFQProfiler_consensus.pdConsensusWF/download)

### RNPxl

UV-induced cross-linking combined with LC-MS/MS analysis has been successful in the elucidation of protein-DNA and protein-RNA interactions. We recently presented RNPxl, a computational pipeline, implemented in the OpenMS framework, for the analysis of LC-MS/MS cross-link data. The RNPxl workflow is now made available to a larger audience by integration into the Proteome Discoverer platform. In addition, we were able to increase processing speed by a factor of ten compared to the previous version.

<center>{{< figure src="/images/content_images/pd_rnpxl_wf1.jpeg" >}}</center>

- [Processing workflow](http://sourceforge.net/projects/open-ms/files/CommunityNodes/RNPxl_processing.pdProcessingWF/download)
- [Consensus workflow](http://sourceforge.net/projects/open-ms/files/CommunityNodes/RNPxl_consensus.pdConsensusWF/download)

### Support

If you have any questions, bug reports, or feature requests, please take a look at the [support page](/gethelp).

### Disclaimer

Please note that Thermo only provides the framework for the integration of third-party plugins. They do neither provide any support nor take any legal responsibility for external contributions. If you have any questions, bug reports, or feature requests regarding the OpenMS Community Nodes for Proteome Discoverer, please contact the [OpenMS mailing list](open-ms-general@lists.sourceforge.net) or open an [issue on GitHub](https://github.com/OpenMS/PDCommunityNodes/issues) instead.

### References

Sturm et al. OpenMS – an open-source software framework for mass spectrometry. BMC Bioinformatics, 9:163, 2008.

Weisser et al. An automated pipeline for high-throughput label-free quantitative proteomics. J. Proteome Res., 12(4):1628–1644, 2013.

Kramer et al. Photo-cross-linking and high-resolution mass spectrometry for assignment of RNA-binding sites in RNA-binding proteins. Nat Methods., 11(10):1064-70, 2014.

Berthold et al. KNIME: The Konstanz Information Miner. In Studies in Classification, Data Analysis, and Knowledge Organization (GfKL 2007). Springer, 2007.

Serang et al. Efficient marginalization to compute protein posterior probabilities from shotgun mass spectrometry data. J Proteome Res., 9(10): 5346–5357, 2010.
