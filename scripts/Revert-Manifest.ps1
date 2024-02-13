$manifest = "manifest.json"
$backupExist = Test-Path ./$manifest.bak

if ($backupExist) {
    Write-Host Restoring from backup...
    Remove-Item -Path ./$manifest
    Rename-Item ./$manifest.bak -NewName $manifest
    Write-Host Restored
} else {
    Write-Host The backup file does not exist
}