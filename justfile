# use Powershell
set shell := ["powershell.exe", "-c"]

builddir := ".dist"
zipFile := "YoutubeShortsRemover.zip"

default: ensure-path build

ensure-path:
    if (-Not (Test-Path {{ builddir }})) { \
        New-Item {{ builddir }} -ItemType Directory \
    }
    
build:
    # Get-ChildItem -Path manifest.json, index.js, icons/ytb-32x32.png, icons/ytb-48x48.png, icons/ytb-96x96.png, icons/ytb-144x144.png | Compress-Archive -DestinationPath {{ builddir }}/{{ zipFile }}
    Compress-Archive -Path * -DestinationPath {{ builddir }}/{{ zipFile }}

clean:
    Remove-Item {{ builddir }}/{{ zipFile }}