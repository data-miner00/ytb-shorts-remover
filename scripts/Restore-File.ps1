param (
    [Parameter(Mandatory=$true)]
    [string] $File
)

$backupExist = Test-Path ./$File.bak

if ($backupExist) {
    Write-Host Restoring from backup...
    Remove-Item -Path ./$File
    Rename-Item ./$File.bak -NewName $File
    Write-Host Restored
} else {
    Write-Host The backup file does not exist
}