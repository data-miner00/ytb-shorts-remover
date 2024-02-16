param (
    [Parameter(Mandatory=$true)]
    [string] $Manifest
)

$backupExist = Test-Path ./$Manifest.bak

if ($backupExist) {
    Write-Host Restoring from backup...
    Remove-Item -Path ./$Manifest
    Rename-Item ./$Manifest.bak -NewName $Manifest
    Write-Host Restored
} else {
    Write-Host The backup file does not exist
}