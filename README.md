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

## Database ERD:
* PostgresSQL is used to store and manipulate data. The image below represents the tables of data that are uploaded onto the database in Postgres. The entity relational diagram allows for easier joining of tables with SQL and is a helpful reference while importing data into the database. There are two main tables with data that is used to build and perform the machine learning model. 
* The most common and obvious connect between the two datasets is the ID column.
![ERD-Air_BandB](https://user-images.githubusercontent.com/78666055/125123343-8b499800-e0c4-11eb-8a4d-483298cb137a.png)

* A sample code to merge the two tables can be found in the Jupyter Notebook file `AirBnB.ipynb`.

```
airbnb_df = pd.merge(listings_df, reviews_df, how='left', left_on=['id'], right_on=['listing_id'])
airbnb_df.head(10)
```

## Machine Learning Model:

  ![data-16-5-5-1-NLP-Pipeline](https://user-images.githubusercontent.com/45697471/125150334-fe76fc80-e10c-11eb-8974-252280baab95.png)


Our objective in this project is to predict Airbnb rental values using the features given in our dataset. We plan to do this by conducting a sentiment analysis using data about comments from `reviews2017.csv`, and feeding it to an NLP pipeline like the one shown above so that it can be used for machine learning, as well as taking variables from `listings2017.csv` to perform a multiple linear regression using the **sklearn** library. Therefore we will have two models: a linear regression model that uses customer sentiment to predict price, and a multiple linear regression model that uses variables from the `listings2017.csv` file. With our target variable being `price`, here are the features we have selected for the regression model: 

- `host_response_rate`
- `host_acceptance_rate`
- `property_type`
- `room_type`
- `accomodates`
- `bathrooms`
- `bedrooms`
- `beds`
- `bed_type`
- `amenities`
- `price`
- `security_deposit`
- `cleaning_fee`
- `extra_people`
- `number_of_reviews`
- `last_review`
- `review_scores_rating`
- `cancellation_policy`

Once the datasets are cleaned and any outliers are removed, we can use scikit-learn machine library's `f_regression()` function to provide correlation scores for the features listed above. Once we have these scores, we can select features that will increase our model's accuracy and drop any features that do not have a high correlation. This will help optimize our model for predictions. 

## Dashboard:
We will be using Tableau to create final dashboards. It will be directly tied to our Postgres database via a direct connection.

• The interactive elements we use include:
Navigation bar: includes tabs to Dashboards, Machine Learning and Github Repository pages
Features input: where users can select from twenty-two feature dropdowns to predict rent prices. Multiple Features can be displayed at once and selected areas of the graph can be enlarged with adapting axes.
Tableau dashboards: we will embed a number of Tableau dashboards in the Dashboards page

#### link to the Tableau Dashboard
https://public.tableau.com/authoring/BostonAirbnbRentPricesDataExploration/Numberoflistings/Dashboard%201#1. Where we will show our different interactive data visualizations one of them is the Correlation Between Rent Prices And Each Features.

