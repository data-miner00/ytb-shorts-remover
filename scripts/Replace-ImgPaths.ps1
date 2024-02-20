param (
    [Parameter(Mandatory=$true)]
    [string] $File
)

Copy-Item -Path .\$File -Destination .\$File.bak
(Get-Content $File) `
    -Replace 'icons/', '' `
    -Replace 'second regex', 'second replacement' |
  Out-File $File -Encoding utf8
