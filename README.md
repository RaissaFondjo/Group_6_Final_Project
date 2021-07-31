![image](https://user-images.githubusercontent.com/79486450/126399958-f9bbb4c1-9681-4a9b-b625-9116ec35f2b2.png)

# Airbnb Price Prediction Using Machine Learning and Sentiment Analysis
## Group_6_Final_Project

---

## Team Members:

|  **Member**  |  **Role**  |  **Responsibilities**  |                                            
|  :---  |  :---  |  :---  |
| [Syed Ahmed](https://github.com/ahmed17777)  |  Machine Learning Lead  |  Manage the Machine Learning Model and Design  |
| [Pascal Duchesneau](https://github.com/Pascalduc)  |  GitHub Lead  |  Manage the GitHub Repository, Designed Interactive element, Heroku |
| [Raissa Fondjo]( https://github.com/RaissaFondjo)  |  Dashboard Lead  |  Manage the Presentation Google slides & Designed Mock-up Dashboard  |
| [Geetha Shanthibushan](https://github.com/gshanthibushan)  |  Project Coordinator  |  Manage the Technologies and tracking group ideas, decisions, progress, and Designed Tableau Dashboard Presentation  |
| [Lalchand Shivraj](https://github.com/LalchandShivraj)  |  Database Lead  | Manage the Database and ETL Process  |
 
Even though we have assigned role to each team member, the members will and to contribute equally throughout the final project.

---

## Overview: 
Estimating a price for short time stay lodging is a difficult task for the hosts when it comes to listing the property in Airbnb.  In addition, customers select rental based on price, review, and picture of the property, but the property may not live up to its listing.   Therefore, our team decided to develop a price prediction model using machine learning and one of natural language processing technique of, sentiment analysis.  

For this project we selected Airbnb datasets from Kaggle.  The datasets contain information about the city of Boston, MA Airbnb properties listings and customer’s reviews of these properties.  

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


* A sample code to merge the two tables can be found in the Jupyter Notebook file `AirBnB.ipynb`.

```
airbnb_df = pd.merge(listings_df, reviews_df, how='left', left_on=['id'], right_on=['listing_id'])
airbnb_df.head(10)
```

### Database - Getting the actual data:

* Two datasets were used: listings2017.csv and reviews2017 (in the Resources folder).
* They are linked by the id and listing.id of the respective sets.


Steps used in Transforming and Loading the data were:

* On examing the dataset, the team decided on which columns to keep. This was processed by opening the csv file in excel and removing the unwanted columns.
* As shown in the AirBnB_data_transform_and_clean_script.txt file, a database and tables were created in PostgreSQL. Due to the listings dataset containing special characters in columns that we needed as numeric, the columns were created as varchar.
* The datasets were then imported into the respective tables.
* The AirBnB_data_transform_and_clean_script.txt file also contained all the sql for breaking out the amenities column into individual amenities, removing unwanted characters, changing column type, dropping columns no longer needed and joining the listings and review tables to get reviews. Since there were multiple reviews for about we decided to take just one review per listing (using 'distinct on'). Further, listings that did not have a review were kept.
* The cleansed data was then exported in csv format (listings_with_reviews).
* We created a MongoDB account, create a cluster and added all team members, so they can access the data.
* Using MongoDB Compass to connect to the cluster, a database and collection were created and the data imported as airbnb_cleaned
* As team members used the data, they realized that three other columns from the original listings dataset would enhance the visualization, so we repeated the steps above and included the columns. This did not take very long to do as most of the processing was in the AirBnB_data_transform_and_clean_script.txt file.
* Using MongoDB Compass to connect to the cluster, a new database and new collection were created and the data imported as airbnb_cleansed.

All related ETL and Database scripts and files are in the [ETL_and_Database](https://github.com/Pascalduc/Group_6_Final_Project/tree/main/ETL_and_Database) folder.


## Machine Learning Model Initiation:

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

