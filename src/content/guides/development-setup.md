---
title: "Setting Up Your Development Environment"
description: "A comprehensive guide to setting up your computer for robotics development with Limelight Robotics."
difficulty: "beginner"
estimatedTime: "~1 hour"
tags: ["setup", "development", "software", "tools"]
lastUpdated: 2025-08-15
author: "Zander Lewis"
---

# Setting Up Your Development Environment
This guide will help you set up your computer with all the necessary software for robotics development with Limelight Robotics.

## Prerequisites
- Administrator access to install software
- Basic knowledge of using command line interfaces
- Internet access

## Required Software

### 1. Git Version Control
Git is essential for collaborating on code with the team.

#### Windows
1. Download [Git for Windows](https://git-scm.com/download/win)
2. Run the installer with default settings
3. Choose "Git Bash Here" during installation

#### macOS
```bash
# Install using Homebrew (recommended)
brew install git

# Or download from https://git-scm.com/download/mac
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install git
```

#### Configuration
After installation, configure Git with your information:
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### IntelliJ / Android Studio
1. Download and install [IntelliJ IDEA](https://www.jetbrains.com/idea/download/) or [Android Studio](https://developer.android.com/studio).

## Team-Specific Setup

### Join Team Organization
1. Create GitHub account if you don't have one
2. Provide username in the Discord
3. Accept invitation to Limelight Robotics organization

### Clone Team Repositories
```bash
# Main robot code repository (2025-2026)
git clone https://github.com/Limelight-Robotics/ftc-decode.git

# Documentation repository
git clone https://github.com/Limelight-Robotics/docs.git
```

### 3. Communication Tools

#### Discord
1. Download Discord desktop app
2. Join Limelight Robotics server

#### Email
1. Email [info@ashevillerobotics.org](mailto:info@ashevillerobotics.org)
