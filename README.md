# Airbnb Price Prediction Using Machine Learning and Sentiment Analysis

## Group_6_Final_Project

---

## Team Members:

|  **Member**  |  **Role**  |  **Responsibilities**  |                                            
|  :---  |  :---  |  :---  |
| [Syed Ahmed](https://github.com/ahmed17777)  |  Machine Learning Lead  |  Manage the Database and ETL Process  |
| [Pascal Duscesneau](https://github.com/Pascalduc)  |  GitHub Lead  |  Manage the GitHub Repository  |
| [Raissa Fondjo]( https://github.com/RaissaFondjo)  |  Dashboard Lead  |  Manage the Presentation Dashboard  |
| [Geetha Shanthibushan](https://github.com/gshanthibushan)  |  Project Coordinator  |  Manage the Technologies and tracking group ideas, decisions, and progress  |
| [Lalchand Shivraj](https://github.com/LalchandShivraj)  |  Dashboard Lead  |  Manage the Machine Learning Model and Design  |
 
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


## Questions that we want answer with the data: 
- What are the key factors that effect the price of the rental property? 
    - We wanted to identify if the following key feature drive the price of the property: Neighborhood (Location), Competitor’s prices, Special Amenities, consumers’ reviews, and opinions.
    
- Within the same neighborhood what make a customer to select one vs another property?
    - We wanted to identify if there is a correlation between reviews and # of times certain property being rent out.
    
- Which neighborhoods in Boston have the highest rental prices?
    - Reason behind the high price.

## ERD:
![ERD-Air_BandB](https://user-images.githubusercontent.com/78666055/125123343-8b499800-e0c4-11eb-8a4d-483298cb137a.png)

## Machine Learning Model:

Our objective in this project is to predict Airbnb rental values using the features given in our dataset. We plan to do this by conducting a sentiment analysis using data about comments from reviews2017.csv, and feeding it to an NLP pipeline so that it can be used for machine learning, as well as taking variables from listings2017.csv to perform a multiple linear regression.
