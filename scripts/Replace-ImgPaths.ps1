param (
    [Parameter(Mandatory=$true)]
    [string] $Manifest
)

Copy-Item -Path .\$Manifest -Destination .\$Manifest.bak
(Get-Content $Manifest) `
    -Replace 'icons/', '' `
    -Replace 'second regex', 'second replacement' |
  Out-File $Manifest
