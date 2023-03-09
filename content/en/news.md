---
title: News
sidebar: false
newsHeader: Latest News - OpenMS developers meeting 27-31 March 2023 on Kaprije island, Croatia
date:
---

### OpenMS developers meeting 27-31 March 2023 on Kaprije island, Croatia

_19 Jan 2023_ The OpenMS developers meeting brings together people working in computational mass spectrometry to shape the future development of OpenMS. It is targeted to core developers, new developers, and potential future contributors. Short talks, developer tutorials, and code sprints will be intertwined. Participants will have the opportunity to design custom tools and workflows together with instructors. New developers will receive help getting started in OpenMS development. Progress will be tracked on our GitHub page with a resume of each day. For more details ping Tjeerd Dijkstra or Timo Sachsenberg on Gitter.

Please register at https://forms.gle/WTXeSMiNNKD9piAo6

### New OpenMS web site

_25 Nov 2022_ The OpenMS team is proud to present its new web site, hosting courtesy of Netlify. The new web site uses static HTML and the Hugo theme. Comments, issues or problems with the web site (or other OpenMS related matters) can be made thruough the blue button "Help Request" in the top right corner.

### New OpenMS read.the.docs manual

_1 Sep 2022_ The OpenMS team is proud to present a new OpenMS manual at openms.readthedocs.io. This manual provides much more detail about mass spectrometry including links to relevant sections of University of Tübingen video lectures and a glossary. It also provides more detail about installing OpenMS and it includes the pdf tutorial that was used in classroom presentations of OpenMS. Creation of the manual was supported by grants from Google Season of Docs, from the University of Tübingen and from the Chan-Zuckerberg Initiative Diversity&Inclusion program.

### Second OpenMS documentation update

_14 Apr 2022_ The OpenMS team has won a 2022 Google Season of Docs grant to update the OpenMS documentation. Combined with money from the University of Tübingen and from the Chan-Zuckerberg Initiative, a team of three technical writers will review and rewrite OpenMS documentation. The 2022 team consists of Rahul Agrawal, Christina Kumar and Tapasweni Pathak.

### OpenMS developers meeting 4-8 April 2022 near Corinth, Greece

_31 Dec 2021_ The OpenMS developers meeting brings bioinformaticians working in computational mass spectrometry together to shape the future development of OpenMS. It is targeted to core developers, new developers, and potential future contributors. Short talks, developer tutorials, and code sprints will be intertwined. Participants will have the opportunity to design custom tools and workflows together with instructors. External users are welcome to bring their own ideas and will receive detailed feedback as well as help getting started in OpenMS development. Progress will be tracked on our GitHub page with a resume of each day.

For registration mail Timo Sachsenberg at timo.sachsenberg@uni-tuebingen.de

### OpenMS documentation update funded by Google Season of Docs

_16 April 2021_ The OpenMS team has won a 2021 [Google Season of Docs](https://developers.google.com/season-of-docs/docs/participants) grant to update the OpenMS documentation. From 1 June until 30 September 2021, technical writer Rahul Agrawal will review and rewrite OpenMS documentation, with a focus on [pyOpenMS](https://pyopenms.readthedocs.io/en/latest/).

### Virtual OpenMS developers meeting 15-16 april 2021

_15 April 2021_ The OpenMS developers meeting brings bioinformaticians working in computational mass spectrometry together to shape the future development of OpenMS. It is targeted to core developers, new developers, and potential future contributors. Short talks, developer tutorials, and code sprints will be intertwined. Participants will have the opportunity to design custom tools and workflows together with instructors. External users are welcome to bring their own ideas and will receive detailed feedback as well as help getting started in OpenMS development. Progress will be tracked on our GitHub page with a resume of each day.

For registration mail Timo Sachsenberg at sachsenb@informatik.uni-tuebingen.de

### OpenMS 2.6.0 released

We are proud to announce the release of OpenMS 2.6.0. Grab it [here](https://abibuilder.cs.uni-tuebingen.de/archive/openms/OpenMSInstaller/release/2.6.0)

- source + conda release only. This means installers, workflows and GUI are untested.
- Restructuring of Imported CMake targets and pyOpenMS CMake
- Reduce exposition of third-party libraries to interface
- greatly improved pyOpenMS documentation and extra functions (in the pyopenms-extra submodule)
- Fixes IDMapper for isobaric labelling experiments (will lead to much more identifications)
- Deisotoping algorithm using KL
- PeptideIndexer supports ambiguous AA's in Peptide sequence (as reported by recent Mascot versions) (#5776)
- SeqAn external library removed from source tree (not needed anymore)
- Resolve compatibility issues between IDRipper and IDMerger (#4957)
- Basic MzTabM support for AccurateMassSearch
- Changed default parameter keep_unidentified_masses to "true" (AccurateMassSearch/AccurateMassSearchEngine)

## Releases

Here is a list of OpenMS releases, with links to release notes. Bugfix
releases (only the `z` changes in the `x.y.z` version number) have no new
features; minor releases (the `y` increases) do.

- OpenMS 2.8.0 ([release notes](https://github.com/OpenMS/OpenMS/releases/tag/Release2.8.0)) -- _23 Feb 2022_.
- OpenMS 2.7.0 ([release notes](https://github.com/OpenMS/OpenMS/releases/tag/Release2.7.0)) -- _16 Sep 2021_.
