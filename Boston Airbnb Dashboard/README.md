# Airbnb Price Prediction Using Machine Learning and Sentiment Analysis

## Group_6_Final_Project

---

## Team Members:

|  **Member**  |  **Role**  |  **Responsibilities**  |                                            
|  :---  |  :---  |  :---  |
| [Syed Ahmed](https://github.com/ahmed17777)  |  Machine Learning Lead  |  Manage the Machine Learning Model and Design  |
| [Pascal Duchesneau](https://github.com/Pascalduc)  |  GitHub Lead  |  Manage the GitHub Repository  |
| [Raissa Fondjo]( https://github.com/RaissaFondjo)  |  Dashboard Lead  |  Manage the Presentation Dashboard  |
| [Geetha Shanthibushan](https://github.com/gshanthibushan)  |  Project Coordinator  |  Manage the Technologies and tracking group ideas, decisions, and progress  |
| [Lalchand Shivraj](https://github.com/LalchandShivraj)  |  Database Lead  | Manage the Database and ETL Process  |
 
Even though we have assigned role to each team member, the members will and to contribute equally throughout the final project.

---

## Overview: 
Estimating a price for short time stay lodging is a difficult task for the hosts when it comes to listing the property in Airbnb.  In addition, customers select rental based on price, review, and picture of the property, but the property may not live up to its listing.   Therefore, our team decided to develop a price prediction model using machine learning and one of natural language processing technique of, sentiment analysis.  

For this project we selected Airbnb datasets from Kaggle.  The datasets contains information about the city of Boston, MA Airbnb properties listings and customer’s reviews of these properties.  

## Source of Data: 

|  **Name**  |  **Data Source** |  **Data Details**  |      
|  :---  |  :---  |  :---  |
|  Kaggle  |  https://www.kaggle.com/airbnb/boston  |  Listings.csv, including full descriptions and average review score  |
|  Kaggle  |  https://www.kaggle.com/airbnb/boston  |  Reviews.csv, including unique id for each reviewer and detailed comments  |
|  Kaggle  |  https://www.kaggle.com/airbnb/boston  |  Calendar.csv, including listing id and the price and availability for that day  |


## Questions we want to answer with the data: 
- What are the key factors that affect the price of the rental property? 
    - We wanted to identify if the following key feature drive the price of the property: Neighborhood (Location), Competitor’s prices, Special Amenities, consumers’ reviews, and opinions.
    
- Within the same neighborhood what make a customer selecting one property vs another?
    - We wanted to identify if there is a correlation between reviews and # of times certain property being rent out.
    
- Which neighborhoods in Boston have the highest rental prices?
    - Reason behind the high price.


## Dashboard:
To get the insight view of the Boston dataset, we used Tableau Visualization method to demonstrate the findings and for the further analysis.

• Following Tools were used:
  * Tableau Desktop App - exported data out of MongoDB into JSON files (cleaned data)
  * Tableau Public Online version - exported data out of MongoDB into csv files (cleaned data)
  * Jupyter notebook for data cleaning
  * Tableau for visualizations - Imported data into Tableau.
     *Created and style worksheets, dashboards, and stories in Tableau.
 
• The interactive elements:
  * Dashboard Tableau URL actions -  Navigate to a web address from within the dashboard

- What are the key factors that affect the price of the rental property? 
    - We wanted to identify if the following key feature drive the price of the property: Neighborhood (Location), Competitor’s prices, Special Amenities, consumers’ reviews, and opinions.
    
- Within the same neighborhood what make a customer selecting one property vs another?
    - We wanted to identify if there is a correlation between reviews and # of times certain property being rent out.
    
- In the Airbnb Boston listing dataset neighborhoods are separated into 25 districts. To find which neighborhoods in Boston have the highest rental prices; we compared the average price of the neighborhoods and the listing count for each neighborhood to determine the relationship between the neighborhood average price and listing count.  The illustration below indicating that South Boston Waterfront, Bay Village, Leather District are the top three neighborhood that have higher average prices by listing.  The most popular neighborhood based on listing are Jamaica Plain, South End and Back Bay.  We can conclude that neighborhood with fewer listings have higher average listing price and neighborhood with higher listings has lower average price.

![image](https://user-images.githubusercontent.com/79486450/120937689-d85cd780-c6dc-11eb-9640-7fda4bc760e3.png)


## Tableau Visulaization:
#### [Airbnb Price Analysis](https://public.tableau.com/app/profile/geetha.shanthibushan/viz/AirbnbPriceAnalysisPrediction/AirbnbPriceAnalysis_1)
