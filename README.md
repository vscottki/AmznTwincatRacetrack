HMI notes:
-Recommended to use TwinCAT 32-bit to open HMI project (issues with saving .sln/solution file)
-TwinCAT v4026 requires NuGet packages (which requires saving solution file prior)
-Server will not start without NuGet packages for v4026
-Ensure the registry entry for HMI project path length is set to allow paths of length = 256

All necessary files are saved in project repo, including, but not limited to:
-xconfig file for simulation of XTS XL project
-motor .efw (EtherCAT firmware file)
-notes required to update and run the project using v4026:
--Beta XTS package feed
--Beta Motion package feed

In terminal, here are some (hopefully useful) tips on using git with TwinCAT:
-if you have a "feature" branch that has been succeeded by the main "Development" branch, go to the "feature" branch and rebase to the Development (or whichever desired) branch; resolve any conflicts on the feature branch.  The risks are therefore limited to feature/local branch, not the main Development branch.
-if you have modified the .gitignore file, and there are still "ignore" files or empty folders in the local repo, go to terminal, navigate to the repo and run "git clean -i -x" (this is 'git clean' and set to delete all ignored files, w/ verbose response); you can then choose what to do with the "untracked" files.
--you may wish/need to remove cached files (see here for further info: https://gist.github.com/triqadafi/4110e5d07bd8363ad74802a91b54b232)
