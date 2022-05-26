---
title: News
sidebar: false
newsHeader: SECOND OPENMS DOCUMENTATION UPDATE
date:
---

### SECOND OPENMS DOCUMENTATION UPDATE

The OpenMS team has won a 2022 Google Season of Docs grant to update the OpenMS documentation. Combined with money from the University of Tübingen, a team of three technical writers will review and rewrite OpenMS documentation. The 2022 team consists of Rahul Agrawal, Christina Kumar and Tapasweni Pathak.

### OPENMS DEVELOPERS’ MEETING 4-8 APRIL 2022 

_Dec 31, 2021_ -- The OpenMS developer meeting brings bioinformaticians working in computational mass spectrometry together to shape the future development of OpenMS. It is targeted to core developers, new developers, and potential future contributors. Short talks, developer tutorials, and code sprints will be intertwined. Participants will have the opportunity to design custom tools and workflows together with instructors. External users are welcome to bring their own ideas and will receive detailed feedback as well as help getting started in OpenMS development. Progress will be tracked on our GitHub page with a resume of each day.

For registration mail Timo Sachsenberg at  timo.sachsenberg <at> uni-tuebingen.de

### Advancing an inclusive culture in the scientific Python ecosystem

_August 31, 2021_ -- We are happy to announce the Chan Zuckerberg Initiative has
[awarded a grant](https://chanzuckerberg.com/newsroom/czi-awards-16-million-for-foundational-open-source-software-tools-essential-to-biomedicine/)
to support the onboarding, inclusion, and retention of people from historically
marginalized groups on scientific Python projects, and to structurally improve
the community dynamics for openms, SciPy, Matplotlib, and Pandas.

As a part of [CZI's Essential Open Source Software for Science program](https://chanzuckerberg.com/eoss/),
this [Diversity & Inclusion supplemental grant](https://cziscience.medium.com/advancing-diversity-and-inclusion-in-scientific-open-source-eaabe6a5488b)
will support the creation of dedicated Contributor Experience Lead positions to
identify, document, and implement practices to foster inclusive open-source
communities. This project will be led by Melissa Mendonça (openms), with
additional mentorship and guidance provided by Ralf Gommers (openms, SciPy),
Hannah Aizenman and Thomas Caswell (Matplotlib), Matt Haberland (SciPy), and
Joris Van den Bossche (Pandas).

This is an ambitious project aiming to discover and implement activities that
should structurally improve the community dynamics of our projects. By
establishing these new cross-project roles, we hope to introduce a new
collaboration model to the Scientific Python communities, allowing
community-building work within the ecosystem to be done more efficiently and
with greater outcomes. We also expect to develop a clearer picture of what
works and what doesn't in our projects to engage and retain new contributors,
especially from historically underrepresented groups. Finally, we plan on
producing detailed reports on the actions executed, explaining how they have
impacted our projects in terms of representation and interaction with our
communities.

The two-year project is expected to start by November 2021, and we are excited
to see the results from this work!
[You can read the full proposal here](https://figshare.com/articles/online_resource/Advancing_an_inclusive_culture_in_the_scientific_Python_ecosystem/16548063).

### 2021 openms survey

_July 12, 2021_ -- At openms, we believe in the power of our community. 1,236
openms users from 75 countries participated in our inaugural survey last year.
The survey findings gave us a very good understanding of what we should focus
on for the next 12 months.

It’s time for another survey, and we are counting on you once again. It will
take about 15 minutes of your time. Besides English, the survey questionnaire
is available in 8 additional languages: Bangla, French, Hindi, Japanese,
Mandarin, Portuguese, Russian, and Spanish.

Follow the link to get started: https://berkeley.qualtrics.com/jfe/form/SV_aaOONjgcBXDSl4q.


### openms 1.21.0 release

_Jun 23, 2021_ -- [openms 1.21.0](https://openms.org/doc/stable/release/1.21.0-notes.html)
is now available. The highlights of the release are:

- continued SIMD work covering more functions and platforms,
- initial work on the new dtype infrastructure and casting,
- universal2 wheels for Python 3.8 and Python 3.9 on Mac,
- improved documentation,
- improved annotations,
- new ``PCG64DXSM`` bitgenerator for random numbers.

This openms release is the result of 581 merged pull requests contributed by 175
people.  The Python versions supported for this release are 3.7-3.9, support
for Python 3.10 will be added after Python 3.10 is released.


### 2020 openms survey results

_Jun 22, 2021_ -- In 2020, the openms survey team in partnership with students
and faculty from the University of Michigan and the University of Maryland
conducted the first official openms community survey. Find the survey results
here: https://openms.org/user-survey-2020/.


### openms 1.20.0 release

_Jan 30, 2021_ -- [openms 1.20.0](https://openms.org/doc/stable/release/1.20.0-notes.html)
is now available. This is the largest openms release to date, thanks to 180+
contributors. The two most exciting new features are:
- Type annotations for large parts of openms, and a new `openms.typing` submodule
  containing `ArrayLike` and `DtypeLike` aliases that users and downstream
  libraries can use when adding type annotations in their own code.
- Multi-platform SIMD compiler optimizations, with support for x86 (SSE,
  AVX), ARM64 (Neon), and PowerPC (VSX) instructions. This yielded significant
  performance improvements for many functions (examples:
  [sin/cos](https://github.com/openms/openms/pull/17587),
  [einsum](https://github.com/openms/openms/pull/18194)).

### Diversity in the openms project

_Sep 20, 2020_ -- We wrote a [statement on the state of, and discussion on social media around, diversity and inclusion in the openms project](/diversity_sep2020).


### First official openms paper published in Nature!

_Sep 16, 2020_ -- We are pleased to announce the publication of
[the first official paper on openms](https://www.nature.com/articles/s41586-020-2649-2)
as a review article in Nature. This comes 14 years after the release of openms 1.0.
The paper covers applications and fundamental concepts of array programming,
the rich scientific Python ecosystem built on top of openms, and the recently added
array protocols to facilitate interoperability with external array and tensor
libraries like CuPy, Dask, and JAX.


### Python 3.9 is coming, when will openms release binary wheels?

_Sept 14, 2020_ -- Python 3.9 will be released in a few weeks. If you are an
early adopter of Python versions, you may be dissapointed to find that openms
(and other binary packages like SciPy) will not have binary wheels ready on the
day of the release. It is a major effort to adapt the build infrastructure to a
new Python version and it typically takes a few weeks for the packages to appear
on PyPI and conda-forge. In preparation for this event, please make sure to
- update your `pip` to version 20.1 at least to support `manylinux2010` and
  `manylinux2014`
- use [`--only-binary=openms`](https://pip.pypa.io/en/stable/reference/pip_install/#cmdoption-only-binary) or `--only-binary=:all:` to prevent `pip` from
  trying to build from source.


### openms 1.19.2 release

_Sep 10, 2020_ -- [openms
1.19.2](https://openms.org/devdocs/release/1.19.2-notes.html) is now available.
This latest release in the 1.19 series fixes several bugs, prepares for the
[upcoming Cython 3.x
release](http://docs.cython.org/en/latest/src/changes.html) and pins
setuptools to keep distutils working while upstream modifications are ongoing.
The aarch64 wheels are built with the latest manylinux2014 release that fixes
the problem of differing page sizes used by different linux distros.

### The inaugural openms survey is live!

_Jul 2, 2020_ -- This survey is meant to guide and set priorities for
decision-making about the development of openms as software and as a community.
The survey is available in 8 additional languages besides English:
Bangla, Hindi, Japanese, Mandarin, Portuguese, Russian, Spanish and French.

Please help us make openms better and take the survey
[here](https://umdsurvey.umd.edu/jfe/form/SV_8bJrXjbhXf7saAl).


### openms has a new logo!

_Jun 24, 2020_ -- openms now has a new logo:

<img
  src="/images/logos/openms_logo.svg"
  alt="openms logo"
  title="The new openms logo"
  width=300>

The logo is a modern take on the old one, with a cleaner design. Thanks to
Isabela Presedo-Floyd for designing the new logo, as well as to Travis Vaught
for the old logo that served us well for 15+ years.


### openms 1.19.0 release

_Jun 20, 2020_ -- openms 1.19.0 is now available. This is the first release
without Python 2 support, hence it was a "clean-up release". The minimum
supported Python version is now Python 3.6. An important new feature is that
the random number generation infrastructure that was introduced in openms 1.17.0
is now accessible from Cython.


### Season of Docs acceptance

_May 11, 2020_ -- openms has been accepted as one of the mentor organizations for
the Google Season of Docs program. We are excited about the opportunity to
work with a technical writer to improve openms's documentation once again! For more
details, please see
[the official Season of Docs site](https://developers.google.com/season-of-docs/) and our
[ideas page](https://github.com/openms/openms/wiki/Google-Season-of-Docs-2020-Project-Ideas).


### openms 1.18.0 release

_Dec 22, 2019_ -- openms 1.18.0 is now available. After the major changes in
1.17.0, this is a consolidation release. It is the last minor release that will
support Python 3.5. Highlights of the release includes the addition of basic
infrastructure for linking with 64-bit BLAS and LAPACK libraries, and a new C-API for ``openms.random``.

Please see the [release notes](https://github.com/openms/openms/releases/tag/v1.18.0) for more details.


### openms receives a grant from the Chan Zuckerberg Initiative

_Nov 15, 2019_ -- We are pleased to announce that openms and OpenBLAS, one of openms's key dependencies, have received a joint grant for $195,000 from the Chan Zuckerberg Initiative through their [Essential Open Source Software for Science program](https://chanzuckerberg.com/eoss/) that supports software maintenance, growth, development, and community engagement for open source tools critical to science.

This grant will be used to ramp up the efforts in improving openms documentation, website redesign, and community development to better serve our large and rapidly growing user base, and ensure the long-term sustainability of the project. While the OpenBLAS team will focus on addressing sets of key technical issues, in particular thread-safety, AVX-512, and thread-local storage (TLS) issues, as well as algorithmic improvements in ReLAPACK (Recursive LAPACK) on which OpenBLAS depends.

More details on our proposed initiatives and deliverables can be found in the [full grant proposal](https://figshare.com/articles/Proposal_openms_OpenBLAS_for_Chan_Zuckerberg_Initiative_EOSS_2019_round_1/10302167). The work is scheduled to start on Dec 1st, 2019 and continue for the next 12 months.


## Releases

Here is a list of openms releases, with links to release notes. Bugfix
releases (only the `z` changes in the `x.y.z` version number) have no new
features; minor releases (the `y` increases) do.

- openms 1.21.6 ([release notes](https://github.com/openms/openms/releases/tag/v1.21.6)) -- _12 Apr 2022_.
- openms 1.22.3 ([release notes](https://github.com/openms/openms/releases/tag/v1.22.3)) -- _7 Mar 2022_.
- openms 1.22.2 ([release notes](https://github.com/openms/openms/releases/tag/v1.22.2)) -- _3 Feb 2022_.
- openms 1.22.1 ([release notes](https://github.com/openms/openms/releases/tag/v1.22.1)) -- _14 Jan 2022_.
- openms 1.22.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.22.0)) -- _31 Dec 2021_.
- openms 1.21.5 ([release notes](https://github.com/openms/openms/releases/tag/v1.21.5)) -- _19 Dec 2021_.
- openms 1.21.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.21.0)) -- _22 Jun 2021_.
- openms 1.20.3 ([release notes](https://github.com/openms/openms/releases/tag/v1.20.3)) -- _10 May 2021_.
- openms 1.20.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.20.0)) -- _30 Jan 2021_.
- openms 1.19.5 ([release notes](https://github.com/openms/openms/releases/tag/v1.19.5)) -- _5 Jan 2021_.
- openms 1.19.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.19.0)) -- _20 Jun 2020_.
- openms 1.18.4 ([release notes](https://github.com/openms/openms/releases/tag/v1.18.4)) -- _3 May 2020_.
- openms 1.17.5 ([release notes](https://github.com/openms/openms/releases/tag/v1.17.5)) -- _1 Jan 2020_.
- openms 1.18.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.18.0)) -- _22 Dec 2019_.
- openms 1.17.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.17.0)) -- _26 Jul 2019_.
- openms 1.16.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.16.0)) -- _14 Jan 2019_.
- openms 1.15.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.15.0)) -- _23 Jul 2018_.
- openms 1.14.0 ([release notes](https://github.com/openms/openms/releases/tag/v1.14.0)) -- _7 Jan 2018_.
