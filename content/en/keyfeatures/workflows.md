---
title: "OpenMS For Workflows"
sidebar: true
---

## OPENMS IN KNIME

As part of the Center for Integrative Bioinformatics (CiBi) in the German Network for Bioinformatics ([deNBI](http://www.denbi.de/)), we are currently focusing our development efforts on the integration of OpenMS into KNIME. KNIME is a well-established data analysis framework that supports the generation of workflows for data analysis. Using a Common Tool Description ([CTD](https://github.com/WorkflowConversion/CTDSchema)) file which is writeable by every TOPP tool and a node generator program ([Generic Knime Nodes](https://github.com/genericworkflownodes/GenericKnimeNodes)), all TOPP tools can be made available to run in KNIME.

{{< figure src="/images/content_images/kf/KNIME_screenshot.png" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}

### Installing OpenMS in KNIME

Installation of OpenMS in KNIME is very easy and platform-independent across Windows, MacOSX and Linux. Download the latest KNIME release from the [KNIME website](http://www.knime.org/). If you choose the full install of KNIME you most likely can skip the following installation routine since all required plugins should be installed by default.
If you chose the standard (core) installation, follow the instructions here or in the extended User [Tutorial](https://github.com/OpenMS/Tutorials) :

1. In KNIME click on Help 
2. Install new Software.

<center>{{< figure src="/images/content_images/kf/KNIME_Install.png" caption="**Example workflow in KNIME**" alt="Example workflow in KNIME" >}}</center>

3. Install the required KNIME File Handling nodes from the official KNIME Update Site (a standard entry in the update sites). Choose the update site from the “Work with:” dropdown menu.

Name: KNIME Analytics Platform ${YOUR_KNIME_VERSION} Update Site
Location: [http://update.knime.org/analytics-platform/${YOUR_KNIME_VERSION}](http://update.knime.org/analytics-platform/${YOUR_KNIME_VERSION})

Filter the results for “File handling” and select the KNIME File Handling Nodes. Click Next and install.

Next, we will install the actual OpenMS plugin. Next to the “Work with:” dropdown menu, click on “Add…”.

<center>{{< figure src="/images/content_images/kf/KNIME_update_site.jpeg" alt="Example workflow in KNIME" >}}</center>

In the opening dialog fill in at least one of the following additional Update Sites (if not already present):

### Recommended:
**Name**: KNIME Community Contributions (Stable) <br>
**Location**: http://update.knime.org/community-contributions/trusted/${YOUR_KNIME_VERSION}

### Unstable:
**Name**: KNIME Nightly Community Contributions (trunk)<br>
**Location**: http://update.knime.org/community-contributions/trunk

Use the search or navigate to “KNIME Community Contributions – Bioinformatics & NGS” and select “OpenMS”. Then click “Next” and follow the installation instructions. A restart of KNIME might be necessary afterward. On Windows, you might be prompted to install additional requirements like the Microsoft Visual Studio Redistributable for the conversion software ProteoWizard that is packaged with our plugin.
After a restart of KNIME the OpenMS nodes will be available in your Node Repository (panel on the lower left) under “Community Nodes”.

### Creating workflows with KNIME

Download our [Introduction to OpenMS in KNIME](https://www.openms.de/wp-content/uploads/2016/02/handout1.pdf) containing hands-on training material covering also basic usage of KNIME. See the official [KNIME Getting Started](https://tech.knime.org/knime) guide for a more in-depth view of the KNIME functionality besides OpenMS.

When you encounter any problems, please see our [Support](/gethelp) page and specifically for the usage of OpenMS in KNIME, the KNIME community contributions [forum](https://tech.knime.org/forum/openms). When in doubt where to turn to, open an issue on our [GitHub issue](https://github.com/OpenMS/OpenMS/issues) tracker.

### Creating your own Generic KNIME Nodes
See the more advanced instructions on our [Getting Started](/getting-started/develop-your-own-openms-tools) page for developers.

### Example 

Please click on the [link here](/knime-example-workflows) to check some emxaple workflows.

## OPENMS IN GALAXY

Nodes for OpenMS tools have been kindly made available via the PROTEOMICS, METABOLOMICS, CHEMISTRY section at https://usegalaxy.eu/ and can be browsed by searching for OpenMS in the tools search box.

<center>{{< figure src="/images/content_images/galaxy_eu.png" >}}</center>

