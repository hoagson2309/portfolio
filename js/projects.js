// Background video
window.PORTFOLIO_HERO_VIDEOS = [
  {
    title: "Gesture Recognition",
    client: "AI Project",
    src: "assets/videos/hand_gesture.mp4",
    poster: "assets/images/project-3.png"
  },
  {
    title: "AutoMaze Robot",
    client: "Embedded Project",
    src: "assets/videos/auto_maze.mp4",
    poster: "assets/images/project-5.png"
  },
  {
    title: "Stock Prediction",
    client: "AI Project",
    src: "assets/videos/nvda_stock.mp4",
    poster: "assets/images/project-1.png"
  }
];

// Edit this file to change your projects.
// Put your videos in assets/videos/ and images in assets/images/.

window.PORTFOLIO_PROJECTS = [
  {
    id: "nvda-stock",
    title: "NVDA Stock Price Prediction",
    client: "Personal Project",
    subtitle: "Predicting NVIDIA stock prices using machine learning models.",
    category: "ai",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-1.png",
    link: "project.html?id=nvda-stock",

    role: "Data Scientist / ML Engineer",
    tools: ["Python", "Random Forest", "Alpaca API", "Pandas", "Scikit-learn"],
    description: "A time-series regression project that pulls daily NVDA stock bars from the Alpaca Markets API (2022–2026) and uses a Random Forest (300 trees, max depth 10) to predict the next day's percentage return. Predictions are converted back into dollar prices to make results interpretable.",
    challenge: "Four key hurdles: preventing data leakage by shifting the target column by −1 so the model only ever sees 'today' to predict 'tomorrow'; the inherent noise of financial returns (low R² is normal and expected); preserving chronological order in the train/test split (no shuffling); and bridging the gap between abstract return percentages and actionable price values.",
    outcome: "The model achieves a dollar MAE of $2.78 per day, which is solid for a high-volatility stock like NVDA. The top feature is SMA_5, confirming the model latched onto short-term momentum. The latest run signals a +0.018% predicted return, translating to a $185.64 forecast price and a potential buy signal."
  },
  {
    id: "maze-robot",
    title: "Autonomous Maze Navigation Robot",
    client: "Group 28, Saxion University",
    subtitle: "A fully autonomous robot car that explores an unknown maze, finds treasure, and returns via the optimal route.",
    category: "embedded",
    year: "2025",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-5.png",
    link: "project.html?id=maze-robot",

    role: "Robotics / Embedded Developer",
    tools: ["C++", "Raspberry Pi Pico", "DFS", "A*", "Ultrasonic Sensors", "IR Sensors", "Jira", "GitHub"],
    description: "AutoMaze is a university group project (Group 28, Saxion) where a team of four built a fully autonomous robot car in C++ on a Raspberry Pi Pico. The robot's mission: enter an unknown maze, find a gold-coin treasure using IR sensors, and return to the entrance via the optimal route — all without hitting walls and within a 400×250×200 mm chassis. The project ran over 8 agile sprints using Jira and GitHub.",
    challenge: "Four main hurdles: the robot has no encoder or GPS, so position is tracked entirely by dead reckoning (motor timing + counted turns), making drift a real concern; IR voltage thresholds for distinguishing the grey path, white start line, and gold coin all required hands-on hardware calibration; the DFS backtracking logic must correctly unwind the stack and physically reverse through visited cells when blocked; and three ultrasonic sensors plus three IR channels plus all motor commands must work together in one coherent loop.",
    outcome: "A two-phase autonomous mission fully implemented: Phase 1 uses a DFS stack to explore the maze cell by cell, updating a 20×20 wall map in real time and stopping when the IR sensor detects the treasure (≤ 0.20 V); Phase 2 runs A* (Manhattan heuristic) on the now-known map and executes the optimal return path using PathFollow. Elapsed time for each phase is displayed on a 4-digit 7-segment display. A blind right-hand wall-following fallback (blindExplore) is also available. The codebase is fully modular across 8 C++ classes, and the robot was demonstrated live at Saxion's Battle in the Hall on June 19, 2025."
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    client: "Personal Project",
    subtitle: "Predicting house prices using regression models.",
    category: "ai",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-2.png",
    link: "project.html?id=house-price",

    role: "Data Scientist / ML Engineer",
    tools: ["Python", "LightGBM", "XGBoost", "Scikit-learn", "Pandas", "Matplotlib"],
    description: "A supervised regression project on the Ames Housing dataset (1,460 homes, 80+ features) aimed at predicting sale prices. The pipeline covers the full ML lifecycle: outlier removal, custom feature engineering, scikit-learn preprocessing pipelines, hyperparameter search, and ensemble modelling.",
    challenge: "Four main hurdles: a right-skewed target (addressed with log transformation), significant missing data across many columns (median/mode imputation), non-linear relationships (favouring tree-based models over linear ones), and high-dimensional mixed data (numerical + categorical) creating multicollinearity risks.",
    outcome: "The stacking ensemble (LightGBM + XGBoost → Ridge) achieved the best results with a test RMSE of $19,910 and R² = 0.928, comfortably outperforming both the linear baseline ($26,633 RMSE) and tuned LightGBM alone ($21,453 RMSE). Residuals narrowed from ±$300k down to ±$50k, with no strong systematic bias."
  },
  {
    id: "hand-gesture",
    title: "Hand Gesture Recognition",
    client: "Personal Project",
    subtitle: "Real-time hand gesture recognition using computer vision.",
    category: "ai",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-3.png",
    link: "project.html?id=hand-gesture",

    role: "AI / Computer Vision Developer",
    tools: ["Python", "TensorFlow", "OpenCV", "CNN", "Conv1D (TCN)", "Keras"],
    description: "A real-time hand gesture recognition system that combines two deep learning paradigms: a CNN extracts spatial features from each individual frame (hand shape, edges), and causal Conv1D layers (TCN-style) learn motion patterns across a 16-frame sequence. The webcam feed runs through a sliding buffer — every new frame is appended and the oldest dropped — so the model is always predicting on the most recent 0.5 seconds of movement. The predicted gesture and confidence score are overlaid live using OpenCV.",
    challenge: "Four key issues: the dataset is tiny (only 24 videos, 8 per gesture), making overfitting a real concern and generalisation uncertain; the 16-frame buffer introduces a natural latency before the first prediction fires; the model is sensitive to lighting and background conditions not seen during training (all recorded in one environment); and the preprocessing pipeline — resize to 64×64, BGR→RGB, divide by 255 — must be executed identically at inference time or predictions break silently.",
    outcome: "The model achieves ~98% training accuracy and near-100% validation accuracy, though the dataset is small enough that these numbers should be treated with caution. The sliding-window approach (stride=4) effectively multiplies the number of training samples from each video. The trained model is saved as gesture_model.h5 and class labels as classes.json, making deployment straightforward. Future improvements identified include adding more gesture classes, increasing dataset size, and integrating MediaPipe for robust hand tracking."
  },
  {
    id: "sensor-monitoring",
    title: "Embedded Sensor Monitoring System",
    client: "Personal Project",
    subtitle: "Real-time sensor data monitoring on embedded hardware.",
    category: "embedded",
    year: "2026",
    featured: false,
    mediaType: "image",
    media: "assets/images/project-4.png",
    link: "project.html?id=sensor-monitoring",

    role: "Embedded Systems Developer",
    tools: ["C", "Raspberry Pi Pico", "I2C", "SPI", "LM75B", "APDS-9306", "MCP23S08"],
    description: "A final embedded systems assignment built on the Raspberry Pi Pico in C, combining I2C sensor communication and SPI LED control into one coherent system. It reads temperature (LM75B) and ambient light (APDS-9306) every 500 ms, displays values as binary patterns on an 8-LED array via an MCP23S08 I/O expander, and prints readings to a USB serial monitor. A single button toggles between the two display modes. The project was the culmination of a 10-week journey covering GPIO, timers, ADC, UART, SPI, and I2C.",
    challenge: "Four main hurdles: running two protocols (I2C for sensors, SPI for LEDs) simultaneously without bus conflicts; correctly parsing multi-byte sensor data at the bit level (11-bit temperature with sign extension, 20-bit light packed across 3 bytes); managing all three interrupt sources (button, OS pin, INT pin) through the RP2040's single shared GPIO callback; and properly re-arming the APDS-9306 interrupt by reading MAIN_STATUS to clear the active flag after each event.",
    outcome: "The system fully delivers: temperature measured at 0.125 °C precision (11-bit), ambient light at 20-bit resolution, threshold interrupts confirmed on both sensors via LED triple-flash and serial output, and button debouncing working cleanly at 200 ms. All features including the optional interrupt assignment were implemented and tested."
  }
  
];