# use Powershell
set shell := ["powershell.exe", "-c"]

builddir := ".dist"
zipFile := "YoutubeShortsRemover.zip"

default: ensure-path prebuild build postbuild

ensure-path:
    if (-Not (Test-Path {{ builddir }})) { \
        New-Item {{ builddir }} -ItemType Directory \
    }

prebuild:
    Copy-Item -Path .\icons\* -Destination . -PassThru
    ./scripts/Replace-ImgPaths.ps1 -File manifest.json
    ./scripts/Replace-ImgPaths.ps1 -File popup.html

build:
    Compress-Archive -Path * -DestinationPath {{ builddir }}/{{ zipFile }} -Force -CompressionLevel NoCompression

postbuild:
    ./scripts/Remove-ImgFiles.ps1
    ./scripts/Restore-File.ps1 -File manifest.json
    ./scripts/Restore-File.ps1 -File popup.html

clean:
    Remove-Item {{ builddir }}/{{ zipFile }}

run:
    web-ext run