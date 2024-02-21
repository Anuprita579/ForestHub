# GDSC Challenge 2024
# GreenGuide

## Table of Contents

- [Problem Statement](#problem-statement)
- [Technologies Used](#technologies-used)
- [Feedback](#feedback)
- [Success](#success)
- [Next Steps](#next-steps)
- [Screenshots](#screenshots)
- [Demo](#demo)
- [Steps for Installation](#steps-for-installation)


## Problem Statement

In our rapidly urbanizing world, the decline of forested areas poses a critical challenge. Urban populations are surging, encroaching upon vital green spaces. This trend threatens biodiversity, exacerbates climate change, and undermines the well-being of communities. **GuideGreen** emerges as a solution, addressing the urgent need for afforestation. Our mission is clear: to combat deforestation and restore ecological balance. With each tree planted, we strive to safeguard our environment, ensuring a sustainable future for all. Our target audience spans communities, organizations, and individuals worldwide, united in our collective effort to preserve our planet's green heritage.
- Sustainable Development Goals of the United Nations : **Life on Land**

## Technologies Used
- Frontend
    - React
- Backend
    - Firebase
- Extra
    - **Machine Learning Model : Clarifai.com**
        - Implentation : Integrated into the Image Analyzer feature, where users input an image link for identification of animals or plants..
        - Reason to use this platform : It provides readily available machine learning models for free.
    - **Maps : OpenCage Geocoding API**
      - Implentation : Utilized in the Maps feature for locating nearby ForestHubs and enabling exploration.
      - Reason to use this platform : It offers 2,500 requests/day in its free tier consist
    - **Information : Wikipedia API**
      - Implentation :  Incorporated into the Image Analyzer feature, providing additional details about detected animals or plants from Wikipedia.
      - Reason to use this platform : Access to information at no cost
    - **Share : Whatsapp API**
      - Implentation :  Integrated into the Maps feature, allowing users to share ForestHub locations with friends and family for trip planning.
    - **News : GNews API**
      - Implentation : Utilized in the News Article feature to display forest-related news.
      - Reason to use this platform : Its free tier consist of 100 requests/day
    - **Sentimental Analysis : sentiment library (npm)**
      - Implentation : Employed in the News Article feature to analyze the sentiment of forest-related news articles - Positive, Negative or Neutral.
      - Reason to use this platform : Available for free.
    - **Charts : Apexcharts**
      - Implentation : Utilized in the Statistics feature to present forest-related data in interactive charts.
      - Reason to use this platform : Free to use.

## Feedback

## Success

## Next Steps

## Screenshots
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/b23e0e90-c155-4123-93d3-7cf2d9853aeb)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/f042ff0e-8f96-48e7-ac21-48c4f81c8dbc)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/b3b89dd8-44ff-4335-b4ae-b35526a95a8c)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/dc49e4f7-a238-4a7d-947e-2ce43639300d)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/23045753-1c7a-421a-a518-9b8946eebef1)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/fc53fdc2-33d2-4d08-8e13-3fad075a28cb)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/3de17389-4c8b-40e7-aabe-aa3b8d83bcb2)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/5d0147d4-54a2-40a0-b949-1e19a6475f4b)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/68885ce3-b1fa-4468-a718-7c4dbd86495a)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/1cf73890-e5fd-4791-91da-a28a8cc81545)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/414a48e8-1923-43d6-8158-acc693b53d50)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/92ab5a41-69f8-4259-b6a0-d81ef7c777d4)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/a1ea7377-f8c9-4917-badb-4999096220b1)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/a1aaea49-3942-454d-889e-b1d084d42ce0)
![image](https://github.com/Anuprita579/ForestHub/assets/141035951/17a2dfbe-5328-4667-8491-b06f9704d3b9)

## Demo 
https://youtu.be/35NgD6MUKio

## Steps for Installation

1. Clone the repository:
   ```
   git clone https://github.com/Anuprita579/ForestHub.git
   ```
2. Navigate to project directory
   ```
   cd ForestHub
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the application:
   ```
   npm run start
   ```
Open your browser and visit http://localhost:3000