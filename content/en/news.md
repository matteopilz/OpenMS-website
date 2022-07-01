---
title: News
sidebar: false
newsHeader: Latest News - OpenMS Made it to GSoD 22 🎉
date:
---

### SECOND OpenMS DOCUMENTATION UPDATE

The OpenMS team has won a 2022 Google Season of Docs grant to update the OpenMS documentation. Combined with money from the University of Tübingen, a team of three technical writers will review and rewrite OpenMS documentation. The 2022 team consists of Rahul Agrawal, Christina Kumar and Tapasweni Pathak.

### OpenMS DEVELOPERS’ MEETING 4-8 APRIL 2022 

_Dec 31, 2021_ -- The OpenMS developer meeting brings bioinformaticians working in computational mass spectrometry together to shape the future development of OpenMS. It is targeted to core developers, new developers, and potential future contributors. Short talks, developer tutorials, and code sprints will be intertwined. Participants will have the opportunity to design custom tools and workflows together with instructors. External users are welcome to bring their own ideas and will receive detailed feedback as well as help getting started in OpenMS development. Progress will be tracked on our GitHub page with a resume of each day.

For registration mail Timo Sachsenberg at  timo.sachsenberg@uni-tuebingen.de

### OpenMS DOCUMENTATION UPDATE FUNDED BY GOOGLE SEASON OF DOC

The OpenMS team has won a 2021 [Google Season of Docs](https://developers.google.com/season-of-docs/docs/participants) grant to update the OpenMS documentation. From 1 June until 30 September 2021, technical writer Rahul Agrawal will review and rewrite OpenMS documentation, with a focus on [pyOpenMS](https://pyopenms.readthedocs.io/en/latest/).

### VIRTUAL OpenMS DEVELOPERS MEETING 15-16 APRIL 2021

_April 15, 2021_ The OpenMS developer meeting brings bioinformaticians working in computational mass spectrometry together to shape the future development of OpenMS. It is targeted to core developers, new developers, and potential future contributors. Short talks, developer tutorials, and code sprints will be intertwined. Participants will have the opportunity to design custom tools and workflows together with instructors. External users are welcome to bring their own ideas and will receive detailed feedback as well as help getting started in OpenMS development. Progress will be tracked on our GitHub page with a resume of each day.

For registration mail Timo Sachsenberg at sachsenb@informatik.uni-tuebingen.de

### OpenMS 2.6.0 RELEASED

We are proud to announce the release of OpenMS 2.6.0. Grab it [here](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/OpenMSInstaller/release/2.6.0)

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
