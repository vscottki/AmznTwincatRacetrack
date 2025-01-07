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
