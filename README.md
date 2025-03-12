# API Fetching Flutter App (MVVM + Provider)

This Flutter application follows the MVVM architecture with **Provider** to fetch and display data from a public API.

## Features:
- Fetches data from `https://jsonplaceholder.typicode.com/posts`
- Implements **MVVM architecture** using Provider
- Displays data in a scrollable **ListView**
- Shows a **CircularProgressIndicator** while fetching data
- Handles **API errors gracefully** with user-friendly messages

## Project Structure:
- **models/** → Defines the Post model.
- **services/** → Handles API calls.
- **viewmodels/** → Manages state using `ChangeNotifier` (Provider).
- **views/** → Contains the UI (HomePage).
- **utils/** → Utility files (if needed).

## Installation:
1. Clone the repository:https://github.com/Anandaja/API-Project.git
