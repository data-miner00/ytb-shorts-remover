$extensions = @("png", "svg")
foreach ($extension in $extensions) {
    Remove-Item -Path *.$extension
}