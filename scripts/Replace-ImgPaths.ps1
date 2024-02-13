$manifest = "manifest.json"

Copy-Item -Path .\$manifest -Destination .\$manifest.bak
(Get-Content $manifest) `
    -Replace 'icons/', '' `
    -Replace 'second regex', 'second replacement' |
  Out-File $manifest
