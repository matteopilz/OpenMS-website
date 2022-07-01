---
title: Applications
sidebar: false
---

OpenMS is a flexible codebase that can be tailored to many different applications ranging from the standard label free analysis to top down, metabolomics, crosslinking or DIA.

Choose an application of OpenMS that you are interested in. The pages will provide explanations on how OpenMS can be used to solve your problems and link to workflows that allow you to apply the tools to your data.

If you cannot find your application in the menu on the left, more OpenMS tools can be found in the [TOPP documentation](http://openms.de/documentation/TOPP_documentation.html).


## Featured Tools

***

### Intelligent data acquisition for top-down proteomics (FLASHIda)

**FLASHIda beta version (under construction)**

FLASHIda is an intelligent online data acquisition algorithm for top-down proteomics (TDP) that ensures the real-time selection of high-quality precursors of diverse proteoforms. FLASHIda combines fast decharging algorithms in FLASHDeconv and machine learning-based quality assessment to identify optimal precursors for fragmentation. Currently the c# source code and instruction of FLASHIda is available in here under a BSD three-clause license. We are working on merging FLASHIda into OpenMS.

***

### Feature level label-free quantification algorithm for top-down proteomics (FLASHDECONVQ)

Prototype of FLASHDeconvQ, a feature level LFQ algorithm for top-down proteomics, is developed based on OpenMS and FLASHDeconv.

<button name="button" style = "color: white;background: black;border-radius: 10px;font-size: large;font-weight: bold;" onclick="https://github.com/JeeH-K/OpenMS/tree/feature/FLASHDeconvQ">Check it out on Github!</button>

***

### SRM Quantitation & QC (SMARTPEAK 2)

{{< figure src="/images/content_images/SmartPeak_overview-scaled-wpcf_812x400.jpeg" >}}

Based on OpenMS, a full SRM quantitation and quality control suite was developed by DTU BioSustain. It provides a standalone GUI for easy, fast, and scalable analysis of high-throughput metabolomics SRM experiments. It also added a set of state-of-the-art peak integration and peak alignment algorithms to the library.

<button name="button" style = "color: white;background: black;border-radius: 10px;font-size: large;font-weight: bold;" onclick="https://github.com/dmccloskey/SmartPeak2">Check it out on Github!</button>

***

### Protein-nucleic acid cross-linking (OPENNUXL)

{{< figure src="/images/content_images/opennuxl.png" >}}

Thanks for your interest in OpenNuXL – our novel Protein-nucleic acid cross-linking search engine.
It will be soon fully integrated into an official OpenMS release and all source code will be made available.
Prior to publication, installers (and source code) are available on request: please contact sachsenb (at) informatik.uni-tuebingen.de

***

### Efficient bayesian protein inference (EPIFANY)
<br>
<center>{{< figure src="/images/content_images/epifany_factor_graph-wpcf_465x400.png" >}}</center>

#### Introduction

_EPIFANY_  is a protein inference engine based on a Bayesian network. Currently, a similar model to
Fido is used with the main parameters alpha (pep_emission), beta (pep_spurious_emission) and gamma (prot_prior).
If not specified, these parameters are trained based on their classification performance and calibration
via a grid search by simply running with several possible combinations and evaluating. Unless you see very extreme output
probabilities (e.g. many close to 1.0 or 0.0) or you know good parameters (e.g. from an earlier run),
grid search is recommended, although slower. The tool will merge multiple idXML files (union of proteins
and concatenation of PSMs) when given more than one. This is useful for fractions or replicates if they were not merged already.
It assumes one search engine run per input file but might work on more with undefined behavior.
Proteins need to be indexed by OpenMS’s PeptideIndexer but this is usually done before
Percolator/IDPEP since target/decoy associations are needed there already. Make sure that the input PSM
probabilities are not too extreme already (garbage in – garbage out). After merging, the input probabilities
are preprocessed with a low posterior probability cutoff to neglect very unreliable matches. Then
the probabilities are aggregated with the maximum per peptide and the graph is built and split into
connected components. When compiled with the OpenMP flag (default enabled in the release binaries) the tool is multithreaded which can
be activated at runtime by the threads parameter. Note that peak memory requirements
may rise when processing multiple components of the graph at the same time.  The tool offers an option for a greedy group resolution
which is helpful for reducing false-positive identifications in the presence of many shared peptides between present and non-present proteins.
Note that it might reduce true positives, too and introduces a fake certainty by removing proteins without evidence after retaining only associations
between a peptide and its best producing group (after probabilistic inference). The option is mainly suggested when protein inference
is the last step of the analysis. A middle-ground between greedy resolution and standard (sum-product) inference is a regularized
max-product inference (for this, set the regularize flag and choose a p-norm smaller than 0 [implying infinity]).

#### Update (February 2020) – Now in OpenMS 2.5+

EPIFANY can now also be found in the official OpenMS 2.5 release (or later). We recommend using the version that ships with your OpenMS distribution of choice. For the
binary used in the publication, you can use the installation links and methods below or check out the source code from the [corresponding GitHub tag](https://github.com/jpfeuffer/OpenMS/tree/epifany_paper).

<a href="https://abibuilder.informatik.uni-tuebingen.de/archive/openms/OpenMSInstaller/experimental/feature/proteomic_lfq/"><button name="button" style = "color: white;background: black;border-radius: 10px;font-size: large;font-weight: bold;">DOWNLOAD EPIFANY WITH OpenMS AS COMMAND LINE TOOL (EXPERIMENTAL BRANCH)</button></a>

Steps:
1) Download the installer for your platform via the button above
2) Install OpenMS following the Installation instructions
3) After installation and adding the TOPP tools (including EPIFANY) to your global Path environment,
you can start scripting. Follow the instructions here for some introduction to scripting with OpenMS

<a href="https://www.knime.com/downloads/download-knime"><button name="button" style = "color: white;background: black;border-radius: 10px;font-size: large;font-weight: bold;">USE EPIFANY IN KNIME WORKFLOWS WITH GRAPHICAL USER INTERFACE</button></a>

Steps:
1) Download the KNIME installer for your platform via the button above
2) Install KNIME
3) After installation follow this small [video tutorial](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/Tutorials/Videos/installOpenMSKNIMEplugin.mp4) to install the OpenMS plugin. Use the following update site URL for
the copy-paste step in the video: https://abibuilder.informatik.uni-tuebingen.de/archive/openms/knime-plugin/updateSite/experimental/feature/proteomic_lfq
You can give it any name (e.g. OpenMS EPIFANY Update Site).
4) You will then find EPIFANY (together with the other OpenMS nodes) in the node repository in the lower left of the program.
5) You can create a new workflow with it or import the workflow for our example data. Don’t forget to configure Input File(s) to point to the files on your computer

#### System Requirements:

Install or build OpenMS (see OpenMS’ requirements at the bottom of the page). You can do it either standalone or as a KNIME plugin.

#### Command Line

Command line documentation of the tool can be found here (in the UTILS section of the OpenMS documentation under the tool’s name).

#### Limitations

Contradicting connected components may dictate runtime in certain parameter settings.
Extensive parameter grid search is computationally expensive (may be reduced if there are good estimates).

#### Inputs

**Direct input for the tool**: An idXML file with indexed and target-decoy annotated proteins and peptides that carry probabilities (e.g. from OpenMS’ IDPosteriorProbability, Percolator, Peptide/iProphet…)

**General input for a complete protein inference workflow**: Centroided mzMLs from a bottom-up/shotgun data-dependent acquisition experiment. If your data is in “.raw” format you can do the conversion and centroiding with e.g. proteo-wizard (included in every OpenMS installation, too).
Inputs can be replicates and/or fractions. Depending on your goals you could also merge conditions. We advise calculating peptide probabilities on a global (i.e. merged) level, as done in the example workflow.

***

#### Download sources and example data

**Publication:** J. Pfeuffer, T. Sachsenberg, T. M. Dijkstra, O. Serang, K. Reinert, and O. Kohlbacher, “EPIFANY-A method for efficient high-confidence protein inference,” Journal of proteome research, p. 734327, 2019.

Experimental **installer downloads** until it is merged into the OpenMS Release: [OpenMS experimental archive](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/OpenMSInstaller/experimental/feature/proteomic_lfq)

**Example Data**: You can use the converted mzMLs on our [server](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/Tutorials/Data/iPRG2016/) as direct input to the KNIME workflow that is also linked there. The data comes from the [iPRG2016](https://www.ebi.ac.uk/pride/archive/projects/PXD008425) study (sample “B”). You can also use the merged idXML on the server for a direct input to EPIFANY.

**Large-scale Example Data**: An example for larger scale data can be found on the same [server](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/Tutorials/Data/iPRG2016/) (bigDataProbabilities.idXML). Its raw files/mzMLs will be referenced after the dataset is published.

**Example KNIME Workflow**: Workflows implemented in [KNIME](http://www.knime.com/) are also found on the [server](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/Tutorials/Data/iPRG2016/). The outputs of the workflow are compatible with the evaluation script of the [iPRG2016](https://github.com/statisticalbiotechnology/proteoform-standard) study. Experimental update site for the plugin installation in KNIME (copy-paste when adding a new update site under Help->Install New Software): [https://abibuilder.informatik.uni-tuebingen.de/archive/openms/knime-plugin/updateSite/experimental/feature/proteomic_lfq](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/knime-plugin/updateSite/experimental/feature/proteomic_lfq)

OpenMS implementation **sources**: [github.com](https://github.com/OpenMS/OpenMS/tree/feature/proteomic_lfq) (Epifany.cpp and BayesianProteinInferenceAlgorithm class)

**Inference library source**: [Evergreen](https://bitbucket.org/orserang/evergreenforest)

***

### ULTRA-FAST MS1/MS2 deconvolution for top-down proteomics: FLASHDECONV 2.0 BETA+, finally with a GUI!

FLASHDeconv 2.0 beta+ with a GUI!!

Finally a GUI is here. You can find the GUI command in [OpenMS path]/bin folder. Go to [OpenMS path]/bin and run FLASHDeconvWizard! FLASHDeconv 2.0 beta+ works for MS1 and MS2 spectral deconvolution and feature deconvolution. It supports various output formats (e.g., *.tsv, *.mzML, *.msalign, and *.feature). FLASHDeconv 2.0 stable version will be officially integrated in OpenMS 2.7.0 released in near future. FLASHDeconv 2.0 beta+ also supports TopPIC identification better than the previous version, by generating all msalign and feature files for TopPIC inputs. We also added spectral merging function to support QTOF dataset analysis and NativeMS dataset analysis.

To read more about it, please click <a href="/application/flashdeconv/">here</a>.

***

### Nucleic acid search engine (NASE)

NASE is now included in OpenMS release, 2.5.

Requirements:

- HCD (or ETD) data of RNA oligonucleotides acquired on a high-resolution mass spectrometer
- Fragment spectra (MS/MS) need to be centroided (either on acquisition, conversion, or in a workflow using the TOPP tool PeakPickerHiRes)
- Developed and tested on Linux (Ubuntu 18.04 and 18.10) systems with data from orbitrap instruments
- Operating system: OpenMS installers have been tested on Ubuntu Linux 18.04, Windows 7/8/10, and macOS 10.12-10.14. If you experience any troubles don’t hesitate to contact the OpenMS team on Gitter [chat](https://gitter.im/OpenMS/OpenMS) or open an issue in the OpenMS [GitHub repository](https://github.com/OpenMS/OpenMS/issues).

**Publication:**

Wein, S., Andrews, B., Sachsenberg, T. et al. A computational platform for high-throughput analysis of RNA sequences and modifications by mass spectrometry. Nat Commun 11, 926 (2020). https://doi.org/10.1038/s41467-020-14665-7

**Example data:**

Mass spectrometry data and analysis results from four validation datasets have been deposited to the ProteomeXchange Consortium (http://proteomecentral.proteomexchange.org) via the PRIDE partner repository with the dataset identifiers [PXD012094](https://www.ebi.ac.uk/pride/archive/projects/PXD012094), [PXD016308](https://www.ebi.ac.uk/pride/archive/projects/PXD016308), [PXD016323](https://www.ebi.ac.uk/pride/archive/projects/PXD016323), and [PXD016328](https://www.ebi.ac.uk/pride/archive/projects/PXD016328).

**Example workflow:**

<a href="https://sourceforge.net/projects/open-ms/files/Papers/NASE/NME1_pipeline.toppas/download"><button name="button" style = "color: white;background: black;border-radius: 10px;font-size: large;font-weight: bold;">Download example TOPPAS workflow</button></a>

This workflow can be used to reproduce the results from the [PXD016308](https://www.ebi.ac.uk/pride/archive/projects/PXD016308) dataset. Both input files and expected output files are available in the dataset. Runtime should be less than a minute. Usage instructions for TOPPAS can be found here.

***

### Protein-protein cross-linking (OPENPEPXL)

**OpenPepXL: an open source peptide cross-link identification tool**

OpenPepXL is a protein-protein cross-link identification tool implemented in C++ as part of OpenMS. It works with all uncleavable labeled and label-free cross-linkers but not (yet) with cleavable ones.

To read more about it, please click <a href="/application/openpepxl/">here</a>.

### RNA-PROTEIN CROSS-LINKING (RNPXL)

<center>{{< figure src="/images/content_images/applications/overview-wpcf_940x216.png" >}}</center>

RNP<sup>xl</sup> has been integrated into OpenMS and also the Proteome Discoverer Community Nodes. No custom installer is required anymore.

To read more about it, please click <a href="/application/rnpxl/">here</a>.

*** 

### Stable isotope probing (METAPROSIP)

MetaProSIP: automated inference of elemental fluxes in microbial communities

{{< notice info >}}
MetaProSIP has been fully integrated into OpenMS. No additional installer is required anymore.
{{< /notice >}}

To read more about it, please click <a href="/application/metaprosip/">here</a>.

*** 

## Featured workflows

### Quantitative data independent proteomics (DIAPROTEOMICS)

DIAproteomics is a bioinformatics analysis pipeline used for quantitative processing of data independent (DIA) proteomics data.

To read more about it, please click <a href="/application/diaproteomics/">here</a>.

*** 

### Data-independent acquisition metabolomics analyzer (DIAMETALYZER)

_DIAMetAlyzer_ is a KNIME workflow which integrates DDA and targeted DIA analysis for metabolomics, which allows for false-discovery rate estimation based a target-decoy approach (see figure 1). It performs DDA based candidate identification and constructs a target/decoy assay library, which is used for DIA target extraction and statistical validation (FDR estimation).

To read more about it, please click <a href="/application/diametalyzer/">here</a>.

*** 

### Quantification and identification of mhc peptides (MHCQUANT)

**MHCquant: Identify and quantify peptides from mass spectrometry raw data**

MHCquant is an analysis pipeline used for quantitative processing of data dependent (DDA) peptidomics data.

It was specifically designed to analyze immunopeptidomics data, which deals with the analysis of affinity-purified, unspecifically cleaved peptides that have recently been discussed intensively in the context of cancer vaccines. (https://www.nature.com/articles/ncomms13404)

To read more about it, please click <a href="/application/mhcquant/">here</a>.