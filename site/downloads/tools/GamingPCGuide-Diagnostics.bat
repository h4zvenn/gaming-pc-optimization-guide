@echo off
setlocal
title Gaming PC Guide - Read-only diagnostics

where powershell.exe >nul 2>nul
if errorlevel 1 (
    echo Windows PowerShell was not found.
    pause
    exit /b 1
)

if not exist "%~dp0GamingPCGuide-Diagnostics.ps1" (
    echo The PowerShell script is missing. Keep both diagnostic files in the same folder.
    pause
    exit /b 1
)

powershell.exe -NoLogo -NoProfile -File "%~dp0GamingPCGuide-Diagnostics.ps1"
if errorlevel 1 (
    echo.
    echo The diagnostic menu exited with an error. Review the error message above.
    pause
    exit /b 1
)

exit /b 0
