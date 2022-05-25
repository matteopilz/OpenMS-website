---
title: Installing openms
sidebar: false
---

## Installation instructions:

Here you can select the operating system of your choce and follow the installation instructions.

### Installation on GNU/Linux

#### Install Debian package

If you are using a Debian-based Linux we suggest to use the deb-package provided by us in our [archive](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/OpenMSInstaller/release/latest). It is most easily installed with "gdebi" which automatically resolves the dependencies if they are available in your repositories.

```bash
sudo apt-get install gdebi
sudo gdebi /PATH/TO/OpenMS.deb
```

To ensure the tool functionality please add the OPENMS_DATA_PATH variable to your environment as follows (you will get an error advising you this when executing a tool):

```bash
export OPENMS_DATA_PATH=/usr/share/OpenMS 
```

Once the path is exported, close the current terminal and open a new one.

#### Install via package managers

Currently there are also packaged versions of OpenMS provided for Fedora, OpenSUSE, Debian, and Ubuntu [available in the corresponding package managers](https://pkgs.org/search/openms) of these distributions (they might require a lookup in thirdparty "science" repositories). For other GNU/Linux distributions or to obtain the most recent version of the library you need to build your own OpenMS.

> **_NOTE:_** Please note that these packages are not directly maintained by us and we can not guarantee the same behaviour as when building it on your own. Also their availability and version is subject to change and support might be limited (due to unforeseen or untested behaviour). We also suggest not to install them parallel to our Debian package.

### Installation on MacOS

Simply download and install the MacOS drag-and-drop installer for your system from our archive. After double-clicking, accepting the "downloaded App warning" and mounting the dmg image, drag the [OpenMS](https://abibuilder.informatik.uni-tuebingen.de/archive/openms/Documentation/release/latest/html/namespaceOpenMS.html) folder into your Applications folder as advised.

To use TOPP as regular apps in your shell just add the following lines to your ~/.profile file. Please adapt the first line to point to the folder where you installed OpenMS (e.g., /Applications/OpenMS-2.3.0)

```bash
export OPENMS_TOPP_PATH=<OpenMS-PATH>
source ${OPENMS_TOPP_PATH}/.TOPP_bash_profile
```

---

#### Known Issues:

Since macOS Catalina (maybe also Mojave) notarized apps and executables are mandatory. Although we put a lot of effort in signing and notarizing everything, it seems like our software still lands in quarantine on the abovementioned systems, after installation of the DMG (when downloading it from a browser). Therefore, to have a streamlined experience without blocking popups, we recommend to remove the quarantine flag manually. For this, open the Terminal.app and type the following (replace the first line with the actual installation directory):

```bash
cd /Applications/OpenMS-2.5-0
sudo xattr -r -d com.apple.quarantine *
```

There is also a known bug with running Java based thirdparty tools (like MSGFPlusAdapter and LuciphorAdapter) from within TOPPAS.app. Please run the TOPPAS.app from within the Terminal.app (e.g. with the open command) to get access to the path where Java is located (which is usually present in the PATH of your Terminal). Advanced users can set this path in the Info.plist of/inside the TOPPAS.app.

---

### Installation on Windows

In order to install the binary package of OpenMS & TOPP, simply download and execute the installer from OpenMS.de and follow its instructions. Run the installer under the user account that later runs OpenMS - do not install using your admin account! You will be asked for an admin authentification, but only after you start the installer as normal user. The windows binary version works with most versions of windows from Win7 to Win10 (older versions might still work but are untested).

> **_NOTE:_** If you are running Win8 or later, windows will report an error while installing .net4 as it's mostly included. But it might occur that .net3.5 does not get properly installed in the course. You can simply fix this by enabling the .NET Framework 3.5 yourself through Control Panel. See this [Microsoft help page](https://msdn.microsoft.com/de-de/library/hh506443(v=vs.110).aspx#ControlPanel) for detailed information. Even if this step fails, this does not affect the functionality of OpenMS, except for the executability of included thirdparty tools (ProteoWizard).

---

#### Known Issues:

**Problem**
During installation, an error message pops up, saying *"The installation of the Microsoft .NET 3.5 SP1' package failed! You must download and install it manually in order for Proteowizard to work."*

- **Solution**
This should only happen if you selected to install the *"Third Party - Proteowizard"* components. The reason is usually that .NET 3.5 SP1 is already installed (see Windows Control Panel). If it's not installed, follow the instructions of the error message.

**Problem**
During installation, an error message pops up, saying *"The installation of the Visual Studio redistributable package ... failed. ..."*.

- **Solution**
First of all, we'd like to stress that is a problem of a Microsoft package - we cannot do anything about it.
The error message will give you the location where the redistributable package was extracted to. Go to this folder and run the executable (usually named 'vcredistXXXX.exe') as an administrator (right-click -> Run-As). You will likely receive an error message (this is also the reason why the OpenMS setup complained about it). Now you have to find a solution yourself. If you're lucky the error message is instructive and the problem is easy to fix.
For some messages we have a recipe:

  - Error: *"Error opening installation log file"*<br>
    Fix: the system environment variables might be messed up. There should be a 'TMP' and a 'TEMP' variable, and both should contain ONE(!) directory only, which exists and is writable. Fix accordingly (search the internet on how to change environment variables on Windows).

---

## pyOpenMS installation

pyOpenMS is a python library for Liquid Chromatography-Mass Spectrometry (LC-MS) data analysis. It can be seen as an extension of OpenMS that offers almost all the features in python.

> **_NOTE:_** This introduction is aimed at users new to the field of LC-MS data analysis and will introduce some basics terms and concepts. How to handle the data analysis, available data structures, algorithms and more are covered in the various subsections of this documentation.

**CONDA**

If you use `conda`, you can install pyOpenMS from the `defaults` or `conda-forge`
channels:

```bash
# Best practice, use an environment rather than install in the base env
conda create -n my-env
conda activate my-env
# If you want to install from conda-forge
conda config --env --add channels conda-forge
# The actual install command
conda install -c bioconda -c conda-forge pyopenms
```

**PIP**

If you use `pip`, you can install pyOpenMS with:

```bash
pip install pyopenms
```
Also when using pip, it's good practice to use a virtual environment -
see  [Reproducible Installs](#reproducible-installs) below for why, and
[this guide](https://dev.to/bowmanjd/python-tools-for-managing-virtual-environments-3bko#howto)
for details on using virtual environments.


<a name="python-openms-install-guide"></a>
# Python and openms installation guide

Installing and managing packages in Python is complicated, there are a
number of alternative solutions for most tasks. This guide tries to give the
reader a sense of the best (or most popular) solutions, and give clear
recommendations. It focuses on users of Python, openms, and the PyData (or
numerical computing) stack on common operating systems and hardware.

### Pip & conda

The two main tools that install Python packages are `pip` and `conda`. Their
functionality partially overlaps (e.g. both can install `openms`), however, they
can also work together. We'll discuss the major differences between pip and
conda here - this is important to understand if you want to manage packages
effectively.

The first difference is that conda is cross-language and it can install Python,
while pip is installed for a particular Python on your system and installs other
packages to that same Python install only. This also means conda can install
non-Python libraries and tools you may need (e.g. compilers, CUDA, HDF5), while
pip can't.

The second difference is that pip installs from the Python Packaging Index
(PyPI), while conda installs from its own channels (typically "defaults" or
"conda-forge"). PyPI is the largest collection of packages by far, however, all
popular packages are available for conda as well.

The third difference is that conda is an integrated solution for managing
packages, dependencies and environments, while with pip you may need another
tool (there are many!) for dealing with environments or complex dependencies.


### Reproducible installs

As libraries get updated, results from running your code can change, or your
code can break completely. It's important to be able to reconstruct the set
of packages and versions you're using. Best practice is to:

1. use a different environment per project you're working on,
2. record package names and versions using your package installer;
   each has its own metadata format for this:
   - Conda: [conda environments and environment.yml](https://docs.conda.io/projects/conda/en/latest/user-guide/tasks/manage-environments.html)
   - Pip: [virtual environments](https://docs.python.org/3/tutorial/venv.html) and
  [requirements.txt](https://pip.readthedocs.io/en/latest/user_guide/#requirements-files)
   - Poetry: [virtual environments and pyproject.toml](https://python-poetry.org/docs/basic-usage/)

